import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type PersistStore = {
  isAuth: boolean
  toggleIsAuth: () => void
}

const usePersisStore = create<PersistStore>()(
  persist(
    (set) => ({
      isAuth: false,
      toggleIsAuth: () =>
        set((state) => ({
          isAuth: !state.isAuth,
        })),
    }),
    { name: 'auth' },
  ),
)

export default usePersisStore
