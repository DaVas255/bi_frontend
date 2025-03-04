import { Metadata } from 'next'

import Home from '@/components/features/Home/Home'

export const metadata: Metadata = {
  title: 'Главная'
}

export default function HomePage() {
  return <Home />
}
