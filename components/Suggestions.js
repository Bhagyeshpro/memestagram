import React, { useEffect, useState } from 'react'
import faker from "faker"

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-white text-sm font-bold'>Suggestions for you</h3>
        <button className='text-white font-semibold'>See all</button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile.id} className="flex items-center justify-between mt-3">
          <img
            className='h-10 w-10 object-cover border p-[-1px] rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-white text-sm'>{profile.username}</h2> 
            <h3 className='text-xs  text-gray-100 '>{profile.company.name}</h3>
          </div>
          <button className='text-blue-400 text-sm font-bold'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions