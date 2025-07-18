import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.API_ENDPOINT,
  timeout: 2 * 1000,
})
