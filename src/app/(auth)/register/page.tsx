import type { Metadata } from 'next'

import { AuthForm } from '@/components/features/Auth/AuthForm'

import styles from './../AuthPage.module.scss'

export const metadata: Metadata = {
  title: 'Register'
}

export default function RegisterPage() {
  return (
    <div className={styles.authPage}>
      <h2 className={styles.authPage__title}>Регистрация</h2>
      <AuthForm isLogin={false} />
    </div>
  )
}
