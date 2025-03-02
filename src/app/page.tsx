import { Profile } from '@/components/features/Profile/Profile'

import { protectPage } from '@/utils/server/protect-page'

async function HomePage() {
  await protectPage()

  return (
    <div className='h-screen flex items-center justify-center'>
      <Profile />
    </div>
  )
}

export default HomePage
