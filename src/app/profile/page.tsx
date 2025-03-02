import { Profile } from '@/components/features/Profile/Profile'

import { protectPage } from '@/utils/server/protect-page'

export default async function ProfilePage() {
  await protectPage()

  return <Profile />
}
