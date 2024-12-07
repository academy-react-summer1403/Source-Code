import React, { useState } from 'react';

const FilterBar = ({ onSelectFilter, onSearch }) => {
  const [selectedFilter, setSelectedFilter] = useState('همه');
  const filters = ['همه', 'محبوب‌ترین‌ها', 'پربازدیدترین‌ها', 'جدیدترین‌ها'];

  const handleSearchChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div className="holder flex justify-center">
      <div className="flex items-center bg-white p-4 rounded-lg mt-4 w-[30%] justify-center">
        <div className="flex space-x-4 bg-white shadow-2xl p-2 rounded-md"> 
          {filters?.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                onSelectFilter(filter); 
              }}
              className={`px-4 py-2 rounded-md ${
                selectedFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              } focus:outline-none`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center rounded-md overflow-hidden w-1/2 mt-4">
        <button className="px-4 text-gray-500 bg-transparent w-8 flex justify-center">
          🔍
        </button>
        <input
          type="text"
          placeholder="دنبال چی می‌گردی"
          onChange={handleSearchChange} 
          className="w-full px-4 py-2 text-gray-700 focus:outline-none border-none drop-shadow-xl"
          style={{ borderRadius: '5px' }}
        />
      </div>
    </div>
  );
};

export default FilterBar;
