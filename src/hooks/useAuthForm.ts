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

  const mutationOptions = (
    mutationFn: (data: IFormData, token: string | null) => Promise<any>,
    successCallback: () => void
  ) => ({
    mutationFn: (data: IFormData) =>
      mutationFn(data, recaptchaRef.current?.getValue() ?? null),
    onSuccess: () => {
      startTransition(() => {
        reset()
        successCallback()
      })
    },
    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Произошла ошибка')
      } else {
        toast.error('Произошла непредвиденная ошибка')
      }
      recaptchaRef.current?.reset()
    }
  })

  const { mutate: loginMutate, isPending: isLoginPending } = useMutation(
    mutationOptions(authService.main.bind(null, 'login'), () =>
      router.push('/')
    )
  )

  const { mutate: registerMutate, isPending: isRegisterPending } = useMutation(
    mutationOptions(authService.main.bind(null, 'register'), () =>
      router.push('/')
    )
  )

  const onSubmit: SubmitHandler<IFormData> = data => {
    const token = recaptchaRef.current?.getValue()
    if (!token) {
      toast.error('Пройдите капчу!')
      return
    }
    isLogin ? loginMutate(data) : registerMutate(data)
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
