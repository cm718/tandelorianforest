import React from 'react'

const CardContainer = ({ children }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center sm:justify-between">
            { children }
        </div>
    )
}

export default CardContainer