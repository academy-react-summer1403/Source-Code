import React, { useState } from "react";
import { FilterTab } from "../FilterTab";

const BlogFilter = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("tab1");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  const handleTabClick = (tab, sortingCol, sortType) => {
    setActiveTab(tab);
    setFilter({
      PageNumber: 1,
      RowsOfPage: 10,
      SortingCol: sortingCol,
      SortType: sortType,
    });
  };
  return (
    <>
      {/* filter in laptop mode */}
      <div className=" hidden sm:flex rounded-xl justify-center pt-8">
        <div className="rounded-xl ">
          <div className="flex rounded-2xl overflow-hidden shadow-md font-medium ">
            <button
              className={`py-2 px-4  shadow-md ${
                activeTab === "tab1"
                  ? " rounded-tr-xl rounded-br-xl  text-asBlack-200 bg-activeTab"
                  : " shadow dark:rounded-br-xl dark:rounded-tr-xl bg-deActiveTab text-filterTxt"
              }`}
              onClick={() => handleTabClick("tab1", undefined, undefined)}
            >
              همه
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "tab2"
                  ? " text-asBlack-200 bg-activeTab"
                  : "bg-deActiveTab text-filterTxt shadow "
              }`}
              onClick={() => handleTabClick("tab2", "currentLikeCount", "DESC")}
            >
              محبوب ترین ها
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "tab3"
                  ? " text-asBlack-200 bg-activeTab"
                  : "bg-deActiveTab text-filterTxt shadow "
              }`}
              onClick={() => handleTabClick("tab3", "insertDate", "DESC")}
            >
              جدیدترین ها
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "tab4"
                  ? " rounded-tl-xl rounded-bl-xl  text-asBlack-200 bg-activeTab"
                  : "bg-deActiveTab text-filterTxt shadow dark:rounded-tl-xl dark:rounded-bl-xl "
              }`}
              onClick={() => handleTabClick("tab4", "currentView", "DESC")}
            >
              پربازدیدترین ها
            </button>
          </div>
          {/* <div className="p-4">
          {activeTab === 'tab1' && <div>Content for Tab 1</div>}
          {activeTab === 'tab2' && <div>Content for Tab 2</div>}
          {activeTab === 'tab3' && <div>Content for Tab 3</div>}
          {activeTab === 'tab4' && <div>Content for Tab 4</div>}
        </div> */}
        </div>
      </div>

      {/* // filter in responsive mode */}
      <FilterTab />
    </>
  );
};

export { BlogFilter };
