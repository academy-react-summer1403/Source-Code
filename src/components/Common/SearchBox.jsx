import React, { useState } from "react";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBox = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        <div className="w-[300px] absolute xl:relative xl:top-0 xl:translate-x-0 xl:left-0  top-16 left-1/2  -translate-x-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="   w-full h-8 px-2 py-1 border border-borderGray bg-cardBg text-asBlack-100 rounded-3xl focus:outline-none "
          />
        </div>
      )}
      <div>
        <button
          className=" dark:border-slate-800 bg-buttonBg h-8 w-[35px] sm:h-8 sm:w-[40px] rounded-[15px]"
          onClick={toggleSearchBox}
        >
          <div className="w-5 h-5 sm:w-7 flex items-center justify-center m-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search "
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export { SearchBox };
