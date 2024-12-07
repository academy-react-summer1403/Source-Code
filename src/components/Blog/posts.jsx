/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogsList = ({ selectedFilter, searchTerm }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [totalPages, setTotalPages] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://classapi.sepehracademy.ir/api/News?PageNumber=1&RowsOfPage=1000&SortingCol=InsertDate&SortType=DESC`);
        if (Array.isArray(response.data.news)) {
          setPosts(response.data.news);
          setTotalPages(Math.ceil(response.data.totalCount / postsPerPage));
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const lowercasedQuery = searchTerm.toLowerCase();
      const filtered = posts.filter((post) => {
        return (
          post.title && post.title.toLowerCase().includes(lowercasedQuery) ||
          post.miniDescribe && post.miniDescribe.toLowerCase().includes(lowercasedQuery)
        );
      });
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setTotalPages(Math.ceil(posts.length / postsPerPage));
    } else {
      setTotalPages(Math.ceil(filteredPosts.length / postsPerPage));
    }
  }, [searchTerm, posts, filteredPosts, postsPerPage]);

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (selectedFilter === 'جدیدترین‌ها') {
      return new Date(b.insertDate) - new Date(a.insertDate);
    } else if (selectedFilter === 'محبوب‌ترین‌ها') {
      return b.currentLikeCount - a.currentLikeCount;
    } else if (selectedFilter === 'پربازدیدترین‌ها') {
      return b.currentViewCount - a.currentViewCount;
    } else if (selectedFilter === 'همه') {
      return a.id - b.id;
    }
    return 0;
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-center text-2xl font-bold mb-6">لیست بلاگ‌ها</h1>

      {loading ? (
        <p className="text-center text-gray-600">در حال دریافت اطلاعات...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={post.currentImageAddressTumb ? post.currentImageAddressTumb : "/placeholder-image.png"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-bold text-gray-800">
                    <Link to={`/blogdetail/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mt-2">{post.miniDescribe}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-500 text-sm">تاریخ: {new Date(post.insertDate).toLocaleDateString('fa-IR')}</span>
                    <span className="text-blue-500 text-sm">دسته‌بندی: {post.newsCatregoryName}</span>
                    <span className="text-blue-500 text-sm">لایک‌ها: {post.currentLikeCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center mt-8 w-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-md mx-1 ${
                    currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogsList;
