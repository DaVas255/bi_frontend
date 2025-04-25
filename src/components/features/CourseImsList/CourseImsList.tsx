'use client'

import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Loader } from '@/components/ui/Loader/Loader'

import { ISelectedImsData } from '@/types/moodle/ims.types'

import styles from './CourseImsList.module.scss'
import SelectedIms from './SelectedIms'
import imsService from '@/services/ims/ims.service'

export default function CourseImsPage() {
  const { id } = useParams<{ id: string }>()
  const courseId = parseInt(id, 10)

  const {
    data: imsData,
    isLoading,
    isError,
    error
  } = useQuery<ISelectedImsData>({
    queryKey: ['courseIms', courseId],
    queryFn: () => imsService.getImsByCourseId(courseId),
    enabled: !!courseId
  })

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className={styles.error}>
        Ошибка загрузки IMS: {error?.message || 'Неизвестная ошибка'}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Link
        href='/ims'
        className={styles.backLink}
      >
        <ArrowLeft
          size={20}
          className={styles.backIcon}
        />
        Назад к списку курсов
      </Link>

      <h2 className={styles.pageTitle}>IMS пакеты курса</h2>

      {imsData?.trackedIms && imsData?.trackedIms?.length > 0 ? (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Отслеживаемые IMS пакеты</h3>
          <SelectedIms imses={imsData?.trackedIms || []} />
        </div>
      ) : (
        <p>Нет отслеживаемых IMS пакетов</p>
      )}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>IMS пакеты без логов</h3>
        <SelectedIms imses={imsData?.untrackedIms || []} />
      </div>
    </div>
  )
}
