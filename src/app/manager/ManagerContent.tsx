'use client'

import { useQuery } from '@tanstack/react-query'

import UserService from '@/services/user.service'

export function ManagerContent() {
  const { data, isLoading } = useQuery({
    queryKey: ['manager-content'],
    queryFn: () => UserService.fetchManagerContent()
  })

  return (
    <div>
      <h1>Only for Managers:</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <p>{data?.data.text || 'Not found!'}</p>
      )}
    </div>
  )
}
