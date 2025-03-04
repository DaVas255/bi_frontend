'use client'

import clsx from 'clsx'
import ReCAPTCHA from 'react-google-recaptcha'

import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/button/Button'

import { useAuthForm } from '@/hooks/useAuthForm'

import styles from './Auth.module.scss'
import { AuthToggle } from './AuthToggle'

interface AuthFormProps {
  isLogin: boolean
}

export function AuthForm({ isLogin }: AuthFormProps) {
  const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
    useAuthForm(isLogin)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.auth__form}
    >
      <label className={styles.auth__field}>
        Email
        <Input
          type='email'
          placeholder='Enter email: '
          {...register('email', { required: true })}
        />
      </label>

      {!isLogin && (
        <label className={styles.auth__field}>
          Имя
          <Input
            type='text'
            placeholder='Enter name: '
            {...register('name', { required: true })}
          />
        </label>
      )}

      <label className={styles.auth__field}>
        Пароль
        <Input
          type='password'
          placeholder='Enter password: '
          {...register('password', { required: true })}
        />
      </label>

      <ReCAPTCHA
        ref={recaptchaRef}
        size='normal'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        theme='light'
        className={styles.auth__recaptcha}
      />

      <div className='mb-3'>
        <Button
          className={clsx(styles[''], isLogin ? '' : '', isLoading ? '' : '')}
          name={isLogin ? 'Войти' : 'Зарегистрироваться'}
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </div>

      <AuthToggle isLogin={isLogin} />
    </form>
  )
}
