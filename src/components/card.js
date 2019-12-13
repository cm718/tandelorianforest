import React from "react"

const Card = props => {
  return (
    // card body
    <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 rounded-lg shadow-lg">
      {/* div for text including the name and the subheading to water it */}
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-1">{props.name}</div>
        <p className="text-gray-700 text-base">
          Water me every <span className='font-black text-green-600'>{props.water}</span> or I get thirsty...
        </p>
      </div>
      {/* image tag with styles and src */}
      <img
        style={{ width: "125px", height: "125px" }}
        className="mx-auto"
        src={props.src}
        alt={props.name}
      />
    </div>
  )
}

export default Card
