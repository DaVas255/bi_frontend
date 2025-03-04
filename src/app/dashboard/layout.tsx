import type { PropsWithChildren } from 'react'

import { UserRole } from '@/types/auth.types'

import { protectPage } from '@/utils/server/protect-page'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.PREMIUM)

  return children
}
