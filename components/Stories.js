import React, { useEffect, useState } from 'react'
import faker from "faker"
import Story from "../components/Story"

function Stories() {
    const [suggestions, setSuggestions] = useState([])
    
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestions(suggestions)
        console.log(suggestions);
  }, [])
  
  return (
    <div className='flex space-x-3 p-4 bg-black mt-2 lg:mt-3 border border-black
     rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-red-600'>
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