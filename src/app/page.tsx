import { protectPage } from '@/utils/server/protect-page'

import { ProfileInfo } from '@/app/ProfileInfo'

async function HomePage() {
  await protectPage()

  return (
    <div>
      <h1>Home Page</h1>
      <p>(only for loggedIn user)</p>
      <p>Для проверки прав, есть страницы: /premium, /admin, /manager</p>

      <ProfileInfo />
    </div>
  )
}

export default HomePage
