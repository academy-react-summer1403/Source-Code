import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = ({ name, avatar, text, time, replies, commentId, onReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false); 
  const [replyText, setReplyText] = useState(''); 

  const handleReplySubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('ابتدا وارد حساب کاربری شوید.');
      return;
    }

    if (!replyText.trim()) {
      alert('لطفاً متن پاسخ را وارد کنید.');
      return;
    }

    try {
      const response = await axios.post(
        'https://classapi.sepehracademy.ir/api/News/CreateNewsReplyComment',
        {
          newsId: commentId, 
          parentId: commentId, 
          userIpAddress: '127.0.0.1', 
          title: 'پاسخ به کامنت', 
          describe: replyText, 
          userId: 123, 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setReplyText(''); 
        setShowReplyBox(false); 
        onReply(); 
      }
    } catch (error) {
      console.error('Error submitting reply:', error);
      alert('مشکلی در ارسال پاسخ به وجود آمد.');
    }
  };

  return (
    <div className="flex flex-col border-b border-gray-200 pb-4 mb-4">
      <div className="flex items-start flex-row-reverse">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full ml-4" />
        <div className="text-right w-[100%]">
          <div className="flex items-center justify-end">
            <span className="text-xs text-gray-500">{time}</span>
            <span className="font-semibold text-gray-800">{name}</span>
          </div>
          <p className="text-gray-600 mt-1">{text}</p>
          <div className="flex justify-end text-gray-700 text-sm mt-2">
            <div
              className="focus:outline-none cursor-pointer mr-2"
              onClick={() => setShowReplyBox(!showReplyBox)} 
            >
              پاسخ
            </div>
            <div className="focus:outline-none cursor-pointer">❤️</div>
          </div>
        </div>
      </div>
      {showReplyBox && (
        <div className="mt-4 mr-8">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="پاسخ خود را بنویسید..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleReplySubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              ارسال پاسخ
            </button>
          </div>
        </div>
      )}
      {replies && (
        <div className="mr-8 mt-4 space-y-4">
          {replies.map((reply, index) => (
            <Comment key={index} {...reply} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentsSection = ({ newsId }) => {
  const [comments, setComments] = useState([]); 
  const [visibleComments, setVisibleComments] = useState(3); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [newComment, setNewComment] = useState(''); 
  const [successMessage, setSuccessMessage] = useState(''); 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://classapi.sepehracademy.ir/api/News/${newsId}`);
        const formattedComments = await Promise.all(
          response.data.commentDtos.map(async (comment) => {
            const replies = await fetchReplies(comment.id); 
            return {
              name: comment.autor,
              avatar: comment.pictureAddress || 'https://via.placeholder.com/40',
              text: comment.describe,
              time: new Date(comment.inserDate).toLocaleDateString('fa-IR'),
              replies: replies || [], 
              commentId: comment.id, 
            };
          })
        );
        setComments(formattedComments);
      } catch (error) {
        setError('خطا در دریافت نظرات.');
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchReplies = async (commentId) => {
      try {
        const response = await axios.get(
          `https://classapi.sepehracademy.ir/api/News/GetRepliesComments?Id=${commentId}`
        );
        return response.data.map((reply) => ({
          name: reply.autor,
          avatar: reply.pictureAddress || 'https://via.placeholder.com/40',
          text: reply.describe,
          time: new Date(reply.inserDate).toLocaleDateString('fa-IR'),
        }));
      } catch (error) {
        console.error('Error fetching replies:', error);
        return [];
      }
    };

    fetchComments();
  }, [newsId]);

  const handleSubmitComment = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('ابتدا وارد حساب کاربری شوید.');
      return;
    }

    if (!newComment.trim()) {
      alert('لطفاً متن کامنت را وارد کنید.');
      return;
    }

    try {
      const response = await axios.post(
        'https://classapi.sepehracademy.ir/api/News/CreateNewsComment',
        {
          newsId,
          userIpAddress: '127.0.0.1',
          title: 'عنوان کامنت',
          describe: newComment,
          userId: 123,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('کامنت با موفقیت ارسال شد.');
        setTimeout(() => setSuccessMessage(''), 3000);
        setNewComment('');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('مشکلی در ارسال کامنت به وجود آمد.');
    }
  };

  const handleShowMore = () => {
    setVisibleComments(comments.length); 
  };

  if (loading) {
    return <p className="text-center text-gray-600">در حال بارگذاری نظرات...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl space-y-8 shadow-2xl mt-16 m-b-4">
      <h2 className="text-xl font-semibold text-gray-800 text-right">نظر کاربران درباره این مقاله</h2>
      <textarea
        placeholder="نظر خودتو بنویس..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
      />
      <div className="flex justify-center">
        <button
          onClick={handleSubmitComment}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none w-24 mx-auto"
        >
          ارسال
        </button>
      </div>
      {successMessage && (
        <p className="text-center text-green-600 font-semibold">{successMessage}</p>
      )}
      <div className="space-y-8">
        {comments.slice(0, visibleComments).map((comment, index) => (
          <Comment key={index} {...comment} onReply={() => setLoading(true)} />
        ))}
      </div>
      {visibleComments < comments.length && (
        <div
          className="text-gray-700 cursor-pointer text-right"
          onClick={handleShowMore}
        >
          مشاهده {comments.length - visibleComments} نظر دیگر
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
