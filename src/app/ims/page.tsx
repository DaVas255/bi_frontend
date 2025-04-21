import { Metadata } from 'next'

import CourseList from '@/components/features/CourseListWithIms/CourseList'

export const metadata: Metadata = {
  title: 'Курсы'
}

export default function HomePage() {
  return <CourseList />
}
