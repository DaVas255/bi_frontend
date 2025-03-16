import { useCallback } from 'react'

import { selectOpen, toggle } from '@/app/lib/features/aside/asideSlice'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'

export function useToggleAside() {
  const isOpen = useAppSelector(selectOpen)
  const dispatch = useAppDispatch()

  const toggleAside = useCallback(() => {
    dispatch(toggle())
  }, [dispatch])

  return { isOpen, toggleAside }
}
