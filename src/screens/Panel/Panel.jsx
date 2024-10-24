import React, { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
// import { Login } from "@mui/icons-material";
import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import Dashbord from "../../components/panelComponent/Dashbord/Dashbord";
import EditProfile from "../../components/panelComponent/EditProfile/EditProfile";
import CheangePass from "../../components/panelComponent/CheagePass/CheangePass";
import MyCourses from "../../components/panelComponent/MyCourses/MyCourses";

function Panel() {
  const [count, setCount] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-indigo-50 h-fit">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="-translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      {/* <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      /> */}
                    </button>
                  </div>
                </Transition.Child>
                <div className="bg- h-0 px-2 flex-1 overflow-y-auto pt-5 pb-4 text-asBlack-300 bg-indigo-50">
                  <div className="flex flex-shrink-0 items-center px-4"></div>
                  <div className="py-12 z-40 mx-auto xl:h-screen xl:w-80 rounded-lg shadow-xl my-10 relative bg-gradient-to-b from-indigo-500 to-indigo-800">
                    <svg
                      className="text-white -mt-4 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      // class="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                    <div className="mt-2 pb-2 w-[90%] h-24">
                      <div className="w-[40%] mx-auto">
                        <div className="w-min h-min">
                          <div className="w-min h-min my-auto xl:mt-2 mx-[35%]">
                            <Avatar
                              sx={{ width: 80, height: 80 }}
                              alt="Zahradar"
                              src="src/assets/image/avataricon.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 mx-auto">
                        <div className="text-white font-thin text-xl text-center mt-3">
                          {" "}
                          بیتا قنبری{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        (count === 1 ? "bg-indigo-700" : "") +
                        " mt-10 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                      }
                    >
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        class="bi bi-house-door-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                      </svg>
                      <div
                        onClick={() => setCount(1)}
                        className={" mr-2 cursor-pointer"}
                      >
                        {" "}
                        پیشخوان{" "}
                      </div>
                    </div>
                    <div
                      className={
                        (count === 2 ? "bg-indigo-700" : "") +
                        " mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                      }
                    >
                      <svg
                        className="mt-2 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <div
                        onClick={() => setCount(2)}
                        className="mr-2 cursor-pointer"
                      >
                        {" "}
                        ویرایش پروفایل{" "}
                      </div>
                    </div>
                    <div
                      className={
                        (count === 4 ? "bg-indigo-700" : "") +
                        " mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        class="bi bi-key-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                      <div
                        onClick={() => setCount(4)}
                        className="mr-2 cursor-pointer"
                      >
                        {" "}
                        تغییر رمز عبور{" "}
                      </div>
                    </div>
                    <div
                      className={
                        (count === 3 ? "bg-indigo-700" : "") +
                        " mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                      }
                    >
                      <svg
                        className="mr-2 mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                      </svg>
                      <div
                        onClick={() => setCount(3)}
                        className="mr-2 cursor-pointer"
                      >
                        {" "}
                        دوره های من{" "}
                      </div>
                    </div>
                    <div className="mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2">
                      <svg
                        className="mr-2 mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                        />
                      </svg>
                      <div className="mr-2"> خروج </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="flex  mx-auto w-min text-asBlack-300">
        <div className="hidden lg:inset-y-0 lg:block lg:w-64 mx-10">
          <div>
            <div className="flex-col lg:col-span-4 overflow-y-auto ">
              <div className=" border border-lastCoursesBorder lg:h-[500px] xl:h-[700px] bg-gradient-to-b from-indigo-500 to-indigo-800 rounded-lg shadow-xl my-10">
                <div>
                  {" "}
                  <svg
                    className="text-white mt-3 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    // class="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                </div>
                <div className="mt-2 pb-2 w-[90%] mx-auto border-b border-zinc-400">
                  <div className="w-[40%] mx-auto">
                    <div className="h-min w-min">
                      <div className="h-min w-min my-auto xl:mt-2">
                        <Avatar
                          sx={{ width: 80, height: 80 }}
                          alt="Zahradar"
                          src="src/assets/image/avataricon.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 mx-auto">
                    <div className="text-white font-thin text-xl text-center mt-3 -mr-3">
                      {" "}
                      بیتا قنبری{" "}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    (count === 1 ? "bg-indigo-700" : "") +
                    " mt-10 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                  }
                >
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    class="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                  <div
                    onClick={() => setCount(1)}
                    className={" mr-2 cursor-pointer"}
                  >
                    {" "}
                    داشبرد{" "}
                  </div>
                </div>
                <div
                  className={
                    (count === 2 ? "bg-indigo-700" : "") +
                    " mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                  }
                >
                  <svg
                    className="mt-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  <div
                    onClick={() => setCount(2)}
                    className="mr-2 cursor-pointer"
                  >
                    {" "}
                    ویرایش پروفایل{" "}
                  </div>
                </div>
                <div
                  className={
                    (count === 4 ? "bg-indigo-700" : "") +
                    " mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    class="bi bi-key-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <div
                    onClick={() => setCount(4)}
                    className="mr-2 cursor-pointer"
                  >
                    {" "}
                    تغییر رمز عبور{" "}
                  </div>
                </div>
                <div
                  className={
                    (count === 3 ? "bg-indigo-700" : "") +
                    " mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2"
                  }
                >
                  <svg
                    className="mr-2 mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                  <div
                    onClick={() => setCount(3)}
                    className="mr-2 cursor-pointer"
                  >
                    {" "}
                    دوره های من{" "}
                  </div>
                </div>
                <div className="mt-3 mx-auto rounded-md text-white w-[90%] h-10 flex pr-5 pt-2">
                  <svg
                    className="mr-2 mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                    />
                  </svg>
                  <div className="mr-2"> خروج </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className=" top-0 z-10 border-lastCoursesBorder rounded-2xl shadow-xl mx-5 my-4 border pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <span className="sr-only">Open sidebar</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="z-30 lg:w-[900px] bg-white pb-10 w-screen border lg:ml-10 mx-auto lg:my-10 rounded-2xl shadow-xl">
            {count === 1 && <Dashbord />}
            {count === 2 && <EditProfile />}
            {count === 3 && <MyCourses />}
            {count === 4 && <CheangePass />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
