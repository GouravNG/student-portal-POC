import { Outlet } from 'react-router'
import useSideBar from '../../store/hooks/useSideBar'
import SideBar from '../Drawer.component'
import Header from '../Header.component'
import Box from '@mui/material/Box'

const CommonLayout = () => {
  const { isSideBar } = useSideBar()
  return (
    <>
      <Header />
      <SideBar />
      <Box
        sx={{
          marginLeft: isSideBar ? 35 : 3,
          transition: 'margin  0.2s',
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default CommonLayout
