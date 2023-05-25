import { HeartIcon, ChatIcon, PaperAirplaneIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import React from 'react'

function Post({key, id, username, userImg, img, caption}) {
  return (
    <div className='border bg-gray-50 shadow-lg'>
        {/* Header */}
        <div className='flex p-5 justify-between'>
            <div className='flex space-x-4 items-center'>
                <img className='w-8 h-8 rounded-full p-[1.5px] border-green-800 border' src={img} alt=""></img> 
                <p className='font-bold text-sm'>{username}</p>
            </div>
            <div> ...</div>
        </div>
        {/* img */}
        <div className ='flex justify-center'>
            <img className='object-cover w-full' src={userImg} alt=""></img> 
        </div>
        {/* buttons */}
        <div className='flex p-5 justify-between'>
            <div className='flex space-x-4 items-center'>
                <HeartIcon className='btn'/>
                <ChatIcon className='btn'/>
                <PaperAirplaneIcon className='btn'/>
            </div>

            <BookmarkIcon className='btn'/>
        </div>
        {/* captions */}
        <p className='p-4 px-6 truncate'>
            <span className='font-bold mr-1 '>{username}</span> {caption}
        </p>

        {/* comments */}
        <div className='flex p-2 items-center space-x-2'>
            <EmojiHappyIcon className='shrink-0 btn'/>
            <input className='w-40 flex-1 pl-1 border-2 h-10 outline-none bg-gray-50' type="text" placeholder="Add a comment.."/>
            <div className='text-blue-500'>Post</div>
        </div>
    </div>
  )
}

export default Post