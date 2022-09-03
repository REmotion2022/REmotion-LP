import { Header } from '~/component/layouts/Header'
import styles from './style.module.scss'
import { ProblemArea } from '~/component/uiParts/ProblemArea'
import { SolutionArea } from '~/component/uiParts/SolutionArea'
import { FeatureArea } from '~/component/uiParts/FeatureArea'
import Image from 'next/image'
import SeminarImg from 'public/seminar.svg'
import MeetingImg from 'public/meeting.svg'
import ClassImg from 'public/class.svg'

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
        <p>REmotion はオンライン上で行う活動中のコミュニケーションをサポートします．</p>
        <div className={styles.useCaseContents}>
          <div className={styles.useCaseContentsCard}>
            <h2>オンライン会議</h2>
            <div className={styles.imageWrapper}>
              <Image src={MeetingImg.src} width='200px' height='200px' alt='meeting-img'></Image>
            </div>
            {/* <p>感情を可視化することで，カメラをオフにして参加するオンライン会議をサポートします。</p> */}
          </div>
          <div className={styles.useCaseContentsCard}>
            <h2>オンライン授業</h2>
            <div className={styles.imageWrapper}>
              <Image src={ClassImg.src} width='200px' height='200px' alt='class-img'></Image>
            </div>
            {/* <p>感情を可視化することで，カメラをオフにして参加するオンライン授業をサポートします。</p> */}
          </div>
          <div className={styles.useCaseContentsCard}>
            <h2>WEBセミナー</h2>
            <div className={styles.imageWrapper}>
              <Image src={SeminarImg.src} width='200px' height='200px' alt='seminar-img'></Image>
            </div>
            {/* <p>感情を可視化することで，カメラをオフにして参加するWEBセミナーをサポートします。</p> */}
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
