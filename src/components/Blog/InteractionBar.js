import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaStar } from 'react-icons/fa';
import axios from 'axios';

const InteractionBar = ({ newsId }) => {
    const [rating, setRating] = useState(0);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [currentRate, setCurrentRate] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);

    useEffect(() => {
        const fetchInteractionData = async () => {
            try {
                const response = await axios.get(`https://classapi.sepehracademy.ir/api/News/${newsId}`);
                const { currentLikeCount, currentDissLikeCount, currentRate, inUsersFavoriteCount } = response.data.detailsNewsDto;
                setLikes(currentLikeCount);
                setDislikes(currentDissLikeCount);
                setCurrentRate(currentRate);
                setFavoriteCount(inUsersFavoriteCount);
            } catch (error) {
                console.error('Error fetching interaction data:', error);
            }
        };

        fetchInteractionData();
    }, [newsId]);

    const handleLike = async () => {
        try {
            await axios.post(`https://classapi.sepehracademy.ir/api/News/NewsLike/${newsId}`);
            setLikes((prevLikes) => prevLikes + 1);
        } catch (error) {
            console.error('Error sending like:', error);
        }
    };

    const handleDislike = async () => {
        try {
            await axios.post(`https://classapi.sepehracademy.ir/api/News/NewsDissLike/${newsId}`);
            setDislikes((prevDislikes) => prevDislikes + 1);
        } catch (error) {
            console.error('Error sending dislike:', error);
        }
    };

    const handleRating = (index) => {
        setRating(index + 1);
        console.log(`Rated ${index + 1} stars`);
    };

    return (
        <div className="w-7/12 mx-auto mt-8 space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
                <div className="flex space-x-4 text-gray-500">
                    <FaInstagram className="cursor-pointer hover:text-blue-500 transition-colors" />
                    <FaTwitter className="cursor-pointer hover:text-blue-500 transition-colors" />
                    <FaFacebook className="cursor-pointer hover:text-blue-500 transition-colors" />
                </div>
                {/* <div className="flex items-center text-gray-600">
                    <span>اشتراک‌ گذاری</span>
                </div> */}
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-gray-600">
                    <div className="flex items-center bg-gray-200 rounded-3xl w-[70px]">
                        <button
                            className="flex items-center justify-center w-10 h-10 bg-transparent focus:outline-none"
                            onClick={handleLike}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997" stroke="#263238" strokeWidth="1.5" strokeMiterlimit="10" />
                                <path d="M2.37988 18.3499V8.5499C2.37988 7.1499 2.97988 6.6499 4.37988 6.6499H5.37988C6.77988 6.6499 7.37988 7.1499 7.37988 8.5499V18.3499C7.37988 19.7499 6.77988 20.2499 5.37988 20.2499H4.37988C2.97988 20.2499 2.37988 19.7499 2.37988 18.3499Z" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className="ml-1">{likes}</span>
                    </div>
                    <div className="flex items-center bg-gray-200 rounded-3xl w-[70px]">
                        <button
                            className="flex items-center justify-center w-10 h-10 bg-transparent focus:outline-none"
                            onClick={handleDislike}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5197 5.6499L13.4197 3.2499C13.0197 2.8499 12.1197 2.6499 11.5197 2.6499H7.71973C6.51973 2.6499 5.21973 3.5499 4.91973 4.7499L2.51973 12.0499C2.01973 13.4499 2.91973 14.6499 4.41973 14.6499H8.41973C9.01973 14.6499 9.51973 15.1499 9.41973 15.8499L8.91973 19.0499C8.71973 19.9499 9.31973 20.9499 10.2197 21.2499C11.0197 21.5499 12.0197 21.1499 12.4197 20.5499L16.5197 14.4499" stroke="#263238" strokeWidth="1.5" strokeMiterlimit="10" />
                                <path d="M21.6201 5.65V15.45C21.6201 16.85 21.0201 17.35 19.6201 17.35H18.6201C17.2201 17.35 16.6201 16.85 16.6201 15.45V5.65C16.6201 4.25 17.2201 3.75 18.6201 3.75H19.6201C21.0201 3.75 21.6201 4.25 21.6201 5.65Z" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className="ml-1">{dislikes}</span>
                    </div>
                    <span className="text-gray-600 ml-2">آیا از این مقاله راضی بودید؟</span>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-blue-500 text-white transition-colors text-sm w-[90px] rounded-2xl">
                        ثبت دیدگاه
                    </button>
                    <div className="flex items-center">
                        <span className="text-gray-600 ml-2">امتیاز: {favoriteCount} نفر</span>
                        <div className="flex ml-2">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={`cursor-pointer transition-colors ${
                                        index < currentRate ? 'text-yellow-500' : 'text-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractionBar;
