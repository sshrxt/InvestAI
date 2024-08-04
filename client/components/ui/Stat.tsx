import React from 'react'
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";

const Stat = ({title, description, percent}: {title: string, description: string, percent: number}) => {
  return (
    <div className='ml-5 overflow-x-auto'>
      <div className="text-sm">
        {title}
      </div>
      <div className='text-4xl'>
        {description}
      </div>
      <div className='flex flex-row items-end justify-start'>
        <RxTriangleUp className="text-2xl text-green"></RxTriangleUp>
        {percent}%
      </div>
    </div>
  )
}

export default Stat
