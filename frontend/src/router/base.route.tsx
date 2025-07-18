import { Route, Routes } from 'react-router'
import ProtectedRoute from './protected.route'
import AppRouter from './app.route'
import AuthComponent from '../components/Login.component'

const BaseRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>{AppRouter()}</Route>
      <Route path='login' element={<AuthComponent />} />
    </Routes>
  )
}

export default BaseRouter
