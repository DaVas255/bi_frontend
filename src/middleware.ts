import { NextRequest, NextResponse } from 'next/server'

import { PROTECT_PAGES } from '@/config/pages/protect.config'
import { PUBLIC_PAGES } from '@/config/pages/public.config'

import { EnumTokens } from '@/services/auth/auth.service'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const cookies = request.cookies

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isAuthPage =
    pathname === PUBLIC_PAGES.LOGIN || pathname === PUBLIC_PAGES.REGISTER

  if (refreshToken && isAuthPage) {
    return NextResponse.redirect(new URL(PROTECT_PAGES.HOME, request.url))
  }

  if (!refreshToken && isAuthPage) {
    return NextResponse.next()
  }

  if (!refreshToken && !isAuthPage) {
    return NextResponse.redirect(new URL(PUBLIC_PAGES.LOGIN, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
