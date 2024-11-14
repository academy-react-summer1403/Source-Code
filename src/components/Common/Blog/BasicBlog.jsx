import React from "react";
import { BlogTitle } from "./BlogTitle";
import { BlogDescription } from "./BlogDescription";
import { BlogCategory } from "./BlogCategory";
import { BlogMoreBtn } from "../Buttons/BlogMoreBtn";
import { BlogPicture } from "./BlogPicture";
import { Link } from "react-router-dom";

const BasicBlog = ({ detail , id }) => {
  console.log("idd",id);
  return (
    
    <div  className="p-2 bg-cardBg border-borderCol shadow-md border rounded-xl  w-[256px]  flex flex-col gap-3 pb-3 ">
      <div>
        <BlogPicture id={id} pic={detail?.currentImageAddressTumb} />
      </div>
      <Link to={`/BlogDetails/${id}`}>
      <BlogTitle title={detail?.title} />
      <BlogDescription desc={detail?.miniDescribe} />
      <div className="flex justify-between px-4 pt-1">
        <BlogCategory category={detail?.newsCatregoryName} tag={detail?.tag} />
        <BlogMoreBtn id={detail?.id}/>
      </div>
      </Link>
    </div>
  );
};

export default BasicBlog;
