import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CourseFilterTab } from "../../Common/Courses/CourseFilterTab";
import { BasicCourses } from "./BasicCourses";
import { CourseAccarFilter } from "./CourseAccarFilter";
import SecondViewCourses from "./SecondViewCourses";

const TabsContent = ({
  activeView,
  cardDetail,
  onRateChange,
  onLikeChange,
  filterObj,
  filterChange,
  cat
}) => {
  const [openSitu, setOpenSitu] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  return (
    <>
      <div className={activeView === "view1" ? "block" : "hidden"}>
        <div className="flex mx-auto justify-center px-10 ">
          <div>
            <CourseAccarFilter
              filterObj={filterObj}
              filterChange={filterChange}
              openSitu={openSitu}
              setOpenSitu={setOpenSitu}
              cat={cat}
            />
          </div>
          <div className="flex flex-col">
            <div className="pr-12">
              <CourseFilterTab filter={filterObj} onChange={filterChange} />
            </div>

            <div className="flex flex-wrap justify-center gap-5 mx-10 pb-4 overflow-hidden pt-5">
              {activeView === "view1" &&
                cardDetail?.map((item) => {
                  console.log("rr", item && item.courseRate);
                  return (
                    <BasicCourses
                      key={item.courseId}
                      detail={item}
                      onLikeChange={onLikeChange}
                      onRa9teChange={onRateChange}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className={activeView === "view2" ? "block" : "hidden"}>
        <div className="flex mx-auto justify-center px-10 ">
          <div>
            <CourseAccarFilter
              filterObj={filterObj}
              filterChange={filterChange}
              openSitu={openSitu}
              setOpenSitu={setOpenSitu}
              cat={cat}
            />
          </div>
          <div className="flex flex-col mx-auto">
            <div className="pr-14">
              <CourseFilterTab filter={filterObj} onChange={filterChange} />
            </div>

            <div>
              <div className="flex flex-wrap gap-7 pb-7 mx-14 pt-5 m-auto">
                <div className="hidden xl:block">
                  {activeView === "view2" &&
                    cardDetail?.map((item) => {
                      return (
                        <SecondViewCourses
                          key={item.courseId}
                          detail={item}
                          isLiked={item.isLiked}
                          isDissliked={item.issDisliked}
                          onLikeChange={onLikeChange}
                        />
                      );
                    })}
                </div>

                <div className="xl:hidden block">
                  <div className="flex wrap m-auto">
                    <div className="flex flex-wrap justify-center gap-5 mx-10 pb-4 overflow-hidden pt-5">
                      {activeView === "view2" &&
                        cardDetail?.map((item) => {
                          return (
                            <BasicCourses
                              key={item.courseId}
                              detail={item}
                              isLiked={item.isLiked}
                              isDissliked={item.isDissliked}
                              onLikeChange={onLikeChange}
                              onRateChange={onRateChange}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsContent;
