import React from "react";
import { BasicCourses } from "./BasicCourses";

const BasicCard = ({ cardDetail }) => {
  return (
    <div className="flex flex-wrap gap-1 w-[1200px] mx-20 h-[1300px]">
      {cardDetail.map((item) => {
        return <BasicCourses cardDetail={cardDetail} />;
      })}
    </div>
  );
};

export default BasicCard;
