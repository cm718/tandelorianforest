import React from 'react'
import image from '../images/bonsai.svg'

export default function card(props) {
    console.log(props);
    return (
        <div className='flex-row justify-around'>
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-gray-700 text-base">Water me every {props.water} or I get thirsty...</p>
                </div>
                <img className="w-1/3 m-auto" src={image} alt="bonsai" />
                <div className="px-6 py-4 flex justify-center">
                    <span className="
                        inline-block bg-gray-200 
                        rounded-full px-3 py-1 text-sm 
                        font-semibold text-gray-700 mr-2">Water me</span>
                </div>
        </div>
    </div>
    )
}
