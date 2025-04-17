'use client'

import { BookOpen, PlusSquare, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import styles from './PlatformOverviewWidget.module.scss'

// Пример иконок

interface PlatformOverviewData {
  totalUsers: number
  activeUsersLast7Days: number
  totalCourses: number
  newCoursesLastMonth: number
  isLoading: boolean
  error: string | null
}

const initialState: PlatformOverviewData = {
  totalUsers: 0,
  activeUsersLast7Days: 0,
  totalCourses: 0,
  newCoursesLastMonth: 0,
  isLoading: true,
  error: null
}

const PlatformOverviewWidget: React.FC = () => {
  const [data, setData] = useState<PlatformOverviewData>(initialState)

  useEffect(() => {
    // const fetchPlatformOverviewData = async () => {
    //   try {
    //     const response = await fetch('/api/dashboard/platform-overview')
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`)
    //     }
    //     const jsonData: Omit<PlatformOverviewData, 'isLoading' | 'error'> =
    //       await response.json()
    //     setData({ ...jsonData, isLoading: false, error: null })
    //   } catch (error: any) {
    //     setData({ ...initialState, isLoading: false, error: error.message })
    //   }
    // }
    // fetchPlatformOverviewData()
  }, [])

  if (data.isLoading) {
    return <div className={styles.container}>Загрузка...</div>
  }

  if (data.error) {
    return (
      <div className={styles.container}>
        Ошибка загрузки данных: {data.error}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Обзор платформы Moodle</h2>
      <div className={styles.metric}>
        <Users
          className={styles.icon}
          size={24}
        />
        <div className={styles.value}>{data.totalUsers}</div>
        <div className={styles.label}>Всего студентов</div>
      </div>
      <div className={styles.metric}>
        <Users
          className={styles.icon}
          size={24}
        />
        <div className={styles.value}>{data.activeUsersLast7Days}</div>
        <div className={styles.label}>Активных за 7 дней</div>
      </div>
      <div className={styles.metric}>
        <BookOpen
          className={styles.icon}
          size={24}
        />
        <div className={styles.value}>{data.totalCourses}</div>
        <div className={styles.label}>Всего курсов</div>
      </div>
      <div className={styles.metric}>
        <PlusSquare
          className={styles.icon}
          size={24}
        />
        <div className={styles.value}>{data.newCoursesLastMonth}</div>
        <div className={styles.label}>Новых курсов (месяц)</div>
      </div>
      {/* В будущем можно добавить небольшие графики */}
    </div>
  )
}

export default PlatformOverviewWidget
