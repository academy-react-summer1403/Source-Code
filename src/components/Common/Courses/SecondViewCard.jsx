import React from "react";
import SecondViewCourses from "./SecondViewCourses";

const SecondViewCard = ({ cardDetail }) => {
  return (
    <div>
      <div className="flex flex-col gap-7 w-[1150px] mx-20 h-[1300px] ">
        {activeView === "view2" &&
          cardDetail.map((item) => {
            return <SecondViewCourses detail={item} />;
          })}
      </div>
    </div>
  );
};

export default SecondViewCard;
