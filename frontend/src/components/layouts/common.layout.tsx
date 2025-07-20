import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Drawer,
  IconButton,
  Stack,
} from '@mui/material'
import { Sidebar } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { SideBarElements } from '../../properties'

const CommonLayout = () => {
  const [isSideBar, toggleSideBar] = useState(true)
  const DRAWER_WIDTH = 240

  return (
    <>
      <Drawer
        open={isSideBar}
        onClose={() => toggleSideBar(!isSideBar)}
        variant='persistent'
        sx={{
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
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
      </Drawer>
      <Box
        sx={{
          marginLeft: isSideBar ? 32 : 0,
          transition: 'margin  0.2s',
          display: 'flex',
        }}
      >
        <IconButton
          onClick={() => toggleSideBar(!isSideBar)}
          sx={{
            ':hover': {
              background: 'white',
            },
          }}
        >
          <Sidebar />
        </IconButton>
        <Outlet />
      </Box>
    </>
  )
}

export default CommonLayout
