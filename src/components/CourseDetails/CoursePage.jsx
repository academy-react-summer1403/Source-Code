// import CourseCard from "./CourseCard";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import Comments from "./Comments";
import SliderComponent from "./SliderComponent";

export default function CoursePage() {
  return (
    <>
      <div className="container mx-auto h-[1200px] grid grid-cols-12 gap-6 px-10">
        <div className="col-span-9">
          <Header />
          <MainContent />
          <Comments />
        </div>
        <div className="col-span-3">
          <Sidebar />
        </div>
      </div>

      <div className="w-full py-20">
        <div className="w-full flex justify-center font-semibold text-3xl p-6">
          <h3>دوره های مشابه</h3>
        </div>
        <SliderComponent />
      </div>
    </>
  );
}
