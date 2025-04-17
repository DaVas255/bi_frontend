'use client'

import { useCallback, useEffect, useState } from 'react'
import GridLayout, { Layout, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import PlatformOverviewWidget from '@/components/HopePageWidgets/PlatformOverviewWidget/PlatformOverviewWidget'
import { Loader } from '@/components/ui/Loader/Loader'

import {
  loadDashboardLayout,
  saveDashboardLayout
} from '@/utils/dashboard-layout-storage'

import styles from './Home.module.scss'

const ResponsiveGridLayout = WidthProvider(GridLayout)

interface DashboardState {
  layout: Layout[]
}

function HomePage() {
  const [state, setState] = useState<DashboardState>({ layout: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initialLayout = loadDashboardLayout()
    setState({ layout: initialLayout })
    setLoading(false)
  }, [])

  const onLayoutChange = useCallback((layout: Layout[]) => {
    setState({ layout })
    saveDashboardLayout(layout)
  }, [])

  if (loading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <ResponsiveGridLayout
        className='layout'
        layout={state.layout}
        cols={12}
        rowHeight={150}
        isResizable
        isDraggable
        onLayoutChange={onLayoutChange}
      >
        <div
          key='overview'
          className={styles.widget}
        >
          <PlatformOverviewWidget />
        </div>
        <div
          key='ims'
          className={styles.widget}
        >
          <div className={styles.widgetContent}>Активность в IMS (скоро)</div>
        </div>
        <div
          key='top-courses'
          className={styles.widget}
        >
          <div className={styles.widgetContent}>
            Топ активных курсов (скоро)
          </div>
        </div>
        <div
          key='events'
          className={styles.widget}
        >
          <div className={styles.widgetContent}>Последние события (скоро)</div>
        </div>
        <div
          key='kpi'
          className={styles.widget}
        >
          <div className={styles.widgetContent}>
            Ключевые показатели (скоро)
          </div>
        </div>
        {/* Add other widgets here with their unique keys */}
      </ResponsiveGridLayout>
    </div>
  )
}

export default HomePage
