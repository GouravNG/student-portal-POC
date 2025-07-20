import Drawer from '@mui/material/Drawer'
import useSideBar from '../store/hooks/useSideBar'
import Stack from '@mui/material/Stack'
import { SideBarElements } from '../properties'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'

const SideBarContent = () => {
  return (
    <>
      <Stack
        spacing={2}
        useFlexGap
        sx={{
          m: 1,
          p: 1,
        }}
      >
        {SideBarElements.map((i, idx) => {
          return (
            <Button
              component={NavLink}
              to={i.link}
              key={idx}
              startIcon={i.icon()}
              variant='text'
              disableElevation
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                color: 'black',
                py: 1.5,
                ':hover': { background: '#f5ffdaff' }, //TOOD: STANDARDIZE
              }}
            >
              {i.name}
            </Button>
          )
        })}
      </Stack>
    </>
  )
}

const SideBarFooter = () => {
  return (
    <>
      <Box sx={{ mt: 'auto' }}>
        <Card variant='outlined' sx={{ m: 1 }}>
          <CardHeader
            title='Gourav Gunaga'
            subheader='ECE SEM-7'
            avatar={
              <Avatar src='' alt='Profile Pic'>
                GG
              </Avatar>
            }
          />
        </Card>
      </Box>
    </>
  )
}

const SideBar = () => {
  const { isSideBar, toggleSideBar } = useSideBar()
  const DRAWER_WIDTH = 240
  return (
    <>
      <Drawer
        open={isSideBar}
        onClose={() => toggleSideBar()}
        variant='persistent'
        sx={{
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <SideBarContent />
        <SideBarFooter />
      </Drawer>
    </>
  )
}

export default SideBar
