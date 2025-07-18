import { Route } from 'react-router'
import CommonLayout from '../components/layouts/common.layout'

const AppRouter = () => {
  return (
    <Route element={<CommonLayout />}>
      <Route index element={<h1>Studnet Portal</h1>} />
    </Route>
  )
}
export default AppRouter
