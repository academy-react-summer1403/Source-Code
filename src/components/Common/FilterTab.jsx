import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const data = [
  { value: "TypeName", id: 1, label: "اسم دوره" },
  { value: "StatusName", id: 2, label: "وضعیت دوره" },
  { value: "LevelName", id: 3, label: "سطح دوره" },
  { value: "LastUpdate", id: 4, label: "آخرین آپدیت" },
];

const FilterTab = ({ sort, sortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (index) => {
    sortChange(data[index].value);
    setSelected(data[index]);
    toggleDropdown();
  };

  const displayChange = useLocation();
  const displayTab =
    location.pathname == "/blog" || location.pathname == ""
      ? `sm:hidden`
      : `sm:block`;

  return (
    <div className={`relative mx-auto text-asBlack-50 text-sm ${displayTab}`}>
      <div className="flex justify-between" onClick={toggleDropdown}>
        <button className="bg-white text-black-50 dark:border-slate-800 w-32 hover:bg-slate-200 font-bold py-[15px] px-4 rounded-xl shadow-md focus:outline-none">
          {selected ? selected.label : "مرتب سازی"}
        </button>
        <div className="absolute top-5 pr-3">
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
        <div className="bg-white text-asBlack-50 border border-borderGray absolute right-0 mt-2 w-32 rounded-md shadow-lg z-10">
          {data &&
            data.map((item, index) => (
              <button
                className=" dark:border-slate-800 block text-left px-4 py-2 text-sm  hover:bg-borderGray w-full focus:outline-none"
                onClick={() => {
                  handleChange(index);
                }}
                key={index}
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export { FilterTab };
