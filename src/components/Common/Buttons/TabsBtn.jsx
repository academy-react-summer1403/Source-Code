import React from "react";
import { useLocation } from "react-router-dom";

const TabsBtn = (props) => {
  const { activeView, handleViewClick1, handleViewClick2, activeBlogView } =
    props;

  return (
    <>
      <div className="flex p-2 mt-3 gap-1 rounded-xl bg-slate-200 border border-red-500">
        <button
          onClick={handleViewClick1}
          className={`py-2 px-2 rounded-xl  ${activeView === "view1" ? "bg-white" : " bg-deActiveTab "
            }`}
        >
          <svg className="mx-auto my-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.03003 8.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.03003 15.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.51001 21.9898V2.00977" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.51 21.9898V2.00977" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={handleViewClick2}
          className={`px-2 rounded-xl ${activeView === "view2" ? "bg-white" : " bg-deActiveTab "
            }`}
        >
          <svg className="mx-auto my-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.03003 8.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.03003 15.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TabsBtn;
