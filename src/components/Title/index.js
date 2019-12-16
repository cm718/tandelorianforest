import React from "react"

const Title = ({day, month, date}) => {
  return (
    <div>
      <div className="my-10 text-3xl font-black text-center text-green-600">
        {day} 
        <div>

        {month} {date}
        </div>
      </div>
    </div>
  )
}

export default Title
