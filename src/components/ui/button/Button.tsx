import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  name: string
  disabled?: boolean
  className?: string
  background?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, background, ...props }, ref) => {
    return (
      <button
        type={props.type}
        disabled={props.disabled}
        className={clsx(
          styles.button,
          background && styles['button-background'],
          className
        )}
        ref={ref}
        {...props}
      >
        {props.name}
      </button>
    )
  }
)
