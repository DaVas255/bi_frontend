import type { Metadata } from 'next'

import { Users } from '@/app/admin/Users'

export const metadata: Metadata = {
  title: 'Admin SSR'
}

export default async function AdminPage() {
  return <Users />
}
