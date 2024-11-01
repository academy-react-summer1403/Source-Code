import React, { useState } from 'react';

const SortFilter = () => {
    const [sortOption, setSortOption] = useState('popular');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div className="">
            <select
                id="sort-options"
                value={sortOption}
                onChange={handleSortChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="popular">محبوب‌ترین</option>
                <option value="expensive">گران‌ترین</option>
                <option value="cheap">ارزان‌ترین</option>
            </select>
        </div>
    );
};

export default SortFilter