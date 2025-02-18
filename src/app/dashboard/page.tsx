import type { Metadata } from 'next'

import { PremiumContent } from '@/app/dashboard/PremiumContent'

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default function DashboardPage() {
  return <PremiumContent />
}
