import React from 'react'
import { BlogPicture } from './BlogPicture'
import { BlogTitle } from './BlogTitle'
import { BlogCategory } from './BlogCategory'
import { BlogMoreBtn } from '../Buttons/BlogMoreBtn'
import { BlogDescription } from './BlogDescription'
import { Link } from 'react-router-dom'

const SecondViewBlog = ({detail , id}) => {
  return (
    <Link to={`/BlogDetails/${id}`} className="p-2 mb-8 relative bg-cardBg border-borderCol mt-12 md:mt-4 shadow-md rounded-2xl gap-4 flex">
      <div className="absolute -top-8 left-8 h-24 w-24 md:static md:h-full md:w-80  flex-none">
        <BlogPicture pic={detail.currentImageAddressTumb} /> 
      </div>      
      <div className='flex flex-grow flex-col gap-5 py-5  '>
        <BlogTitle title={detail.title} />
        <BlogDescription desc={detail.miniDescribe} />
        
        <div className='flex justify-between pt-8 px-4'>
          <BlogCategory category={detail.newsCatregoryName} tag={detail.tag}/>
          <BlogMoreBtn id={detail.id}/>
        </div>
      </div>
    </Link>
    
  )
}

export default SecondViewBlog