import Head from 'next/head'

import Header from '../components/header.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        hi
      </div>
    </>
  )
}
