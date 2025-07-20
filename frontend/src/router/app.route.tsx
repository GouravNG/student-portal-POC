import { Navigate, Route } from 'react-router'
import CommonLayout from '../components/layouts/common.layout'

const AppRouter = () => {
  return (
    <Route element={<CommonLayout />}>
      <Route index element={<Navigate to={'/assignments'} />} />
      <Route path='survey' element={<h1>Survey</h1>} />
      <Route path='notifications' element={<h1>Notifications</h1>} />
      <Route path='assignments' element={<h1>Assignments</h1>} />
      <Route path='academic-records' element={<h1>Academic Records</h1>} />
      <Route path='calender' element={<h1>Calender</h1>} />
      <Route path='placement-cell' element={<h1>Placement Cell</h1>} />
    </Route>
  )
}
export default AppRouter
