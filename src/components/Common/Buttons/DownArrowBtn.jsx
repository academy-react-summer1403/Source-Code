import React, { useState } from "react";

const DownArrowBtn = ({ value, onChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectFilter = (filter) => {
    toggleDropdown();
    onChange("RowsOfPage", filter);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={`relative text-asBlack-50 text-sm`}>
      <div className="flex justify-between" onClick={toggleDropdown}>
        <button className="bg-cardBg text-asBlack-50 dark:border-slate-800 w-32 hover:bg-slate-200 font-bold py-[15px] px-2 mr-2 rounded-xl shadow-md focus:outline-none">
          {value ? value : "تعداد نمایش"}
        </button>
        <div className="absolute top-5 pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="bg-cardBg text-asBlack-50 border border-borderGray absolute right-0 mt-2 w-32 rounded-md shadow-lg z-10">
          <button
            className=" dark:border-slate-800 block text-left px-4 py-2 text-sm  hover:bg-borderGray w-full focus:outline-none"
            onClick={() => selectFilter("6")}
          >
            6
          </button>
          <button
            className=" block text-left px-4 py-2 text-sm hover:bg-borderGray w-full focus:outline-none"
            onClick={() => selectFilter("9")}
          >
            9
          </button>
          <button
            className=" block text-left px-4 py-2 text-sm hover:bg-borderGray w-full focus:outline-none"
            onClick={() => selectFilter("15")}
          >
            15
          </button>
        </div>
      )}
    </div>
  );
};

export default DownArrowBtn;
