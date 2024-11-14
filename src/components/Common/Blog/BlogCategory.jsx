import React from 'react'


const BlogCategory = ({category , tag}) => {
  return (
    <div className='text-asBlack-400 flex gap-2 items-center font-thin text-sm '>
      <div className='w-3 h-3'>
      <img src={tag} />
      </div>
      <span>{category}</span>
    </div>
  )
}

export {BlogCategory}