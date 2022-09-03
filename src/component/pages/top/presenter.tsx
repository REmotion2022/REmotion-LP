import { Header } from '~/component/layouts/Header'
import styles from './style.module.scss'
import { Button } from '~/component/uiParts/Button'
import { ProblemArea } from '~/component/uiParts/ProblemArea'
import Image from 'next/image'
import { SolutionArea } from '~/component/uiParts/SolutionArea'

export const TopPagePresenter: React.FC = () => {
  return (
    <div className={styles.defaultLayout}>
      <Header />
      <div className={styles.hero}>
        <div>オンライン会議感情可視化アプリ</div>
        <div>REmotion</div>
      </div>
      <ProblemArea />
      <SolutionArea />
      <div className={styles.feature}>
        <h1>アプリの特徴</h1>
        <div className={styles.featureContents}>
          <div className={styles.featureContentsCard}>
            <h2>1.既存のオンライン会議アプリと併用できる！</h2>
          </div>
          <div className={styles.featureContentsCard}>
            <h2>2.リアルタイムで参加者の表情を可視化！</h2>
          </div>
          <div className={styles.featureContentsCard}>
            <h2>3.感情の時系列データをグラフで表示！</h2>
          </div>
          <a href='https://remotion-b2f4b.web.app/'>
            <Button type='secondary'>使ってみる</Button>
          </a>
        </div>
      </div>
      <div className={styles.useCase}>
        <div className={styles.useCaseContents}>
          <div>
            REmotion は Zoom や Google Meet， Microsoft Teams
            など既存のオンライン会議アプリと併用することができ，オンライン上で行う活動中のコミュニケーションをサポートします．
          </div>
          <div className={styles.useCaseContentsCard}>
            <h2>オンライン会議</h2>
            <div>感情を可視化することで，カメラをオフにして参加するオンライン会議をサポートします。</div>
          </div>
          <div className={styles.useCaseContentsCard}>
            <h2>オンライン授業</h2>
            <div>感情を可視化することで，カメラをオフにして参加するオンライン授業をサポートします。</div>
          </div>
          <div className={styles.useCaseContentsCard}>
            <h2>WEBセミナー</h2>
            <div>感情を可視化することで，カメラをオフにして参加するWEBセミナーをサポートします。</div>
          </div>
        </div>
      </div>
      <div className={styles.architecture}>
        <div className={styles.architecutureContents}>
          <h1>REmotion の使用技術</h1>
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.newsList}>
          <h1>NEWS</h1>
          <div className={styles.newsListContents}></div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  )
}
