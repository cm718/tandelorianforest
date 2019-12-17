import React from "react"

const Card = ({ water, src, name }) => {
  return (
    // card body
    <div className="xs:w-full sm:w-1/2 lg:w-1/3  rounded-lg shadow-lg my-5 p-1">
      {/* div for text including the name and the subheading to water it */}
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-1">{name}</div>
        <p className="text-gray-700 text-base">
          Water me every <span className='font-black text-green-600'>{water}</span> or I get thirsty...
        </p>
      </div>
      {/* image tag with styles and src */}
      <img
        style={{ width: "225px", height: "225px", paddingBottom:"40px" }}
        className="mx-auto"
        src={src}
        alt={name}
      />
    </div>
  )
}

export default Card
