import type { Metadata } from 'next'

import Aside from '@/components/widgets/Aside/Aside'
import { Header } from '@/components/widgets/Header/Header'

import { SITE_NAME } from '@/constants/seo.constants'

import { Providers } from './Providers'
import './assets/styles/index.scss'
import { nekstFont } from './lib/fonts'

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
    <html lang='ru'>
      <body className={nekstFont.className}>
        <Providers>
          <Aside />
          <div className='w-full h-full flex flex-col'>
            <Header />
            <main className='w-full h-full overflow-y-auto'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
