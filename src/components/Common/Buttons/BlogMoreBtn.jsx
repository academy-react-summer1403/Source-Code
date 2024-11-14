import React from 'react'
import { Link } from 'react-router-dom'

const BlogMoreBtn = ({id}) => {
  return (
    <Link to={`/BlogDetails/${id}`}  className='text-sm border-footer-text text-center ml-2 border p-1 rounded-2xl text-footer-text font-normal hover:bg-hoverButtonBg hover:font-medium'>
      <button>ادامه مطلب</button>
    </Link>
  )
}

export {BlogMoreBtn}