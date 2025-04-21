'use client'

import { useCallback, useEffect, useRef } from 'react'

import { selectOpen, toggle } from '@/app/lib/store/features/aside/asideSlice'
import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks'

export function useToggleAside() {
  const isOpen = useAppSelector(selectOpen)
  const dispatch = useAppDispatch()
  const asideRef = useRef<HTMLElement>(null)

  const toggleAside = useCallback(() => {
    dispatch(toggle())
  }, [dispatch])

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        asideRef.current &&
        !asideRef.current.contains(event.target as Node)
      ) {
        dispatch(toggle())
      }
    },
    [isOpen, dispatch]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, handleClickOutside])

  return { isOpen, toggleAside, asideRef }
}
