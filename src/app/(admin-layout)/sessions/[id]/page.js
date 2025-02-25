"use client";
import SingleSessionSkeleton from '@/components/Skeleton/SingleSessionSkeleton';
import { useGetSingleSessionQuery, useGetTotalEntrolledUserSessionQuery } from '@/redux/features/session/sessionApi';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import profileImage from '../../../../assets/profile/profile_image.webp'

const BASE_URL = "";

const SingleSession = () => {
    const { id } = useParams();
    const { data: allEntrolledUser } = useGetTotalEntrolledUserSessionQuery(id);


    const { data, isLoading, error } = useGetSingleSessionQuery(id);
    console.log(data);

    const videoTutorials = data?.data?.recordedContent?.map(video => ({
        ...video,
        url: video.url.startsWith("/uploads") ? `${BASE_URL}${video.url}` : video.url
    })) || [];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        if (videoTutorials.length > 0 && currentVideoIndex === -1) {
            setCurrentVideoIndex(0);
        }
    }, [videoTutorials, currentVideoIndex]);

    const handleNext = () => {
        setCurrentVideoIndex((prev) => Math.min(prev + 1, videoTutorials.length - 1));
    };

    const handlePrevious = () => {
        setCurrentVideoIndex((prev) => Math.max(prev - 1, 0));
    };

    if (isLoading) return <SingleSessionSkeleton></SingleSessionSkeleton>;
    if (error) return <p className="text-center text-red-500">Failed to load session data</p>;
    if (videoTutorials.length === 0) return <p className="text-center text-gray-500 py-44 md:text-2xl">No recorded content available</p>;



    return (
        <div>
            <div className=" py-3 flex flex-col md:flex-row gap-6">
                {/* Sidebar with Video List */}
                <div className="w-full md:w-1/4 bg-gray-100 shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">Video List</h3>
                    <ul className="space-y-2">
                        {videoTutorials.map((tutorial, index) => (
                            <li
                                key={tutorial._id}
                                className={`p-2 rounded-md cursor-pointer ${index === currentVideoIndex ? "bg-primary text-white" : "bg-gray-200 text-black"
                                    }`}
                                onClick={() => setCurrentVideoIndex(index)}
                            >
                                {index + 1}. {tutorial.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:flex-1 bg-gray-50 shadow-md rounded-lg p-4">
                    <video
                        key={videoTutorials[currentVideoIndex]?.url}
                        controls
                        className="w-full rounded-md shadow-lg mb-4"
                        src={videoTutorials[currentVideoIndex]?.url}
                    />
                    <h2 className="text-2xl font-bold mb-2">{videoTutorials[currentVideoIndex]?.title}</h2>
                    <p className="text-gray-600 mb-4">{videoTutorials[currentVideoIndex]?.description || "No description available."}</p>
                    <div className="flex justify-between">
                        <button
                            className={`px-4 py-2 rounded-md ${currentVideoIndex > 0 ? "bg-primary text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                }`}
                            onClick={handlePrevious}
                            disabled={currentVideoIndex === 0}
                        >
                            Previous
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${currentVideoIndex < videoTutorials.length - 1 ? "bg-primary text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                }`}
                            onClick={handleNext}
                            disabled={currentVideoIndex === videoTutorials.length - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <h2 className='text-xl py-5'>Enrolled User List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {allEntrolledUser?.data?.map((user) => (
                    <div
                        key={user?._id}
                        className="bg-white shadow-lg rounded-lg p-5 "
                    >

                        <div className="flex items-center space-x-4">
                            <Image
                                src={user?.additionalInfo?.profileImageUrl
                                    ? `${user?.additionalInfo?.profileImageUrl}`
                                    : profileImage}
                                alt="Profile"
                                width={300}
                                height={300}
                                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                            />
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 capitalize">
                                    <Link href={`/view-user-profile/?trainee=${user?.additionalInfo?._id}&userId=${user?.user_id}`}> {user?.additionalInfo?.firstName} {user?.additionalInfo?.lastName}</Link>
                                </h2>
                                <p className="text-sm text-gray-600 capitalize">{user?.additionalInfo?.country}</p>
                            </div>
                        </div>


                        <div className="mt-4 flex space-x-3">
                            {user?.additionalInfo?.Facebook && (
                                <Link
                                    href={user?.additionalInfo?.Facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    <i className="fab fa-twitter text-xl">Facebook</i>
                                </Link>
                            )}
                            {user?.additionalInfo?.Instagram && (
                                <Link
                                    href={user?.additionalInfo?.Instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-500 hover:text-pink-600"
                                >
                                    <i className="fab fa-instagram text-xl">Instagram</i>
                                </Link>
                            )}
                            {user?.additionalInfo?.Youtube && (
                                <Link
                                    href={user?.additionalInfo?.Youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:text-red-600"
                                >
                                    <i className="fab fa-youtube text-xl">Youtube</i>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleSession;
