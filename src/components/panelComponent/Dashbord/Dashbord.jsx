import { useState, useEffect } from "react";
import EditProfile from "../EditProfile/EditProfile";
import { dateModified } from "../../Card/datemod";

function Dashbord() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (storedUserInfo) {
          setUserInfo(storedUserInfo);
        }
      }

      setLoading(false);
    };



    fetchData();
  }, []);
  if (loading) {
    return <div>در حال بارگذاری اطلاعات...</div>;
  }

  return (
    <div className="">
      <div className="h-12 flex border-b border-b-slate-300">
        <div className="w-1/2">
          <div className="w-1/3 h-full">
            <div className="mt-2 w-max my-auto mr-5 h-min">داشبرد</div>
          </div>
        </div>
        <div className="w-1/2" dir="ltr">
          <div className="w-1/3 h-full flex ml-12">
            <div className="h-min my-auto cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <div className="h-min my-auto ml-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:h-44 md:h-60 h-80 border-indigo-400 w-11/12 mx-auto mt-10 rounded-2xl relative">
        <div className="h-2/3 mt-3 mr-2 flex">
          <div className="text-gray-500 mt-4 mr-3"> نام و نام خانوادگی : </div>
          <div className="text-indigo-600 mt-4 mr-2">
            {userInfo.fName && userInfo.lName && `${userInfo.fName} ${userInfo.lName}`}
          </div>
        </div>
        <div className="h-2/3 mt-3 mr-2 flex">
          <div className="text-gray-500 mt-4 mr-3"> تاریخ تولد : </div>
          <div className="text-indigo-600 mt-4 mr-2">{dateModified(userInfo.birthDay)} </div>
        </div>
        <div className="h-2/3 mt-3 mr-2 flex">
          <div className="text-gray-500 mt-4 mr-3"> شماره همراه : </div>
          <div className="text-indigo-600 mt-4 mr-2">
            {" "}
            {userInfo.phoneNumber}{" "}
          </div>
        </div>
        <div className="h-2/3 mr-2 flex">
          <div className="text-gray-500 mt-4 mr-3"> شماره ملی : </div>
          <div className="text-indigo-600 mt-4 mr-2">
            {" "}
            {userInfo.nationalCode}{" "}
          </div>
        </div>
        <div className="h-2/3 mr-2 flex">
          <div className="text-gray-500 mt-4 mr-3"> ایمیل: </div>
          <div className="text-indigo-600 mt-4 mr-2"> {userInfo.email} </div>
        </div>
        {/* <div className="h-2/3 mt-3 mr-2 flex">
          <div className="text-gray-500 mt-4 mr-3"> درباره من: </div>
          <div className="text-indigo-600 mt-4 mr-2"> {userInfo.userAbout} </div>
        </div> */}
        {/* <div className="h-2/3 mt-3 mr-2 flex">
          <div className="text-gray-500 mt-4 mr-3"> آدرس: </div>
          <div className="text-indigo-600 mt-4 mr-2"> {userInfo.homeAdderess} </div>
        </div> */}
        <div className="absolute bottom-0 text-indigo-600 left-0 w-2/12 md:h-1/4 h-1/6 leading-10 text-center border border-t-indigo-400 border-r-indigo-400  rounded-tr-2xl rounded-bl-2xl">
          {" "}
          ویرایش{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-96 mt-20 mr-5">
          <div className="text-2xl mt-3 mr-3"> آخرین دوره ثبت شده </div>
          <div className="w-full h-1/5 mt-10 flex shadow-2xl">
            <div className="w-1/5 h-max my-auto mx-2">
              <img src="public/ang.png" alt="" />
            </div>
            <div className="w-4/5">
              <div className="mr-3 mt-1"> آموزش رایگان html </div>
              <div className="flex h-1/2 mt-1 justify-between">
                <div className="text-xs mt-4 mr-2 text-gray-400">
                  {" "}
                  دکتر بحرالعلوم{" "}
                </div>
                <div className="text-sm mt-4 ml-2 flex gap-1">
                  <div className="text-indigo-600">500000</div>
                  <div>تومان</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/5 mt-5 flex shadow-2xl">
            <div className="w-1/5 h-max my-auto mx-2">
              <img src="public/ang.png" alt="" />
            </div>
            <div className="w-4/5">
              <div className="mr-3 mt-1"> آموزش رایگان html </div>
              <div className="flex h-1/2 mt-1 justify-between">
                <div className="text-xs mt-4 mr-2 text-gray-400">
                  {" "}
                  دکتر بحرالعلوم{" "}
                </div>
                <div className="text-sm mt-4 ml-2 flex gap-1">
                  <div className="text-indigo-600">500000</div>
                  <div>تومان</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 mt-20 mr-5 ml-5">
          <div className="text-2xl mt-3 mr-3"> دوره های پیشنهادی </div>
          <div className="w-full h-1/5 mt-10 flex shadow-2xl">
            <div className="w-1/5 h-max my-auto mx-2">
              <img src="public/ang.png" alt="" />
            </div>
            <div className="w-4/5">
              <div className="mr-3 mt-1"> آموزش رایگان html </div>
              <div className="flex h-1/2 mt-1 justify-between">
                <div className="text-xs mt-4 mr-2 text-gray-400">
                  {" "}
                  دکتر بحرالعلوم{" "}
                </div>
                <div className="text-sm mt-4 ml-2 flex gap-1">
                  <div className="text-indigo-600">500000</div>
                  <div>تومان</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/5 mt-5 flex shadow-2xl">
            <div className="w-1/5 h-max my-auto mx-2">
              <img src="public/ang.png" alt="" />
            </div>
            <div className="w-4/5">
              <div className="mr-3 mt-1"> آموزش رایگان html </div>
              <div className="flex h-1/2 mt-1 justify-between">
                <div className="text-xs mt-4 mr-2 text-gray-400">
                  {" "}
                  دکتر بحرالعلوم{" "}
                </div>
                <div className="text-sm mt-4 ml-2 flex gap-1">
                  <div className="text-indigo-600">500000</div>
                  <div>تومان</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dashbord;