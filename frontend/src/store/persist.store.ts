import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type PersistStore = {
  isAuth: boolean
  toggleIsAuth: () => void
  isViewPassword: boolean
  toggleViewPassword: () => void
}

const usePersisStore = create<PersistStore>()(
  persist(
    (set) => ({
      isAuth: false,
      isViewPassword: false,
      toggleViewPassword: () =>
        set((state) => ({ isViewPassword: !state.isViewPassword })),
      toggleIsAuth: () =>
        set((state) => ({
          isAuth: !state.isAuth,
        })),
    }),
    { name: 'auth' },
  ),
)

export default usePersisStore
