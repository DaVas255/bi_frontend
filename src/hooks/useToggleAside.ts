import { selectOpen, toggle } from '@/app/lib/features/aside/asideSlice'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'

export function useToggleAside() {
  const isOpen = useAppSelector(selectOpen)
  const dispatch = useAppDispatch()

  const toggleAside = () => dispatch(toggle())

  return { isOpen, toggleAside }
}
