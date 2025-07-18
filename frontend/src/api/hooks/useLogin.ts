import { useMutation } from '@tanstack/react-query'
import { fn_login } from '../function/auth.function'
import type { LoginRequest } from '../function/types'

export const useLogin = () =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: (request: LoginRequest) => fn_login(request),
  })
