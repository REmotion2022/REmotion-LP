import { ReactNode } from 'react'
import styles from './style.module.scss'

export type ButtonProps = {
  type: 'primary' | 'secondary'
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ type, children }) => {
  if (type == 'primary') {
    return <button className={styles.btnPrimary}>{children}</button>
  } else {
    return <button className={styles.btnSecondary}>{children}</button>
  }
}
