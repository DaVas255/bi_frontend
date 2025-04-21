'use client'

import { useQuery } from '@tanstack/react-query'
import { ArrowRight, Book, Package } from 'lucide-react'
import Link from 'next/link'

import { Loader } from '@/components/ui/Loader/Loader'

import { IMdlCourse } from '@/types/moodle/ims.types'

import styles from './CourseList.module.scss'
import imsService from '@/services/ims/ims.service'

export default function CourseList() {
  const {
    data: coursesWithImsData,
    isLoading,
    isError,
    error
  } = useQuery<IMdlCourse[]>({
    queryKey: ['coursesWithIms'],
    queryFn: () => imsService.getAllCoursesWithIms()
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
        <p>
          <span className='font-bold text-red-500'>Ошибка!</span> Не удалось
          загрузить курсы.
        </p>
        <p className='text-sm text-gray-600'>
          {error?.message || 'Неизвестная ошибка'}
        </p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <Package
          className='mr-2 text-blue-500'
          size={24}
        />
        Курсы с элементами IMS
      </h2>
      {coursesWithImsData && coursesWithImsData.length > 0 ? (
        <ul className={styles.courseGrid}>
          {coursesWithImsData.map(course => (
            <li
              key={course.id}
              className={styles.courseCard}
            >
              <Link
                href={`/ims/${course.id}`}
                className={styles.courseLink}
              >
                <div className={styles.courseHeader}>
                  <h3 className={styles.courseName}>{course.fullname}</h3>
                  <span className={styles.courseShortname}>
                    ({course.shortname})
                  </span>
                </div>
                <div className={styles.courseActions}>
                  <span className={styles.actionText}>Перейти к IMS</span>
                  <ArrowRight
                    className={styles.actionIcon}
                    size={20}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>
            <Book
              className='inline-block mr-2 align-middle text-gray-400'
              size={24}
            />
            Нет доступных курсов с элементами IMS.
          </p>
        </div>
      )}
    </div>
  )
}
