import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { LogOut, MoonIcon, Sidebar } from 'lucide-react'
import useSideBar from '../store/hooks/useSideBar'
import { UniName } from '../properties'
import { useAuth } from '../store/hooks'

const UtilityButtons = () => {
  const { toggleIsAuth } = useAuth()
  const logoutHandler = () => {
    toggleIsAuth()
  }
  return (
    <>
      <Stack direction={'row'} spacing={2} sx={{ marginLeft: 'auto' }}>
        <IconButton>
          <MoonIcon />
        </IconButton>
        <IconButton onClick={logoutHandler}>
          <LogOut />
        </IconButton>
      </Stack>
    </>
  )
}

const Logo = () => {
  return (
    <>
      <Typography
        color='black'
        component='h1'
        variant='h4'
        sx={{ ml: 2, fontWeight: 'bold' }}
      >
        {UniName}
      </Typography>
    </>
  )
}

const Header = () => {
  const { isSideBar, toggleSideBar } = useSideBar()
  return (
    <>
      <AppBar
        position='sticky'
        sx={{ backgroundColor: 'whitesmoke' }}
        variant='outlined'
      >
        <Toolbar
          sx={{
            marginLeft: isSideBar ? 32 : 0,
            transition: 'margin  0.2s',
          }}
        >
          <IconButton
            onClick={() => toggleSideBar()}
            sx={{
              p: 0,
              m: 0,
              backgroundColor: 'inherit',
            }}
          >
            <Sidebar />
          </IconButton>
          <Logo />
          <UtilityButtons />
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Header
