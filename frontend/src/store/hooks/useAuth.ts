import { useShallow } from 'zustand/react/shallow'
import usePersisStore from '../persist.store'

export const useAuth = () =>
  usePersisStore(
    useShallow(({ isAuth, toggleIsAuth }) => ({
      isAuth,
      toggleIsAuth,
    })),
  )
