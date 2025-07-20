import type { AlertProps } from '@mui/material'
import { create } from 'zustand'

export type SnackBarSeverity = AlertProps['severity']

type Utils = {
  message: string | undefined
  severity: SnackBarSeverity
  setMessage: (message: string) => void
  setSeverity: (severity: SnackBarSeverity) => void

  isSideBar: boolean
  toggleSideBar: () => void
}

const useUtilsStore = create<Utils>((set) => ({
  message: undefined,
  severity: undefined,
  setMessage: (message) => set({ message }),
  setSeverity: (severity) => set({ severity }),
  isSideBar: true,
  toggleSideBar: () => set((s) => ({ isSideBar: !s.isSideBar })),
}))

export default useUtilsStore
