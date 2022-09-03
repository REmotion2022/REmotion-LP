import { Button } from '~/component/uiParts/Button'
import styles from './style.module.scss'
import Image from 'next/image'
import logoImg from 'public/REmotion-logo-transparent.svg'

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image src={logoImg.src} alt='logo-img' width='32px' height='32px' priority={true} />
        <a href='' className={styles.logo}>
          REmotion
        </a>
      </div>
      <div className={styles.headerMenu}>
        <a href='https://remotion-b2f4b.web.app' className={styles.link}>
          アプリの使い方
        </a>
        <div className={styles.btnWrapper}>
          <Button type='primary' size='small'>
            使ってみる
          </Button>
        </div>
      </div>
    </div>
  )
}
