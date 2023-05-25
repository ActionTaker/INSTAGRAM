import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
function Feed() {
  return (
    <main className='p-4 grid grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>

        <section className='col-span-2'>
            {/* Stories */}
            <Stories/>
            {/* Posts */}
            <Posts/>
        </section>

        <section className='hidden md:col-span-1 xl:inline-grid '>
          <MiniProfile/>
          <Suggestions/>
            {/* Mini profile */}
            {/* Suggestions */}
        </section>
    </main>
  )
}

export default Feed