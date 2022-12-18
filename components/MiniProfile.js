import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src='https://images.unsplash.com/photo-1634254773966-6f47548d7c12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhbWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        className='rounded-full w-16 h-16 object-fit border p-[2px] border-red-500'
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold text-white'>hollywoodoffensive</h2>
        <h3 className='text-sm text-white'>Welcome to Offensivgrm</h3>
      </div>
      <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile