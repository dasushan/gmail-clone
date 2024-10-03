import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'

const Message = () => {
  return (
    <div className='flex items-start justify-between border-b border-gray-200 px-4 py-2text-sm hover:cursor-pointer hover:shadow-md'>
        <div className='flex items-center gap-3 '>
            <div className='flex-none text-gray-300'>
                <MdCropSquare w-5 h-5/>
            </div>
            <div className='flex-none text-gray-300'>
                <RiStarLine w-5 h-5/>
            </div>
            <div className='flex-1 ml-4'>
                <p className='text-gray-600 truncate inline-block max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid maxime quidem, tenetur quos doloremque illum, nam sint commodi modi, optio beatae </p>
            </div>
            <div className='flex-none text-gray-400 text-sm'>
                Time ayega
            </div>
        </div>
    </div>
  )
}

export default Message