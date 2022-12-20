import React, { useEffect, useState } from 'react'
import faker from "faker"
import Story from "../components/Story"
import { useSession } from 'next-auth/react'
import Image from 'next/image'

function Stories() {
    const [suggestions, setSuggestions] = useState([])
    const {data: session} = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestions(suggestions)
        // console.log(suggestions);
    }, [])

    return (
        <div className='flex space-x-3 p-4 bg-black mt-2 lg:mt-3 border border-black
     rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-red-600'>
            {session && (
                <>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-14 h-14 relative'>
                            <Image
                                src={session?.user?.image}
                                alt='Profile Pic'
                                layout='fill'
                                objectFit='cover'
                                className='rounded-full p-[1.5px] border-red-500 border-2 object-contain
          hover:scale-110 cursor-pointer transform transition duration-200 ease-out'
                            />
                        </div>
                        <p className='text-white text-xs mt-1 w-14 truncate text-center cursor-pointer'>{session?.user?.username}</p>
                    </div>
                </>
            )}


            {suggestions.map(profile => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username
                    }
                />
            ))}
        </div>
    )
}

export default Stories