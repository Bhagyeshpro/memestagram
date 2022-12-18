import Image from 'next/image';
import React from 'react'

function Story({ img, username }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-14 h-14 relative'>
        <Image
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt='Profile Pic'
          layout='fill'
          objectFit='cover'
          className='rounded-full p-[1.5px] border-red-500 border-2 object-contain
          hover:scale-110 cursor-pointer transform transition duration-200 ease-out'
        />
      </div>
      <p className='text-white text-xs mt-1 w-14 truncate text-center cursor-pointer'>{username}</p>
    </div>
  )
}

export default Story