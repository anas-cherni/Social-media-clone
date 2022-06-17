import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      <div className="flex">
        <Header />
      </div>




    </div>
  )
}
