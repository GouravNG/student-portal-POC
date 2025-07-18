import { useMutation } from '@tanstack/react-query'
import { fn_login } from '../function/auth.function'
import type { LoginRequest } from '../function/types'
import { useAuth } from '../../store/hooks/useAuth'
import { useLocation, useNavigate } from 'react-router'

export const useLogin = () => {
  const { toggleIsAuth } = useAuth()
  const { state } = useLocation()
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (request: LoginRequest) => fn_login(request),
    onSuccess: () => {
      toggleIsAuth()
      navigate(state ?? '/test')
    },
    onError: () => {},
  })
}
