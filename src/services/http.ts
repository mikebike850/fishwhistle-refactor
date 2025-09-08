import { env } from '../config/env'

export type HttpError = { status: number; message: string; details?: unknown }

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), env.API_TIMEOUT_MS)
  try {
    const res = await fetch(`${env.API_BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      signal: controller.signal,
      ...options
    })
    const text = await res.text()
    const data = text ? JSON.parse(text) : null
    if (!res.ok) {
      throw { status: res.status, message: res.statusText, details: data } as HttpError
    }
    return data as T
  } catch (e: any) {
    if (e?.name === 'AbortError') throw { status: 0, message: 'Request timed out' } as HttpError
    throw e
  } finally { clearTimeout(timeout) }
}

export const http = {
  get<T>(path: string) { return request<T>(path) },
  post<T>(path: string, body?: unknown) { return request<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined }) }
}
