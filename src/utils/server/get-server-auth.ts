'use server'

import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

import { ITokenInside } from '@/types/auth.types'

import {
  TUserDataState,
  transformUserToState
} from '../transform-user-to-state'

import authService, { EnumTokens } from '@/services/auth/auth.service'

export async function getServerAuth(): Promise<TUserDataState | null> {
  const JWT_SECRET = process.env.JWT_SECRET
  let accessToken = (await cookies()).get(EnumTokens.ACCESS_TOKEN)?.value
  const refreshToken = (await cookies()).get(EnumTokens.REFRESH_TOKEN)?.value

  if (!refreshToken) return null

  if (!accessToken) {
    try {
      const data = await authService.getNewTokensByRefresh(refreshToken)
      accessToken = data.accessToken
    } catch (error) {
      return null
    }
  }

  try {
    const { payload }: { payload: ITokenInside } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(`${JWT_SECRET}`)
    )

    if (!payload) return null

    return transformUserToState(payload)
  } catch (error) {
    return null
  }
}
