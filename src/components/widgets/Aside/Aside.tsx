'use client'

import cn from 'clsx'
import { Home, Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PROTECT_PAGES } from '@/config/pages/protect.config'

import { useToggleAside } from '@/hooks/useToggleAside'

import styles from './Aside.module.scss'
import Logo from '@/app/assets/icons/Logo.svg'

export default function Aside() {
  const { isOpen, toggleAside } = useToggleAside()
  const pathName = usePathname()

  return (
    <aside className={cn(styles.aside, { [styles.aside_open]: isOpen })}>
      <div
        className={styles.aside__logo}
        onClick={toggleAside}
      >
        BI
        <Logo />
      </div>

      <nav className={styles.aside__nav}>
        <Link
          href='/'
          className={cn(styles.aside__navLink, {
            [styles.aside__navLink_active]: pathName === '/'
          })}
        >
          <Home size={20} />
          Главная
        </Link>

        <Link
          href={PROTECT_PAGES.NEW_CONNECT}
          className={cn(styles.aside__navLink, {
            [styles.aside__navLink_active]:
              pathName === PROTECT_PAGES.NEW_CONNECT
          })}
        >
          <Plus size={20} />
          Создать
        </Link>
      </nav>
    </aside>
  )
}
