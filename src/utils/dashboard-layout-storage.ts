import { Layout } from 'react-grid-layout'

import { LS_DASHBOARD_LAYOUT } from '@/constants/LS_constants'

const defaultLayout: Layout[] = [
  { i: 'overview', x: 0, y: 0, w: 4, h: 2 },
  { i: 'ims', x: 4, y: 0, w: 4, h: 2 },
  { i: 'top-courses', x: 0, y: 2, w: 6, h: 2 },
  { i: 'events', x: 6, y: 2, w: 6, h: 2 },
  { i: 'kpi', x: 8, y: 0, w: 4, h: 2 }
]

export function loadDashboardLayout(): Layout[] {
  try {
    const storedLayout = localStorage.getItem(LS_DASHBOARD_LAYOUT)
    if (storedLayout) {
      return JSON.parse(storedLayout) as Layout[]
    }
  } catch (error) {
    console.error('Ошибка загрузки layout из localStorage:', error)
  }
  return defaultLayout
}

export function saveDashboardLayout(layout: Layout[]): void {
  try {
    localStorage.setItem(LS_DASHBOARD_LAYOUT, JSON.stringify(layout))
  } catch (error) {
    console.error('Ошибка сохранения layout в localStorage:', error)
  }
}
