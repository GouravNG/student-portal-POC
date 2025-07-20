import { Outlet, useLocation } from 'react-router'
import useSideBar from '../../store/hooks/useSideBar'
import SideBar from '../Drawer.component'
import Header from '../Header.component'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const OutletHeader = () => {
  const { pathname } = useLocation()
  return (
    <Typography
      variant='h5'
      component={'h2'}
      sx={{ fontWeight: 'regular', pt: 2 }}
    >
      {pathname.substring(1).replace('-', ' ').toLocaleUpperCase()}
    </Typography>
  )
}

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
        <OutletHeader />
        <Outlet />
      </Box>
    </>
  )
}

export default CommonLayout
