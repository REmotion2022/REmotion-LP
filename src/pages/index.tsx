import type { NextPage } from 'next'
import Head from 'next/head'
import { TopPage } from '~/component/pages/top'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>REmotionLP</title>
        <meta name='description' content='REmotionLP' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <TopPage />
      </main>
    </div>
  )
}

export default Home
