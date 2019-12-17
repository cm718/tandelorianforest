import React from "react"
import park from '../../../static/undraw_a_day_at_the_park_owg1.svg'
import yoga from '../../../static/undraw_working_out_6psf.svg'

const Message = ({ message, day }) => {
  return (
    <div className="m-9">
      <div className="mb-4 text-3xl font-bold text-center text-green-500 px-8 py-2">
        {message}
      </div>
      <img src={day === "Saturday" ? park : yoga} />
    </div>
  )
}

export default Message
