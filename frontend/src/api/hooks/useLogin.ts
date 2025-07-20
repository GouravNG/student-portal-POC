import { useMutation } from '@tanstack/react-query'
import { fn_login } from '../function/auth.function'
import type { LoginRequest } from '../function/types'
import { useAuth } from '../../store/hooks/useAuth'
import { useLocation, useNavigate } from 'react-router'
import { useSnackBar } from '../../store/hooks'
import { AxiosError } from 'axios'

export const useLogin = () => {
  const { toggleIsAuth } = useAuth()
  const { state } = useLocation()
  const navigate = useNavigate()
  const { setMessage, setSeverity } = useSnackBar()

  return useMutation({
    mutationKey: ['login'],
    mutationFn: (request: LoginRequest) => fn_login(request),

    onSuccess: ({ data }) => {
      toggleIsAuth()
      setSeverity('success')
      setMessage(data?.message || 'Loggedin successfully')
      navigate(state ?? '/test')
    },

    onError: (e) => {
      setSeverity('error')
      if (e instanceof AxiosError) {
        console.log(e)
        setMessage(
          e.response?.data?.message ??
            e.message ??
            'Plese enter correct credentials',
        )
      } else setMessage('Unknow error occurred')
    },
  })
}
