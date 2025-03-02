'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Header.module.scss'
import Logo from '@/app/assets/icons/Logo.svg'
import ProfileSvg from '@/app/assets/icons/ProfileSvg.svg'

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className={styles.header}>
      <Link
        href='/'
        className={styles.header__logo}
      >
        BI
        <Logo />
      </Link>

      <nav className={styles.header__nav}>
        <Link
          href='/'
          className={cn(
            (styles.header__navLink,
            pathName === '/' && styles.header__navLink_active)
          )}
        >
          Главная
        </Link>
      </nav>

      <Link
        href='/profile'
        className={cn(
          styles.header__profile,
          pathName === '/profile' && styles.header__profile_active
        )}
      >
        <ProfileSvg />
      </Link>
    </header>
  )
}
