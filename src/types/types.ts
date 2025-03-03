import { UserRole } from '@/services/auth/auth.types'

export interface IUser {
  id: number
  name?: string
  email: string
  avatarPath?: string
  verificationToken?: string
  rights: UserRole[]
}

export interface IFormData extends IUser {
  password: string | undefined
}
