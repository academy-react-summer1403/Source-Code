import React from 'react'
import FilterBar from '../../components/BlogsComponent/FilterBar'; 
import BlogsList from '../../components/BlogsComponent/Post'; 

function Blog() {
  return (
    <div className="w-full h-auto">
      
    <div className="w-full h-[400px] mt-12 px-12 relative">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/image.png")', backgroundSize: 'contain' }}
      >
      </div>
      <div className="absolute top-0 right-0 h-full flex items-center"> 
        <div className="text-right pr-8 md:pr-24"> 
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            اخبار و مقالات هگزاسکواد
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed">
            آموزش برنامه‌نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. <br />
            برنامه‌نویسی مهارتی است که به افراد امکان می‌دهد تا با نرم‌افزارهای 
            کامپیوتری ارتباط برقرار کنند و آنها را توسعه دهند.
          </p>
        </div>
      </div>
    </div>

    
    <FilterBar /> 
    <BlogsList />
    
    <div className="mt-6 p-4">
      
    </div>
  </div>
  )
}

export default Blog