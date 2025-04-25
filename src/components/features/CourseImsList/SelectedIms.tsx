import { unserialize } from 'php-serialize'

import { IMdlImscp } from '@/types/moodle/ims.types'

import extractPages from '@/utils/extractImsPages'

import styles from './CourseImsList.module.scss'

export default function SelectedIms({ imses }: { imses: IMdlImscp[] }) {
  return (
    <ul className={styles.imsList}>
      {imses.map(ims => {
        let structureContent = ims.structure ? unserialize(ims.structure) : null
        let pages = structureContent ? extractPages(structureContent) : []

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
                  {ims.timemodified
                    ? new Date(ims.timemodified * 1000).toLocaleDateString()
                    : 'N/A'}
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
  )
}
