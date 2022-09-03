import { Header } from '~/component/layouts/Header'
import { ProblemArea } from '~/component/uiParts/ProblemArea'
import { SolutionArea } from '~/component/uiParts/SolutionArea'
import { FeatureArea } from '~/component/uiParts/FeatureArea'
import styles from './style.module.scss'
import { UseCaseArea } from '~/component/uiParts/ UseCaseArea'
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
      <UseCaseArea />
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
