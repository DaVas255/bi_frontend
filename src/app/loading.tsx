'use client'

import { Loader } from '@/components/ui/Loader/Loader'

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999
      }}
    >
      <Loader />
    </div>
  )
}
