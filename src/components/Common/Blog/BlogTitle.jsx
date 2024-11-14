import React from "react";

const BlogTitle = ({ title }) => {
  var english = /^[A-Za-z0-9]*$/;
  return (
    <div className="text-asBlack-200 text-xl font-bold text-start pr-5 pb-2 ">
      <h2
        dir={english.test(title[0]) ? "ltr" : "rtl"}
        className="truncate  cursor-pointer  text-ellipsis hover:text-clip  "
      >
        {title}
      </h2>
    </div>
  );
};

export { BlogTitle };
