import { Route, Routes } from 'react-router'
import ProtectedRoute from './protected.route'
import AppRouter from './app.route'
import AuthComponent from '../components/Login.component'
import { Typography } from '@mui/material'

const BaseRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>{AppRouter()}</Route>
      <Route path='login' element={<AuthComponent />} />
      <Route
        path='*'
        element={<Typography variant='h1'>404-Page Not Found!!</Typography>}
      />
    </Routes>
  )
}

export default BaseRouter
