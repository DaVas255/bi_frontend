'use client'

import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { unserialize } from 'php-serialize'

import { Loader } from '@/components/ui/Loader/Loader'

import { IMdlImscp } from '@/types/moodle/ims.types'

import extractPages from '@/utils/extractImsPages'

import styles from './CourseImsList.module.scss'
import imsService from '@/services/ims/ims.service'

export default function CourseImsPage() {
  const { id } = useParams<{ id: string }>()
  const courseId = parseInt(id, 10)

  const {
    data: imsData,
    isLoading,
    isError,
    error
  } = useQuery<IMdlImscp[]>({
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

      {imsData && imsData.length > 0 ? (
        <ul className={styles.imsList}>
          {imsData.map(ims => {
            let structureContent = unserialize(ims.structure || '')
            let pages = extractPages(structureContent)

            return (
              <li
                key={ims.id}
                className={styles.imsCard}
              >
                <h3 className={styles.imsName}>{ims.name}</h3>

                <div className={styles.imsDetails}>
                  <p>
                    Последнее изменение:{' '}
                    <span className={styles.detailValue}>
                      {new Date(ims.timemodified * 1000).toLocaleDateString()}
                    </span>
                  </p>
                </div>

                <details className={styles.imsStructure}>
                  <summary className={styles.structureSummary}>
                    Содержание IMS
                  </summary>
                  {pages && pages.length > 0 ? (
                    <ul className={styles.structureContent}>
                      {pages.map((page, index) => (
                        <li
                          key={index}
                          className={styles.imsStructure__page}
                        >
                          <div className={styles.imsStructure__title}>
                            Название:{' '}
                            <span className='font-bold'>{page.title}</span>
                          </div>
                          <div className={styles.imsStructure__href}>
                            Путь: <span className='italic'>{page.href}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Нет содержимого</p>
                  )}
                </details>
              </li>
            )
          })}
        </ul>
      ) : (
        <p className={styles.noIms}>Нет IMS пакетов для этого курса.</p>
      )}
    </div>
  )
}
