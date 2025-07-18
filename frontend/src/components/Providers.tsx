import { BrowserRouter } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../api'
import CssBaseline from '@mui/material/CssBaseline'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CssBaseline />
          {children}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default Providers
