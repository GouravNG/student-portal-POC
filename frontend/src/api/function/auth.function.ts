import { endpoint_login } from '../endpoints/auth.endpoint'
import { apiClient } from '../utils/axios.config'
import type { LoginRequest } from './types'

export const fn_login = (body: LoginRequest) =>
  apiClient.post(endpoint_login(), body)
