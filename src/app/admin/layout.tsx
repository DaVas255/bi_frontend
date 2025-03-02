import type { PropsWithChildren } from 'react'

import { protectPage } from '@/utils/server/protect-page'

import { UserRole } from '@/services/auth/auth.types'

export default async function AdminLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.ADMIN)

  return children
}
