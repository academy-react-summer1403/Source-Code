import React from 'react';

const posts = [
  {
    id: 1,
    title: "تست تیتر تست تیتر",
    summary: "تست تست تست تست تست تست تست تست تست تست تست تست تست تست",
    views: 1234,
    date: "1402/01/12",
    image: "/images/post1.png",
  },
  {
    id: 2,
    title: "تست تیتر تست تیتر",
    summary: "تست تست تست تست تست تست تست تست تست تست تست تست تست تست",
    views: 985,
    date: "1402/02/22",
    image: "/images/post2.png",
  },
  {
    id: 3,
    title: "تست تیتر تست تیتر",
    summary: "تست تست تست تست تست تست تست تست تست تست تست تست تست تست",
    views: 234,
    date: "1402/03/03",
    image: "/images/post3.png",
  },
];

const BlogsList = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.summary}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-500 text-sm">تاریخ: {post.date}</span>
                <span className="text-blue-500 text-sm">بازدید: {post.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-md text-sm w-[2%]">1</button>
      </div>
    </div>
  );
};

export default BlogsList;
