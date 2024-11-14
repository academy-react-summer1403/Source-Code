import React from 'react'

const BlogDescription = ({desc}) => {
  return (
    <div className='text-asBlack-400 font-thin text-sm py-2 px-5'>
      <p className='wrap-text'>{desc}</p>
    </div>
  )
}

export {BlogDescription}