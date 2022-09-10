import styles from './style.module.scss'
import Image from 'next/image'
import SeminarImg from 'public/seminar.svg'
import MeetingImg from 'public/meeting.svg'
import ClassImg from 'public/class.svg'

export const UseCaseArea: React.FC = () => {
  return (
    <div className={styles.useCase}>
      <h1>REmotion の使用例</h1>
      <p>REmotion はオンライン上で行う活動中のコミュニケーションをサポートします。</p>
      <div className={styles.useCaseContents}>
        <div className={styles.useCaseContentsCard}>
          <h2>オンライン会議</h2>
          <div className={styles.imageWrapper}>
            <Image src={MeetingImg.src} width='200px' height='200px' alt='meeting-img'></Image>
          </div>
        </div>
        <div className={styles.useCaseContentsCard}>
          <h2>オンライン授業</h2>
          <div className={styles.imageWrapper}>
            <Image src={ClassImg.src} width='200px' height='200px' alt='class-img'></Image>
          </div>
        </div>
        <div className={styles.useCaseContentsCard}>
          <h2>WEBセミナー</h2>
          <div className={styles.imageWrapper}>
            <Image src={SeminarImg.src} width='200px' height='200px' alt='seminar-img'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
