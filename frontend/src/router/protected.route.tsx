import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../store/hooks/useAuth'

const ProtectedRoute = () => {
  const { isAuth } = useAuth()
  const { pathname } = useLocation()
  return (
    <>{isAuth ? <Outlet /> : <Navigate to={'/login'} state={pathname} />}</>
  )
}

export default ProtectedRoute
