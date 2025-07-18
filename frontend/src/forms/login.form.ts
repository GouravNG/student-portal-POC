import z from 'zod/v4'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const loginSchema = z.object({
  studentEmail: z.email('Please enter valid email address.'),
  studentPassword: z.string().min(5, 'Minimum Length Should be 5'),
})

export type LoginRequest = z.infer<typeof loginSchema>

export const useLoginForm = () =>
  useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  })
