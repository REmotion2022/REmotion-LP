import styles from './style.module.scss'
import Image from 'next/image'
import graphImg from 'public/graph.webp'
import appImg from 'public/REmotion-app.webp'
import useAppImg from 'public/use-REmotion.webp'
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
              REmotion のアプリ自体にはオンライン会議機能はありません。Zoom や Google Meet、 Microsoft Teams
              など既存のオンライン会議アプリと併用することができます。
              <br />
              オンライン会議アプリで、カメラをオフにしている状況でも REmotion
              を使うことで参加者の反応を知ることができます。
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={useAppImg} alt='use-app-img' width='900px' height='600px' placeholder='blur' />
          </div>
        </div>
        <div className={`${styles.featureContentsCard} ${styles.two}`}>
          <div className={styles.imageWrapper}>
            <Image src={appImg} alt='app-img' width='1500px' height='1000px' placeholder='blur' />
          </div>
          <div className={styles.description}>
            <h2>2.リアルタイムで参加者の表情を可視化！</h2>
            <p>
              参加者を表す絵文字がリアルタイムで変化するため、リモートにいる相手の存在を確認することができます。 <br />{' '}
              REmotion はカメラをオンにしなくても使えるので、プライバシーを気にせずに利用できます。
            </p>
          </div>
        </div>
        <div className={styles.featureContentsCard}>
          <div className={styles.description}>
            <h2>3.参加者の感情の変化をグラフで表示！</h2>
            <p>
              会議中に参加者の感情がどのように変化したかをリアルタイムで変化するグラフで確認することができます。
              <br /> また、会議後にグラフを確認することで会議を振り返ることもできます。
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={graphImg} alt='graph-img' width='900px' height='600px' placeholder='blur' />
          </div>
        </div>
        <Button type='secondary' size='large'>
          使ってみる
        </Button>
      </div>
    </div>
  )
}
