import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../store/hooks/useAuth'

const AuthComponent = () => {
  const { toggleIsAuth } = useAuth()
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleSignin = () => {
    toggleIsAuth()
    navigate(state ?? '/test')
  }
  return (
    <>
      <button onClick={handleSignin}>LOGIN</button>
    </>
  )
}

export default AuthComponent
