import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentsSection from './CommentsSection'; 
import InteractionBar from './InteractionBar'; 


const BlogDetail = () => {
  const { id } = useParams(); 
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`https://classapi.sepehracademy.ir/api/News/${id}`);
        setPostDetails(response.data.detailsNewsDto); 
      } catch (error) {
        setError('مقاله مورد نظر یافت نشد!');
        console.error('Error fetching post details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-8 bg-white rounded-xl">
      <div className="flex space-x-6">
        <div className="w-2/3 flex flex-col justify-between text-right">
          <div>
            <h1 className="text-3xl font-bold leading-tight mb-4">
              {postDetails?.title}
            </h1>
            <p className="text-gray-600">
              {postDetails?.miniDescribe}
            </p>
          </div>
          <div className="flex items-center justify-between text-blue-500 text-sm mt-4">
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-md">
              <img
                src={postDetails?.addUserProfileImage || 'https://via.placeholder.com/50'}
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-gray-800 font-medium">{postDetails?.addUserFullName}</span>
            </div>
            <div className="flex space-x-4">
              <span>{new Date(postDetails?.insertDate).toLocaleDateString('fa-IR')}</span>
              <span>{postDetails.currentView} بازدید</span>
            </div>
          </div>
        </div>
        <div className="w-1/3 relative">
          <img
            src={postDetails?.currentImageAddressTumb || 'https://via.placeholder.com/400x300'}
            alt="Blog"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-2">
            <span className="text-red-500 text-lg">❤️</span>
            <span className="text-gray-700 font-medium">{postDetails?.currentLikeCount}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 w-7/12 mx-auto text-right">
        <h2 className="text-2xl font-semibold mb-4">متن کامل خبر</h2>
        <div className="text-gray-600 mb-4">{postDetails?.describe}</div>
      </div>
      <InteractionBar newsId={id} />

      <CommentsSection newsId={id} />
    </div>
  );
};

export default BlogDetail;
