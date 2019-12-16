import React from "react"

const Title = ({day, month, date}) => {
  return (
    <div>
      <div className="my-10 text-xl font-black text-center text-green-600">
        {day}, {month} {date}
      </div>
      <div className="mb-4 text-lg font-black text-center text-green-500">
        Plants to water today
      </div>
    </div>
  )
}

export default Title
