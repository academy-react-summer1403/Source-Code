import React from "react";
import { Link } from "react-router-dom";
// import image from "../../../assets/image/image.jpg"

const CoursePicture = ({ pic ,id }) => {
  return (
    <div className="overflow-hidden m-auto rounded-md">
      <Link to={`/CoursesDetails/${id}`} >
     
      {pic ? (
            <img src={pic} alt="Course" className="w-64 h-36 object-cover" /> 
          ) : (
            <img className="w-64 h-36  overflow-hidden object-cover  "  />
          )}
           </Link>
    </div>
   
  );
};

export { CoursePicture };
