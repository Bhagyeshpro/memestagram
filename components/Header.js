import Image from 'next/image'
import React from 'react'
import { FireIcon, HomeIcon, PaperAirplaneIcon, PlusCircleIcon, SearchIcon } from "@heroicons/react/outline"
function header() {
    return (
        <div className='shadow-sm border-b sticky top-0 z-50 bg-black'>
            <div className='flex justify-between max-w-6xl bg-black mx-4 lg:mx-auto'>
                {/* Left */}
                <div className='relative w-24 cursor-pointer p-3 pb-2'>
                    <Image
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiljU-0DG2EyfjVexSjP9x8G2rWTnR8VOClEX6ntC24LB7jjw1yjzDJOUmL7_f7Srdqt252hP8JT5kra9RZxePGbCnYcQxUoPowPSG29XcoL3ssMvnlAQy_iSE_9JzWpQ3pGWJujR21t2N9TDKEVV6V8z7iPh6SGXW3yVvaPIzbTxEowaCE0H_c4rcW/s1255/offensivegrm.png"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>


                {/* Middle */}
                <div className='max-w-xs hidden lg:inline-grid'>
                    <div className='relative mt-1 p-3'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className="h-5 w-5 text-gray-400" />

                        </div>
                        <input className='bg-black-50 block w-full pl-10 focus:ring-black focus:border-black rounded-md' type="text" placeholder='Search...' />
                    </div>
                </div>


                {/* Right */}
                <div className='flex items-center justify-end space-x-4 py-2'>

                    <HomeIcon className="navBtn" />
                    <FireIcon className="navBtn" />
                    <PlusCircleIcon className='navBtn' />
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='navBtn rotate-45' />
                        <div className='absolute -top-1 -right-2 text-xs w-5 h-5 
                            bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>7</div>
                    </div>
                    <img src='https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt='Profile Pic'
                        className='h-10 rounded-full cursor-pointer'
                    />
                </div>


            </div>
        </div>

    )
}

export default header