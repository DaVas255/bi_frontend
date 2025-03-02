import type { PropsWithChildren } from 'react'

import { protectPage } from '@/utils/server/protect-page'

import { UserRole } from '@/services/auth/auth.types'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.PREMIUM)

  return children
}
