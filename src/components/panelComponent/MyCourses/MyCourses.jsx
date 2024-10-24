import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

function MyCourses() {
  return (
    <div>
      <div className="h-12 flex border-b border-b-slate-300">
        <div className="w-1/2">
          <div className="w-1/3 h-full">
            <div className="mt-2 w-max my-auto mr-5 h-min">دوره های من</div>
          </div>
        </div>
        <div className="w-1/2" dir="ltr">
          <div className="w-1/3 h-full flex ml-12">
            <div className="h-min my-auto cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <div className="h-min my-auto ml-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-16 mt-3 flex justify-between">
          <div className="h-4/6 w-1/3 mt-3 mr-3">
            <div className="mt-2 flex mr-1 px-2">
              <div className="text-gray-800 dark:text-white"> دوره های ثبت شده :  </div>
              <div className="px-1 text-gray-600"> 36 از 39 </div>
            </div>
          </div>
          <div className="h-4/6 w-1/3 mt-3 ml-3 bg-header-button dark:bg-[#1a1c1f] rounded-3xl flex justify-between">
            <div><input className="bg-header-button dark:bg-[#1a1c1f] mt-2 mr-2 outline-none" type="text" placeholder="جست و جو" /></div>
            <div className="w-8 h-8 mt-2 ml-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="75%" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-5/6 mx-5 rounded-2xl mt-5 bg-gray-100 dark:bg-[#1a1c1f]">
          <div className="h-16 flex justify-evenly ml-12">
            <div className="w-1/6 h-1/2 my-auto text-center mr-20"> نام دوره </div>
            <div className="w-1/6 h-1/2 my-auto text-center -mr-16"> نام استاد </div>
            <div className="w-1/6 h-1/2 my-auto text-center -mr-20"> نام ترم </div>
            <div className="w-1/6 h-1/2 my-auto text-center -mr-16"> تاریخ شروع </div>
            <div className="w-1/6 h-1/2 my-auto text-center -mr-16"> تاریخ پایان </div>
            <div className="w-1/6 h-1/2 my-auto text-center -mr-14"> قیمت </div>
          </div>
          <div className="h-5/6 w-full mt-3">
            <div className="h-14 rounded-2xl bg-white mx-3 mt-2 dark:bg-[#202224] flex gap-10">
              <div className="w-20 h-min my-auto mr-1"><img src="src/assets/image/nest.png" alt="" /></div>
              <div className="h-min my-auto"> تست جی اس </div>
              <div className="h-min my-auto mr-2"> استاد بحر </div>
              <div className="h-min my-auto mr-8"> بهار </div>
              <div className="h-min my-auto mr-4"> 1400/12/20 </div>
              <div className="h-min my-auto mr-5"> 1401/12/20 </div>
              <div className="h-min my-auto mr-2"> 900000 تومان </div>
              <div className="mr-2 w-10 h-min my-auto"><img src="src/assets/image/add.png" alt="" /></div>
            </div>
            <div className="h-14 rounded-2xl bg-white mx-3 mt-2 dark:bg-[#202224] flex gap-10">
              <div className="w-20 h-min my-auto mr-1"><img src="src/assets/image/nest.png" alt="" /></div>
              <div className="h-min my-auto"> تست جی اس </div>
              <div className="h-min my-auto mr-2"> استاد بحر </div>
              <div className="h-min my-auto mr-8"> بهار </div>
              <div className="h-min my-auto mr-4"> 1400/12/20 </div>
              <div className="h-min my-auto mr-5"> 1401/12/20 </div>
              <div className="h-min my-auto mr-2"> 900000 تومان </div>
              <div className="mr-2 w-10 h-min my-auto"><img src="src/assets/image/add.png" alt="" /></div>
            </div>
            <div className="h-14 rounded-2xl bg-white mx-3 mt-2 dark:bg-[#202224] flex gap-10">
              <div className="w-20 h-min my-auto mr-1"><img src="src/assets/image/nest.png" alt="" /></div>
              <div className="h-min my-auto"> تست جی اس </div>
              <div className="h-min my-auto mr-2"> استاد بحر </div>
              <div className="h-min my-auto mr-8"> بهار </div>
              <div className="h-min my-auto mr-4"> 1400/12/20 </div>
              <div className="h-min my-auto mr-5"> 1401/12/20 </div>
              <div className="h-min my-auto mr-2"> 900000 تومان </div>
              <div className="mr-2 w-10 h-min my-auto"><img src="src/assets/image/add.png" alt="" /></div>
            </div>
            <div className="h-14 rounded-2xl bg-white mx-3 mt-2 dark:bg-[#202224] flex gap-10">
              <div className="w-20 h-min my-auto mr-1"><img src="src/assets/image/nest.png" alt="" /></div>
              <div className="h-min my-auto"> تست جی اس </div>
              <div className="h-min my-auto mr-2"> استاد بحر </div>
              <div className="h-min my-auto mr-8"> بهار </div>
              <div className="h-min my-auto mr-4"> 1400/12/20 </div>
              <div className="h-min my-auto mr-5"> 1401/12/20 </div>
              <div className="h-min my-auto mr-2"> 900000 تومان </div>
              <div className="mr-2 w-10 h-min my-auto"><img src="src/assets/image/add.png" alt="" /></div>
            </div>
            <div className="h-14 rounded-2xl bg-white mx-3 mt-2 dark:bg-[#202224] flex gap-10">
              <div className="w-20 h-min my-auto mr-1"><img src="src/assets/image/nest.png" alt="" /></div>
              <div className="h-min my-auto"> تست جی اس </div>
              <div className="h-min my-auto mr-2"> استاد بحر </div>
              <div className="h-min my-auto mr-8"> بهار </div>
              <div className="h-min my-auto mr-4"> 1400/12/20 </div>
              <div className="h-min my-auto mr-5"> 1401/12/20 </div>
              <div className="h-min my-auto mr-2"> 900000 تومان </div>
              <div className="mr-2 w-10 h-min my-auto"><img src="src/assets/image/add.png" alt="" /></div>
            </div>
            <div className="h-14 rounded-2xl bg-white mx-3 mt-2 dark:bg-[#202224] flex gap-10">
              <div className="w-20 h-min my-auto mr-1"><img src="src/assets/image/nest.png" alt="" /></div>
              <div className="h-min my-auto"> تست جی اس </div>
              <div className="h-min my-auto mr-2"> استاد بحر </div>
              <div className="h-min my-auto mr-8"> بهار </div>
              <div className="h-min my-auto mr-4"> 1400/12/20 </div>
              <div className="h-min my-auto mr-5"> 1401/12/20 </div>
              <div className="h-min my-auto mr-2"> 900000 تومان </div>
              <div className="mr-2 w-10 h-min my-auto"><img src="src/assets/image/add.png" alt="" /></div>
            </div>
            <div className="h-14 rounded-2xl bg-white mx-3 mt-2 dark:bg-[#202224] flex gap-10">
              <div className="w-20 h-min my-auto mr-1"><img src="src/assets/image/nest.png" alt="" /></div>
              <div className="h-min my-auto"> تست جی اس </div>
              <div className="h-min my-auto mr-2"> استاد بحر </div>
              <div className="h-min my-auto mr-8"> بهار </div>
              <div className="h-min my-auto mr-4"> 1400/12/20 </div>
              <div className="h-min my-auto mr-5"> 1401/12/20 </div>
              <div className="h-min my-auto mr-2"> 900000 تومان </div>
              <div className="mr-2 w-10 h-min my-auto"><img src="src/assets/image/add.png" alt="" /></div>
            </div>
            <div dir="ltr" className="h-12 w-1/2 mx-auto mt-6">
              <Pagination
                className="mx-auto mt-2 w-max"
                count={10}
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCourses;
