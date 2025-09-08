export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173',
  API_TIMEOUT_MS: Number(import.meta.env.VITE_API_TIMEOUT_MS || 8000)
}
