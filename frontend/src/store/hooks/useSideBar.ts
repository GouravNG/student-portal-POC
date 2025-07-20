import { useShallow } from 'zustand/react/shallow'
import useUtilsStore from '../utils.store'

const useSideBar = () =>
  useUtilsStore(
    useShallow(({ isSideBar, toggleSideBar }) => ({
      isSideBar,
      toggleSideBar,
    })),
  )

export default useSideBar
