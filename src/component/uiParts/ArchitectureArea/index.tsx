import styles from './style.module.scss'
import Image from 'next/image'
import ReactIcon from 'public/React-icon.svg'
import FirebaseIcon from 'public/firebase.svg'
import TailwindIcon from 'public/tailwindcss.svg'
import VitejsIcon from 'public/vitejs.svg'

export const ArchitectureArea: React.FC = () => {
  return (
    <div className={styles.architecture}>
      <h1>使用技術</h1>
      <p>REmotion は次の技術に支えられています。</p>
      <div className={styles.iconCardWrapper}>
        <div className={styles.iconCard}>
          <div className={styles.imageWrapper}>
            <Image src={ReactIcon.src} width='96px' height='96px' alt='react-icon' />
          </div>
          <p>React</p>
        </div>
        <div className={styles.iconCard}>
          <div className={styles.imageWrapper}>
            <Image src={FirebaseIcon.src} width='96px' height='96px' alt='firebase-icon' />
          </div>
          <p>Firebase</p>
        </div>
        <div className={styles.iconCard}>
          <div className={styles.imageWrapper}>
            <Image src={VitejsIcon.src} width='96px' height='96px' alt='vitejs-icon' />
          </div>
          <p>Vite.js</p>
        </div>
        <div className={styles.iconCard}>
          <div className={styles.imageWrapper}>
            <Image src={TailwindIcon.src} width='96px' height='96px' alt='tailwindcss-icon' />
          </div>
          <p>TailwindCSS</p>
        </div>
      </div>
    </div>
  )
}
