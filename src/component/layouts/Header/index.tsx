import { Button } from '~/component/uiParts/Button'
import styles from './style.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <a href='' className={styles.logo}>
        REmotion
      </a>
      <div className={styles.headerMenu}>
        <a href='manual' className={styles.link}>
          アプリの使い方
        </a>
        <Button type='primary' size='small'>
          使ってみる
        </Button>
      </div>
    </div>
  )
}
