import React, { useState } from 'react';

const BlogsFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState('همه');

    const filters = ['محبوب‌ترین‌ها', 'پربازدیدترین‌ها', 'جدیدترین‌ها', 'همه'];

    return (
        <div dir='ltr' className="holder flex justify-center">
            <div className="items-center bg-white p-4 rounded-lg mt-4  flex justify-self-center  justify-center justify-items-center">

                <div className="flex space-x-4 bg-white shadow-2xl p-2 rounded-md">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-4 py-2 rounded-md ${selectedFilter === filter
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-700'
                                } focus:outline-none`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center rounded-md ml-2 overflow-hidden w-1/2">
                {/* <button className="px-4 text-gray-500 bg-transparent w-8 justify-center flex">
                    🔍
                </button>
                <input
                    type="text"
                    placeholder="دنبال چی می‌گردی"
                    className="w-full px-4 py-2 text-gray-700 focus:outline-none border-none drop-shadow-xl"
                    style={{ borderRadius: '5px' }}
                /> */}
                <div className="h-1/2 my-auto w-11/12 flex" dir='rtl'>
                    <input
                        className="w-full rounded-2xl text-xs py-3 pr-2"
                        type="text"
                        placeholder="دنبال چی می‌گردی ؟"
                    />
                    <svg
                        className="-mr-7 my-auto"
                        width="19"
                        height="20"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.4"
                            d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                            fill="#2196F3"
                        />
                        <path
                            d="M21.3001 22.5001C21.1201 22.5001 20.9401 22.4301 20.8101 22.3001L18.9501 20.4401C18.6801 20.1701 18.6801 19.7301 18.9501 19.4501C19.2201 19.1801 19.6601 19.1801 19.9401 19.4501L21.8001 21.3101C22.0701 21.5801 22.0701 22.0201 21.8001 22.3001C21.6601 22.4301 21.4801 22.5001 21.3001 22.5001Z"
                            fill="#2196F3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BlogsFilter;
