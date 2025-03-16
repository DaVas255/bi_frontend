'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PROTECT_PAGES } from '@/config/pages/protect.config'

import styles from './Header.module.scss'
import ProfileSvg from '@/app/assets/icons/ProfileSvg.svg'

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className={styles.header}>
      <Link
        href={PROTECT_PAGES.PROFILE}
        className={cn(
          styles.header__profile,
          pathName === PROTECT_PAGES.PROFILE && styles.header__profile_active
        )}
      >
        <ProfileSvg />
      </Link>
    </header>
  )
}
