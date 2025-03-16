'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PROTECT_PAGES } from '@/config/pages/protect.config'

import styles from './Aside.module.scss'
import Logo from '@/app/assets/icons/Logo.svg'

export default function Aside() {
  const pathName = usePathname()

  return (
    <aside className={styles.aside}>
      <Link
        href='/'
        className={styles.aside__logo}
      >
        BI
        <Logo />
      </Link>

      <nav className={styles.aside__nav}>
        <Link
          href='/'
          className={cn(
            (styles.aside__navLink,
            pathName === '/' && styles.aside__navLink_active)
          )}
        >
          Главная
        </Link>

        <Link
          href={PROTECT_PAGES.NEW_CONNECT}
          className={cn(
            (styles.aside__navLink,
            pathName === PROTECT_PAGES.NEW_CONNECT &&
              styles.aside__navLink_active)
          )}
        >
          Создать
        </Link>
      </nav>
    </aside>
  )
}
