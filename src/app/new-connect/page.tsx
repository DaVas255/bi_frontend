'use client'

import { useQuery } from '@tanstack/react-query'

import imsService from '@/services/ims/ims.service'

export default function NewConnect() {
  const { data, isLoading } = useQuery({
    queryKey: ['ims'],
    queryFn: () => imsService.getAll()
  })

  return <div>{JSON.stringify(data)}</div>
}
