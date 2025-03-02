import { protectPage } from '@/utils/server/protect-page'

import { ProfileInfo } from '@/app/ProfileInfo'

async function HomePage() {
  await protectPage()

  return (
    <div className='h-screen flex items-center justify-center'>
      <ProfileInfo />
    </div>
  )
}

export default HomePage
