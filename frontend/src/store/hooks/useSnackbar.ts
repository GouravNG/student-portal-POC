import { useShallow } from 'zustand/react/shallow'
import useUtilsStore from '../utils.store'

export const useSnackBar = () =>
  useUtilsStore(
    useShallow(({ setMessage, setSeverity, message, severity }) => ({
      setMessage,
      setSeverity,
      message,
      severity,
    })),
  )
