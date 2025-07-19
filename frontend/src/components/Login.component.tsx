import { useViewPassword } from '../store/hooks/useAuth'
import { useLoginForm, type LoginRequest } from '../forms/login.form'
import { useLogin } from '../api'
import { Eye, EyeClosed } from 'lucide-react'

import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'

const LoginForm = () => {
  const { isViewPassword, toggleViewPassword } = useViewPassword()
  const { mutate, isPending } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()

  const handleSignin = (data: LoginRequest) => {
    mutate(data)
  }
  return (
    <Stack spacing={2} component={'form'} onSubmit={handleSubmit(handleSignin)}>
      <FormControl error={!!errors.studentEmail}>
        <TextField
          placeholder='ex:yourname@vcet.com'
          {...register('studentEmail')}
        />
        <FormHelperText>
          {!errors.studentEmail
            ? `Note: Site is accessible only with school email.`
            : `${errors.studentEmail.message}`}
        </FormHelperText>
      </FormControl>
      <FormControl error={!!errors.studentPassword}>
        <OutlinedInput
          {...register('studentPassword')}
          type={isViewPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton onClick={toggleViewPassword}>
                {isViewPassword ? <Eye /> : <EyeClosed />}
              </IconButton>
            </InputAdornment>
          }
          placeholder='Enter your password'
        />
        {!!errors.studentPassword && (
          <FormHelperText>{errors.studentPassword.message}</FormHelperText>
        )}
      </FormControl>
      <Button
        type='submit'
        variant='contained'
        disabled={isPending}
        loading={isPending}
      >
        Login
      </Button>
    </Stack>
  )
}

const AuthComponent = () => {
  return (
    <>
      <Container maxWidth='lg' sx={{ p: 2, height: '100vh', display: 'flex' }}>
        <Card
          sx={{
            margin: 'auto',
            p: 2,
            minWidth: { md: 450 },
          }}
          variant='outlined'
        >
          <LoginForm />
        </Card>
      </Container>
    </>
  )
}

export default AuthComponent
