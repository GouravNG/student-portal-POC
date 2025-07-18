import { useViewPassword } from '../store/hooks/useAuth'
import { Eye, EyeClosed } from 'lucide-react'

import {
  Button,
  Card,
  Container,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import { useLoginForm, type LoginRequest } from '../forms/login.form'
import { useLogin } from '../api/hooks/useLogin'

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
          // label='Email'
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
