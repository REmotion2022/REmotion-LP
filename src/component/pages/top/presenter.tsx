import { Header } from '~/component/layouts/Header'
import { ProblemArea } from '~/component/uiParts/ProblemArea'
import { SolutionArea } from '~/component/uiParts/SolutionArea'
import { FeatureArea } from '~/component/uiParts/FeatureArea'
import { UseCaseArea } from '~/component/uiParts/ UseCaseArea'
import { ArchitectureArea } from '~/component/uiParts/ArchitectureArea'
import { NewsArea } from '~/component/uiParts/NewsArea'
import styles from './style.module.scss'
import { HeroArea } from '~/component/uiParts/HeroArea'

export const TopPagePresenter: React.FC = () => {
  return (
    <div className={styles.defaultLayout}>
      <Header />
      <HeroArea />
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
