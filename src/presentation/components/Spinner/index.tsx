import React from 'react'
import styles from './spinner.style.scss'

type Props = React.HTMLAttributes<HTMLElement>

export const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} className={[styles.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
