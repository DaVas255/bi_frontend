import type { PropsWithChildren } from 'react'

import { protectPage } from '@/utils/server/protect-page'

import { UserRole } from '@/services/auth/auth.types'

export default async function ManagerLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.MANAGER)

  return children
}
