import React from 'react'
import Story from "../components/Stories"
import Posts from "../components/Posts"
import MiniProfile from "../components/MiniProfile"
import Suggesions from "../components/Suggestions"

function Feed() {   
  return (
    <main className='grid grid-cols-1 md:grid-cols-1 md:max-w-2xl xl:grid-cols-3 xl:max-w-4xl mx-auto'>

      <section className='col-span-2'>
        <Story />
        <Posts />
      </section>

      <section className='hidden xl:inline-grid md:col-span-1'>
        <div className='fixed top-20'>
        <MiniProfile />
        <Suggesions/>
        </div>
      </section>
    </main>
  )
}

export default Feed