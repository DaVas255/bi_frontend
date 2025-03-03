import { Metadata } from 'next'

import { Profile } from '@/components/features/Profile/Profile'

import { protectPage } from '@/utils/server/protect-page'

export const metadata: Metadata = {
  title: 'Профиль'
}

export default async function ProfilePage() {
  await protectPage()

  return <Profile />
}
