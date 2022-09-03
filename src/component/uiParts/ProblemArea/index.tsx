import styles from './style.module.scss'
import Image from 'next/image'
import yesOrNoImg from 'public/yes_or_no.png'
import { Button } from '~/component/uiParts/Button'

export const ProblemArea: React.FC = () => {
  return (
    <div className={styles.problem}>
      <h1>オンライン会議でこんなことに困っていませんか?</h1>
      <div className={styles.problemContents}>
        <div className={styles.problemContentsCard}>
          <div className={styles.chatBaloon}>
            <p>カメラをオフにしている人の反応が見えない...</p>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={yesOrNoImg.src} alt='yes-or-no' width='200px' height='200px' />
          </div>
        </div>
        <div className={styles.problemContentsCard}>
          <div className={styles.chatBaloon}>
            <p>相手の反応が見えないと話しづらい...</p>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={yesOrNoImg.src} alt='yes-or-no' width='200px' height='200px' />
          </div>
        </div>
        <div className={styles.problemContentsCard}>
          <div className={styles.chatBaloon}>
            <p>面白い冗談を言ったのにウケたかどうか分からない</p>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={yesOrNoImg.src} alt='yes-or-no' width='200px' height='200px' />
          </div>
        </div>
      </div>
      <Button type='secondary' size='large'>
        使ってみる
      </Button>
    </div>
  )
}
