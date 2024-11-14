import React from 'react'

const CourseBlogTitle = (props) => {
    const {title=""}=props;
  return (
    <div className='bg-cardBg text-asBlack-200 shadow rounded-xl sm:w-60 w-24 py-3 sm:py-4'>
        <h3 className='text-center font-black text-2xl'>{`${title }`}</h3>
    </div>
  )
}

export default CourseBlogTitle