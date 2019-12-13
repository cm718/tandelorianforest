import React from 'react'

const NavButton = ({ date }) => {
  return (
    date === 16 ? 
        <div className="flex justify-center md:justify-end">
          <button className="
            bg-green-600 
            text-white font-semibold 
            py-1 px-2 w-full md:w-32  
            border border-green-500
            hover:bg-green-500 
            focus:outline-none focus-shadow-outline 
            rounded">Next day</button>
        </div> 
          : 
        <div className="flex justify-around md:justify-between">
          <button className="
            bg-green-600 
            text-white font-semibold 
            py-1 px-2 w-full md:w-32  
            border border-green-500
            hover:bg-green-500 
            focus:outline-none focus-shadow-outline 
            rounded">Last day</button>
          <button className="
            bg-green-600 
            text-white font-semibold 
            py-1 px-2 w-full md:w-32  
            border border-green-500
            hover:bg-green-500 
            focus:outline-none focus-shadow-outline 
            rounded">Next day</button>
        </div>  
  )
}

export default NavButton
