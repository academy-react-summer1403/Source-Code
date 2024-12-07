import React from "react";
import { Link } from "react-router-dom";

const CourseMiniDescription = ({ id, describe }) => {
  return (
    <Link
      to={`/CoursesDetails/${id}`}
      className=" font-light text-grayToWhite"
    >
      <p className="w-[653px]">{describe}</p>
    </Link>
  );
};

export default CourseMiniDescription;
