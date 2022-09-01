import styles from './style.module.scss'

export const TopPagePresenter: React.FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <a href='' className={styles.logo}>
          REmotion
        </a>
        <div className={styles.headerMenu}>
          <a href='how-to-use' className={styles.link}>
            アプリの使い方
          </a>
          <a href='https://remotion-b2f4b.web.app/'>
            <button className={styles.btnPrimary}>使ってみる</button>
          </a>
        </div>
      </div>
      <div className={styles.problem}>
        <h1>オンライン会議でこんなことに困っていませんか?</h1>
        <div className={styles.problemContents}>
          <div className={styles.problemContentsCard}>カメラをオフにしている人の反応が見えない．．．</div>
          <div className={styles.problemContentsCard}>相手の反応が見えないと話しづらい．．．</div>
          <div className={styles.problemContentsCard}>面白い冗談を言ったのにウケたかどうか分からない．．．</div>
        </div>
        <a href='https://remotion-b2f4b.web.app/'>
          <button className={styles.btnSecondary}>使ってみる</button>
        </a>
      </div>
      <div className={styles.solution}>
        <h1>REmotin でできること</h1>
        <div className={styles.solutionContents}>
          <div className={styles.solutionContentsCard}>
            <h2>オンライン会議アプリと併用可能</h2>
          </div>
          <div className={styles.solutionContentsCard}>
            <h2>リアルタイムで参加者の表情を可視化</h2>
          </div>
          <div className={styles.solutionContentsCard}>
            <h2>感情の時系列データをグラフで表示</h2>
          </div>
        </div>
        <a href='https://remotion-b2f4b.web.app/'>
          <button className={styles.btnSecondary}>使ってみる</button>
        </a>
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
