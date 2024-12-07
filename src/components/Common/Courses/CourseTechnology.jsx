import React from "react";

const CourseTechnology = ({technologyList}) => {
  return (
    <div className="font-light flex gap-2 items-center text-base">
      <div className="w-5 h-5 flex flex-col text-center justify-center items-center text-grayToWhite">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.499"
          height="14.698"
          viewBox="0 0 14.499 14.698"
        >
          <g id="icons8-tag-48" transform="translate(-5.512 43)">
            <path
              id="Path_781"
              data-name="Path 781"
              d="M9.259-38.978c-3.017,3.017-3.945,4.177-3.713,4.6.619,1.044,5.647,6.072,6.111,6.072a32.457,32.457,0,0,0,4.409-3.984l3.945-3.945v-2.785c0-3.636-.348-3.984-3.984-3.984H13.282Zm9.205-1.7a.694.694,0,0,1-.774.774.694.694,0,0,1-.774-.774.694.694,0,0,1,.774-.774A.694.694,0,0,1,18.465-40.679Z"
              transform="translate(0)"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
      <span className="text-asBlack-400 text-sm">{technologyList} </span>
    </div>
  );
};

export { CourseTechnology };
