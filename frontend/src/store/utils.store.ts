import type { AlertProps } from '@mui/material'
import { create } from 'zustand'

export type SnackBarSeverity = AlertProps['severity']

type Utils = {
  message: string | undefined
  severity: SnackBarSeverity
  setMessage: (message: string) => void
  setSeverity: (severity: SnackBarSeverity) => void
}

const useUtilsStore = create<Utils>((set) => ({
  message: undefined,
  severity: undefined,
  setMessage: (message) => set({ message }),
  setSeverity: (severity) => set({ severity }),
}))

export default useUtilsStore
