import React, { useState } from "react";
import { ArrowDown } from "../../../../public/svg/ArrowDown";
import { Select, Option } from "@material-tailwind/react";
import { FilterTab } from "../FilterTab";
import TabsBtn from "../Buttons/TabsBtn";
import TabsContent from "./TabsContent";

const CourseFilterTab = ({ filter, onChange }) => {
  const handleSearchChange = (event) => {
    onChange("Query", event.target.value || "");
  };
  const handleSortChange = (val) => {
    onChange("SortingCol", val);
  };
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex lg:hidden  items-center justify-center gap-2 w-[80px] min-w-[60px] bg-cardBg border-borderGray shadow-md h-12 rounded-lg leading-10 px-2 text-sm text-asBlack-100">
        <button onClick={() => setOpenSitu(!openSitu)}>فیلتر</button>
        <div className="flex flex-col justify-center items-center text-asBlack-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-funnel-fill "
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
          </svg>
        </div>
      </div>
      <div className="md:w-[460px] transition-all xl:w-[630px] w-[150px] sm:w-[250px] bg-buttonBg border-borderCol text-header h-12 leading-10 rounded-lg shadow-md ">
        <input
          type="text"
          placeholder="جستجو..."
          className="px-2 w-full bg-cardBg border-borderGray shadow-md outline-none rounded-lg  text-header h-12"
          onChange={handleSearchChange}
          value={filter.query}
        />
      </div>
      <FilterTab sort={filter.SortingCol} sortChange={handleSortChange} />
    </div>
  );
};

export { CourseFilterTab };
