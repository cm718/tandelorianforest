import React from "react"
import park from '../../../static/undraw_a_day_at_the_park_owg1.svg'
import yoga from '../../../static/undraw_working_out_6psf.svg'

const Message = ({ message, day }) => {
  return (
    <div className="m-9">
      <div className="my-4 text-lg font-black text-center text-green-500 px-8 py-2 border-green-500 border-2 rounded-lg ">
        {message}
      </div>
      <img src={day === "Saturday" ? park : yoga} />
    </div>
  )
}

export default Message
