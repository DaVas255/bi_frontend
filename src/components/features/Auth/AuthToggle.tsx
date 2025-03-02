import { useRouter } from 'next/navigation'

import { PUBLIC_PAGES } from '@/config/pages/public.config'

import styles from './Auth.module.scss'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
  const router = useRouter()

  return (
    <div className={styles.auth__toggle}>
      {isLogin ? (
        <p>
          Нет аккаунта?{' '}
          <button
            type='button'
            className={styles.auth__toggleButton}
            onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
          >
            Зарегистрироваться
          </button>
        </p>
      ) : (
        <p>
          Уже есть аккаунт?{' '}
          <button
            type='button'
            className={styles.auth__toggleButton}
            onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
          >
            Войти
          </button>
        </p>
      )}
    </div>
  )
}
