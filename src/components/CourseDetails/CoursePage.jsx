// import CourseCard from "./CourseCard";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import Comments from "./Comments";
import SliderComponent from "./SliderComponent";
import { useState } from "react";

export default function CoursePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="container mx-auto grid grid-cols-12 gap-6 px-10 dark:bg-slate-700 dark:text-white">
          <div className="col-span-9 mt-5">
            <Header />
            <MainContent />
            <Comments />
          </div>
          <div className="col-span-3 ">
            <Sidebar />
          </div>
        </div>

        <div className="w-full pb-20 pt-48 dark:bg-slate-700">
          <div className="w-full flex justify-center font-semibold text-3xl">
            <h3 className="dark:text-white">دوره های مشابه</h3>
          </div>
          <SliderComponent />
        </div>
        <button className="w-min bg-black text-white dark:text-black rounded-full p-2 dark:bg-white"
          onClick={toggleDarkMode}>
          {darkMode ? "LIT" : "DRK"}
        </button>
      </div>
    </>
  );
}
