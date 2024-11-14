import React from 'react'
import { Link } from 'react-router-dom';

const CourseTitle = ({title ,id}) => {
  var english = /^[A-Za-z0-9]*$/;
  // console.log(id)
  return (
    <Link to={`/CoursesDetails/${id}`}  className='text-lg  mt-1 font-bold text-asBlack-200'>
      <h2
       dir={english.test(title[0]) ? "ltr" : "rtl"}
        >{title} </h2>
    </Link>
  )
}

export {CourseTitle};