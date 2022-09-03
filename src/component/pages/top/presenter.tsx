import { Header } from '~/component/layouts/Header'
import { ProblemArea } from '~/component/uiParts/ProblemArea'
import { SolutionArea } from '~/component/uiParts/SolutionArea'
import { FeatureArea } from '~/component/uiParts/FeatureArea'
import { UseCaseArea } from '~/component/uiParts/ UseCaseArea'
import { ArchitectureArea } from '~/component/uiParts/ArchitectureArea'
import styles from './style.module.scss'
import { NewsArea } from '~/component/uiParts/NewsArea'

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
      <ArchitectureArea />
      <NewsArea />
      <div className={styles.footer}></div>
    </div>
  )
}
