import type { Metadata } from 'next'

import Aside from '@/components/widgets/Aside/Aside'
import { Header } from '@/components/widgets/Header/Header'

import { SITE_NAME } from '@/constants/seo.constants'

import { Providers } from './Providers'
import './assets/styles/index.scss'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='h-screen flex'>
        <Providers>
          <Aside />
          <div className='w-full h-full flex flex-col'>
            <Header />
            <main className='h-9/10 p-5 flex'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
