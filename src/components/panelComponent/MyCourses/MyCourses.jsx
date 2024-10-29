
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import picAngular from '../../../../public/ang.png'

const MyCourses = () => {
  const people = [
    { pic: picAngular, cname: 'نست جی اس', tname: 'استاد بحر', term: 'بهار', fdate: '1400/12/20', ldate: '1401/12/20', pay: '900000تومان' },
    { pic: picAngular, cname: 'نست جی اس', tname: 'استاد بحر', term: 'بهار', fdate: '1400/12/20', ldate: '1401/12/20', pay: '900000تومان' },
    { pic: picAngular, cname: 'نست جی اس', tname: 'استاد بحر', term: 'بهار', fdate: '1400/12/20', ldate: '1401/12/20', pay: '900000تومان' },
    { pic: picAngular, cname: 'نست جی اس', tname: 'استاد بحر', term: 'بهار', fdate: '1400/12/20', ldate: '1401/12/20', pay: '900000تومان' },
    { pic: picAngular, cname: 'نست جی اس', tname: 'استاد بحر', term: 'بهار', fdate: '1400/12/20', ldate: '1401/12/20', pay: '900000تومان' },
    // More people...
  ]
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <div className="h-min my-auto ml-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-5/6 mx-5 rounded-2xl mt-5">
          <div className="px-10 sm:px-6 lg:px-8">
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-indigo-700">
                  <tr>
                    <th></th>
                    <th scope="col" className="py-3.5 pr-7 pl-0 mr-10 text-right text-sm font-semibold text-white sm:pr-6">
                      نام دوره
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-right text-sm font-semibold text-white xl:table-cell "
                    >
                      نام استاد
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-right text-sm font-semibold text-white sm:table-cell"
                    >
                      نام ترم
                    </th>
                    <th scope="col" className="pl-24 pr-1 sm:pl-3 sm:pr-12 py-3.5 text-right text-sm font-semibold text-white xl:hidden ">
                      تاریخ
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-white hidden xl:table-cell ">
                      تاریخ شروع
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-white hidden xl:table-cell ">
                      تاریخ پایان
                    </th>
                    <th scope="col" className="hidden sm:table-cell px-3 py-3.5 text-right text-sm font-semibold text-white ">
                      قیمت
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-white ">
                      مدیریت
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-3 py-4 text-sm w-[80px] h-[40px]"><img src={person.pic} alt="" /></td>
                      <td className="w-full max-w-0 py-4 pr-4 pl-0 text-sm font-medium text-gray-900 dark:text-white sm:w-auto sm:max-w-none sm:pr-6">
                        {person.cname}
                        <dl className="font-normal xl:hidden">
                          <dt className="sr-only">Title</dt>
                          <dd className="mt-1 truncate text-gray-700">{person.tname}</dd>
                          <dt className="sr-only sm:hidden">Email</dt>
                          <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.term}</dd>
                          <dt className="sr-only sm:hidden">Email</dt>
                          <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.pay}</dd>
                        </dl>
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 xl:table-cell">{person.tname}</td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.term}</td>
                      <td className="w-full max-w-0 py-4 pr-2 pl-0 text-sm font-medium text-gray-500 sm:w-auto sm:max-w-none sm:pr-6">
                        {person.fdate}
                        <dl className="font-normal xl:hidden">
                          <dd className="mt-1 pl-10 truncate text-gray-500 xl:hidden">{person.ldate}</dd>
                        </dl>
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 xl:table-cell">{person.ldate}</td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.pay}</td>
                      <td className="py-5 pr-3 text-right font-medium sm:pr-6 flex gap-2">
                        <img className='w-6 my-auto' src="public/icons8-eye-48.png" alt="" />
                        <img className='w-6' src="public/icons8-trash-48.png" alt="" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCourses
