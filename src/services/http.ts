import { env } from '../config/env';

export type HttpError = {
  status: number;
  message: string;
  details?: unknown;
};

function isAbortError(e: unknown): e is DOMException {
  return e instanceof DOMException && e.name === 'AbortError';
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), env.API_TIMEOUT_MS);

  try {
    const res = await fetch(`${env.API_BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      signal: controller.signal,
      ...options,
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
      throw { status: res.status, message: res.statusText, details: data } as HttpError;
    }
    return data as T;
  } catch (e: unknown) {
    if (isAbortError(e)) {
      throw { status: 0, message: 'Request timed out' } as HttpError;
    }
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}

export const http = {
  get<T>(path: string) {
    return request<T>(path);
  },
  post<T>(path: string, body?: unknown) {
    return request<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined });
  },
  put<T>(path: string, body?: unknown) {
    return request<T>(path, { method: 'PUT', body: body ? JSON.stringify(body) : undefined });
  },
  patch<T>(path: string, body?: unknown) {
    return request<T>(path, { method: 'PATCH', body: body ? JSON.stringify(body) : undefined });
  },
  delete<T>(path: string) {
    return request<T>(path, { method: 'DELETE' });
  },
};
