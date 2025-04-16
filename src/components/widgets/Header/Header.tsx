'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PROTECT_PAGES } from '@/config/pages/protect.config'
import { PUBLIC_PAGES } from '@/config/pages/public.config'

import { useToggleAside } from '@/hooks/useToggleAside'

import styles from './Header.module.scss'
import MenuBurger from '@/app/assets/icons/MenuBurger.svg'
import ProfileSvg from '@/app/assets/icons/ProfileSvg.svg'

export const Header = () => {
  const pathName = usePathname()

  const isNotAuthPages =
    pathName !== PUBLIC_PAGES.LOGIN && pathName !== PUBLIC_PAGES.REGISTER
  const { isOpen, toggleAside } = useToggleAside()

  return (
    isNotAuthPages && (
      <header className={styles.header}>
        <button
          onClick={toggleAside}
          className={cn(styles.header__burger, { hidden: isOpen })}
        >
          <MenuBurger />
        </button>

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
  )
}
