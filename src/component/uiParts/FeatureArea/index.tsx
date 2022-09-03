import styles from './style.module.scss'
import Image from 'next/image'
import graphImg from 'public/graph.jpeg'
import { Button } from '../Button'

export const FeatureArea: React.FC = () => {
  return (
    <div className={styles.feature}>
      <h1>アプリの特徴</h1>
      <div className={styles.featureContents}>
        <div className={styles.featureContentsCard}>
          <div className={styles.description}>
            <h2>1.既存のオンライン会議アプリと併用できる！</h2>
            <p>
              REmotion のアプリ自体にはオンライン会議機能はありません．Zoom や Google Meet, Microsoft Teams
              など既存のオンライン会議アプリと併用することができます．
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={graphImg.src} alt='graph-img' width='900px' height='600px' />
          </div>
        </div>
        <div className={`${styles.featureContentsCard} ${styles.two}`}>
          <div className={styles.imageWrapper}>
            <Image src={graphImg.src} alt='graph-img' width='900px' height='600px' />
          </div>
          <div className={styles.description}>
            <h2>2.リアルタイムで参加者の表情を可視化！</h2>
            <p>参加者を表す絵文字がリアルタイムで変化するため，リモートにいる相手の存在を確認することができます．</p>
          </div>
        </div>
        <div className={styles.featureContentsCard}>
          <div className={styles.description}>
            <h2>3.参加者の感情の変化をグラフで表示！</h2>
            <p>
              会議中に参加者の感情がどのように変化したかをリアルタイムで変化するグラフで確認することができます．
              <br /> また，会議後にグラフを確認することで会議を振り返ることもできます．
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={graphImg.src} alt='graph-img' width='900px' height='600px' />
          </div>
        </div>
        <Button type='secondary' size='large'>
          使ってみる
        </Button>
      </div>
    </div>
  )
}
