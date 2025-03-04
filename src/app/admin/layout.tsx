import type { PropsWithChildren } from 'react'

import { UserRole } from '@/types/auth.types'

import { protectPage } from '@/utils/server/protect-page'

export default async function AdminLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.ADMIN)

  return children
}
