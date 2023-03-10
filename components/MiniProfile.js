import { signOut, useSession } from 'next-auth/react';
import React from 'react'

function MiniProfile() {
  const {data: session} = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src={session?.user?.image}
        className='rounded-full w-16 h-16 object-fit border p-[2px] border-red-500'   
       /> 
      <div className='flex-1 mx-4'>
        <h2 className='font-bold text-white'>{session?.user?.username}</h2>
        <h3 className='text-sm text-white'>Welcome to Offensivgrm</h3>
      </div>
      <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile