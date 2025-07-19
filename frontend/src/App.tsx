import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar'
import BaseRouter from './router/base.route'
import Alert from '@mui/material/Alert'
import { useSnackBar } from './store/hooks'

function App() {
  const { message, severity, setMessage } = useSnackBar()

  const handleClose = (
    _e: React.SyntheticEvent<unknown> | Event,
    reason: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      setMessage('')
      return
    }
    if (reason === 'timeout') {
      setMessage('')
      return
    }
  }

  return (
    <>
      {BaseRouter()}
      <Snackbar
        open={!!message}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </>
  )
}

export default App
