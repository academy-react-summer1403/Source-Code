import React from "react";
import { Link } from "react-router-dom";

const CoursePriceBtn = ({id , cost}) => {
  return (
    
   <Link to={`/CoursesDetails/${id}`}>
    <button className="flex gap-x-2 justify-center items-center hover:font-extrabold border px-4 py-1 text-price-btn border-price-btn  rounded-2xl font-bold text-sm">
      <span>{cost }</span>
      <span className="">تومان</span>
    </button></Link>
  );
};

export { CoursePriceBtn };
