import styles from './style.module.scss'
import Image from 'next/image'
import appImg from 'public/REmotion-app.webp'

export const SolutionArea: React.FC = () => {
  return (
    <div className={styles.solution}>
      <h1>
        その悩み <br />
        REmotion が解決します！
      </h1>
      <div className={styles.solutionDescriptionWrapper}>
        <div className={styles.description}>
          <h2>オンライン会議でのコミュニケーションをサポート！</h2>
          <p>
            REmotion では、参加者の表情を認識し、その結果を感情を表す絵文字として表示します。
            <br /> 絵文字はリアルタイムで変化し、参加者の状況や会議の雰囲気を掴むために役立ちます。
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <Image src={appImg.src} width='1500px' height='1000px' alt='remotion-app' />
        </div>
      </div>
    </div>
  )
}
