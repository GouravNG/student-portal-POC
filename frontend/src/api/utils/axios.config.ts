import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT ?? 'http://localhost:5000',
  timeout: 2 * 1000,
})
