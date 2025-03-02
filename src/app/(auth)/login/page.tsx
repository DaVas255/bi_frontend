import type { Metadata } from 'next'

import { AuthForm } from '@/components/features/Auth/AuthForm'

import styles from './../AuthPage.module.scss'

export const metadata: Metadata = {
  title: 'Login'
}

export default function LoginPage() {
  return (
    <div className={styles.authPage}>
      <h2 className={styles.authPage__title}>Вход</h2>
      <AuthForm isLogin />
    </div>
  )
}
