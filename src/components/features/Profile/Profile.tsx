'use client'

import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { Loader } from '@/components/ui/Loader/Loader'
import { Button } from '@/components/ui/button/Button'

import { PUBLIC_PAGES } from '@/config/pages/public.config'

import styles from './Profile.module.scss'
import UploadPhoto from '@/app/assets/icons/UploadPhoto.svg'
import { useProfile } from '@/app/hooks/useProfile'
import authService from '@/services/auth/auth.service'

export function Profile() {
  const { push } = useRouter()

  const { user, isLoading } = useProfile()

  const [isPending, startTransition] = useTransition()

  const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess() {
      startTransition(() => {
        push(PUBLIC_PAGES.LOGIN)
      })
    }
  })

  const isLogoutLoading = isLogoutPending || isPending

  if (isLoading) return <Loader />

  return (
    <div className={styles.profile}>
      <div className={styles.profile__avatar}>
        <Image
          src={user.avatarPath ? user.avatarPath : '/default-avatar.webp'}
          alt='Avatar'
          width={160}
          height={160}
        />
        <UploadPhoto className={styles.profile__uploadPhoto} />
      </div>

      <h2 className={styles.profile__title}>
        Привет, {user.name || 'Аноним'}!
      </h2>
      <p className={styles.profile__email}>{user.email} </p>
      <Button
        onClick={() => mutateLogout()}
        disabled={isLogoutLoading}
        className={cn('mt-2 bg-indigo-500 text-white px-4 py-2 rounded-md', {
          '': isLogoutLoading
        })}
        type='button'
        background
        name={isLogoutLoading ? 'Выходим...' : 'Выход'}
      >
        {' '}
        {isLogoutLoading ? 'Выходим...' : 'Выход'}
      </Button>
    </div>
  )
}
