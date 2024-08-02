import React from 'react'
const Card = ({children, className}: {children: any, className: any}) => {
    return (
        <div className={`w-full h-full rounded-2xl relative p-8 border-2 ${className ? `${className}` : "bg-gray-900  border-gray-800"}`}>
            {children}
        </div>
    )
}
export default Card