import type { Metadata } from 'next'

import { ManagerContent } from '@/app/manager/ManagerContent'

export const metadata: Metadata = {
  title: 'Manager content'
}

export default function ManagerPage() {
  return <ManagerContent />
}
