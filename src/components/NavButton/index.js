import React from 'react'

const NavButton = ({ name, handleNavButton }) => {
  return (
          <button 
          onClick={handleNavButton}
          className="
            bg-green-600 
            text-white font-semibold 
            py-1 px-2 w-full md:w-32  
            border border-green-500
            hover:bg-green-500 
            focus:outline-none focus-shadow-outline 
            rounded">{name} Day</button>
  )
}

export default NavButton
