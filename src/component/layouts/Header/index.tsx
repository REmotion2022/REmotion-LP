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
        <a href='https://remotion-b2f4b.web.app/'>
          <Button type='primary'>使ってみる</Button>
        </a>
      </div>
    </div>
  )
}
