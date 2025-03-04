import type { PropsWithChildren } from 'react'

import { UserRole } from '@/types/auth.types'

import { protectPage } from '@/utils/server/protect-page'

export default async function ManagerLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.MANAGER)

  return children
}
