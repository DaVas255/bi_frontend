import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { IFormData } from '@/types/types'

import authService from '@/services/auth/auth.service'

export function useAuthForm(isLogin: boolean) {
  const { register, handleSubmit, reset } = useForm<IFormData>()

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IFormData) =>
      authService.main('login', data, recaptchaRef?.current?.getValue()),
    onSuccess() {
      startTransition(() => {
        reset()
        router.push('/')
      })
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message)
      }
    }
  })

  const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IFormData) =>
      authService.main('register', data, recaptchaRef?.current?.getValue()),
    onSuccess() {
      startTransition(() => {
        reset()
        router.push('/')
      })
    },
    onError(error) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message === 'User already exists') {
          toast.error('Пользователь уже зарегистрирован')
        } else {
          toast.error(error.response?.data?.message)
        }
      }
    }
  })

  const onSubmit: SubmitHandler<IFormData> = data => {
    const token = recaptchaRef?.current?.getValue()

    if (!token) {
      toast.error('Пройдите капчу!')
      return
    }

    isLogin ? mutateLogin(data) : mutateRegister(data)
  }

  const isLoading = isPending || isLoginPending || isRegisterPending

  return {
    register,
    handleSubmit,
    onSubmit,
    recaptchaRef,
    isLoading
  }
}
