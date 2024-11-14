import React from "react";
// import { FavIcon } from "./FavIcon";
import image from "../../../assets/image/image.jpg";
import FavoriteBlog from "./favoriteBlog";

const BlogPicture = ({ pic,id }) => {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden">
      <div>
        {" "}
        {pic ? (
          <img src={pic} className="w-64 h-36 object-cover" />
        ) : (
          <img className="w-64 h-36  object-cover" src={image} />
        )}{" "}
      </div>
      <div className="absolute top-4 left-4 z-20">
        <FavoriteBlog id={id} />
      </div>
    </div>
  );
};

export { BlogPicture };
