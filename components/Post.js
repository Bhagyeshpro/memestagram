import Image from 'next/image'
import React from 'react'
import {
  BookmarkIcon,
  BookOpenIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon
} from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from 'next-auth/react'


function Post({ id, username, caption, userImg, img }) {
  const { data: session } = useSession();

  return (
    <div className='bg-black my-2 border border-black rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-3'>
        <img src={userImg}
          className='h-10 w-10 border p-1 mr-3 object-contain rounded-full cursor-pointer'
        />
        <p className='text-white flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='btn' />
      </div>

      {/*Img */}
      <img
        src={img}
        alt='Profile Pic'
        className='object-cover w-full'
      />

      {/* Buttons */}
      {session && (
        <div className='flex justify-between px-3 pt-3'>
          <div className='flex space-x-3'>
            <HeartIcon className='btn' />
            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/* Caption*/}
      <p className='flex p-3'>
        <span className='text-white font-bold text-sm'>{username} </span>
        <p className='text-white truncate ml-2 text-sm'>{caption}</p>
      </p>

      {/* Comments */}

      {/* Input */}
      {session && (
        <form className='flex items-center p-3'>
          <EmojiHappyIcon className='btn' />
          <input type="text" className='border-none focus:ring-0 flex-1 outline-none
          mx-3 bg-black text-white'
            placeholder='Enter Your Comment...'
          />
          <button className='text-blue-400 font-semibold'>Post</button>
        </form>
      )}

    </div>
  )
}

export default Post