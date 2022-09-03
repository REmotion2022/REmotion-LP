import styles from './style.module.scss'

export const NewsArea: React.FC = () => {
  return (
    <div className={styles.news}>
      <h1>NEWS</h1>
      <div className={styles.newsList}>
        <div className={styles.newsListContents}>
          <p>日付 2022/8/22</p>
          <a href='https://note.com/eggnao/n/nef95fe779cc4'>
            <h2>note(第二話) を執筆しました</h2>
          </a>
        </div>
        <div className={styles.newsListContents}>
          <p>日付 2022/6/27</p>
          <a href='https://note.com/eggnao/n/n77bbbf20d073'>
            <h2>note を執筆しました</h2>
          </a>
        </div>
      </div>
    </div>
  )
}
