import React from "react"

const Card = props => {
  return (
    <div className="lg:w-1/4 md:1/2 s:1 rounded-lg shadow-lg">
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-1">{props.name}</div>
        <p className="text-gray-700 text-base">
          Water me every <span className='font-black text-green-600'>{props.water}</span> or I get thirsty...
        </p>
      </div>
      <img
        style={{ width: "150px" }}
        className="mx-auto"
        src={props.src}
        alt={props.name}
      />
    </div>
  )
}

export default Card
