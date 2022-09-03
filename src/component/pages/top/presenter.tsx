import { Header } from '~/component/layouts/Header'
import styles from './style.module.scss'
import { ProblemArea } from '~/component/uiParts/ProblemArea'
import { SolutionArea } from '~/component/uiParts/SolutionArea'
import { FeatureArea } from '~/component/uiParts/FeatureArea'
// import Image from 'next/image'

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
      <FeatureArea />
      <div className={styles.useCase}>
        <h1>REmotion の使用例</h1>
        <div className={styles.useCaseContents}>
          <div>REmotion はオンライン上で行う活動中のコミュニケーションをサポートします．</div>
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
