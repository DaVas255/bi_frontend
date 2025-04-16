'use client'

import { Loader } from '@/components/ui/Loader/Loader'

export default function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Loader />
    </div>
  )
}
