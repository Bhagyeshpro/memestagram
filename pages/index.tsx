import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"

const Home: NextPage = () => {
  return (
    <div className="flex-1 bg-neutral-800 h-screen overflow-y-scroll scrollbar-none">
      <Head>
        <title>OffensiveApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Offensivegrm...</h1> */}

      {/* <Header/> */}
      <Header/>
      <Modal />
      <Feed/>
      {/* <h1>Memes beyond your Imgination...</h1> */}


    </div>
  )
}

export default Home
