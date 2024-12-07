import React, { useEffect, useState } from 'react';
import GetCourseDetails from '../../core/services/api/courseid';
import { useParams } from 'react-router-dom';
import { dateModified } from '../Card/datemod';


export default function Sidebar() {
  const params = useParams();

  const [coursesId, setCoursId] = useState([])

  const GetCourseId = async () => {
    const res = await GetCourseDetails(params.id)

    setCoursId(res)
  }

  console.log(params.id)

  useEffect(() => {
    GetCourseId()
  }
    , []
  )
  return (
    <a key={coursesId.courseId} >
      <div className="flex flex-col gap-6 p-6 md:p-6 lg:py-8 -mr-16 w-max">
        <div className="bg-white dark:bg-slate-500 dark:text-white  items-center text-center shadow-inner rounded-2xl space-y-4 divide-y divide-slate-200">
          <div className="flex flex-col row-span-2 rounded-2xl p-4 shadow-inner">
            <div className="font-semibold p-3">
              <h3>مشخصات دوره</h3>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif whitespace-nowrap">
              <div className="w-full flex flex-row justify-between py-2 border-b-2 px-2">
                <div className="flex gap-2">
                  <img
                    className="w-8 h-8"
                    src="../../../public/Icon (2).png"
                    alt="تعداد دانشجو"
                  />
                  <p>تعداد دانشجو</p>
                </div>
                <div>
                  <h3>۲۷</h3>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between py-2 border-b-2 px-2">
                <div className="flex gap-2">
                  <img
                    className="w-8 h-8"
                    src="../../../public/Icon (3).png"
                    alt="وضعیت دوره"
                  />
                  <p>وضعیت دوره</p>
                </div>
                <div>
                  <h3>{coursesId.courseStatusName}</h3>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between py-2 border-b-2 px-2">
                <div className="flex gap-2">
                  <img
                    className="w-8 h-8"
                    src="../../../public/Icon (4).png"
                    alt="تاریخ شروع"
                  />
                  <p>تاریخ شروع</p>
                </div>
                <div>
                  <h3>{dateModified(coursesId.startTime)} </h3>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between py-2 border-b-2 px-2">
                <div className="flex gap-2">
                  <img
                    className="w-8 h-8"
                    src="../../../public/Icon (7).png"
                    alt="تاریخ پایان"
                  />
                  <p>تاریخ پایان</p>
                </div>
                <div>
                  <h3>{dateModified(coursesId.endTime)}</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-row justify-center gap-8 p-3 items-center">
              <button className="bg-blue-500 text-white py-3 px-4 rounded-3xl text-center whitespace-nowrap">
                شرکت در دوره
              </button>
              <div className="flex justify-center gap-2 ">
                <p className="text-blue-500 font-semibold">{coursesId.cost}</p>
                <p>تومان</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-500 dark:text-white flex flex-row justify-start items-center gap-3 shadow-inner rounded-md p-5">
          <div>
            <img
              className="w-12 h-12 rounded-lg"
              src="/public/dr.jpg"
              alt="معلم"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-start items-center gap-3">
              <img className="w-4 h-4" src="/public/teacher.png" alt="معلم" />
              <h3 className="font-semibold">دکتر بحرالعلوم</h3>
            </div>
            <p className="font-serif text-gray-600 whitespace-nowrap">
              برنامه نویسی تحت فرانت و بکند
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
