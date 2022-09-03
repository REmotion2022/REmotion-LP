import styles from './style.module.scss'
import Image from 'next/image'
import HeroImg from 'public/REmotion-hero.svg'
import TitleImg from 'public/REmotion-title.svg'
import { Button } from '~/component/uiParts/Button'

export const HeroArea: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h1>
            オンライン会議 <br /> 感情可視化アプリ
          </h1>
          <div>
            <Image src={TitleImg} alt='title-img' width='300px' height='100px' priority={true} placeholder='blur' />
          </div>
          <div className={styles.btnWrapper}>
            <Button type='primary' size='large'>
              使ってみる
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={HeroImg} alt='hero-img' width='900px' height='600px' priority={true} placeholder='blur' />
      </div>
    </div>
  )
}
