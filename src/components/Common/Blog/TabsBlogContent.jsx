import React, { useState } from "react";
import SecondViewBlogCard from "./SecondViewBlogCard";
import { BasicBlogCard } from "./BasicBlogCard";
import CoursePic from "../../../assets/image/courses.png";
import BasicBlog from "./BasicBlog";
import SecondViewBlog from "./SecondViewBlog";
import tag from "../../../assets/image/tag.png";
import { useMediaQuery } from "react-responsive";

const TabsBlogContent = ({
  blogDetails,
  activeBlogView,
  changePage,
  changePageSize,
}) => {
  // const { activeBlogView } = props;

  const isMobile = useMediaQuery({ query: `(max-width: 619px)` });

  return (
    <>
      {activeBlogView === "view1" || isMobile ? (
        <div>
          {/* <div className="flex wrap m-auto"> */}
          <div className="flex flex-wrap gap-11 px-8 justify-center max-h-[1200px] overflow-hidden py-2">
            {blogDetails?.map((item) => {
              return <BasicBlog key={item.id} detail={item} id={item.id} />;
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="px-24 justify-center max-h-[1420px] overflow-hidden">
            {blogDetails?.map((item) => {
              return <SecondViewBlog key={item.id} detail={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TabsBlogContent;
