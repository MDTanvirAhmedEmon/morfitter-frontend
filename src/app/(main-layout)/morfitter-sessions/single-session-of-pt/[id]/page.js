"use client";
import SingleSessionSkeleton from '@/components/Skeleton/SingleSessionSkeleton';
import { useCheckEnrollmentMutation, useGetSingleSessionQuery, useMarkVideoMutation } from '@/redux/features/session/sessionApi';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BiCheck } from "react-icons/bi";
import { message, Spin, Tooltip, Typography } from 'antd';
import GiveReview from '@/components/Sessions/GiveReview';
import Title from 'antd/es/typography/Title';
import { CheckCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;

const BASE_URL = "";

const SingleSessionOfPt = () => {
    const { id } = useParams();
    const router = useRouter();
    // const [ videoId, setVideoId ] = useState(null)
    const { role } = useSelector((state) => state.auth);

    const [checkEnrollment, { data: checkedData }] = useCheckEnrollmentMutation();
    useEffect(() => {
        if (id && role?.id) {
            checkEnrollment({ session_id: id, user_id: role.id }).unwrap()
                .then((data) => {
                    !data?.data?.enrolled &&
                        router.push(`/`)
                })
        }
    }, []);

    console.log('cheked data', checkedData?.data?.result?.sessionCompleted);

    const { data, isLoading, error } = useGetSingleSessionQuery(id);

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
    const [markVideo, { isLoading: markLoading }] = useMarkVideoMutation();
    const handleMarkVideo = (videoId) => {
        const data = {
            session_id: id,
            user_id: role?.id,
            video_id: videoId
        }
        markVideo(data).unwrap()
            .then(() => {
                message.success('Mark As Complete')
            })
            .catch((error) => {
                message.success(error?.data?.message)
            })
    }

    if (isLoading) return <SingleSessionSkeleton></SingleSessionSkeleton>;
    if (error) return <p className="text-center text-red-500">Failed to load session data</p>;
    if (videoTutorials.length === 0) return <p className="text-center text-gray-500 py-44 md:text-2xl">No recorded content available</p>;



    return (
        <div>
            <div className="container mx-auto py-5 md:py-14 px-3 md:px-2 flex flex-col md:flex-row gap-6">
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
                    {

                    }
                </div>

                <div className="w-full md:flex-1 bg-gray-50 shadow-md rounded-lg p-4">
                    <video
                        key={videoTutorials[currentVideoIndex]?.url}
                        controls
                        className="w-full rounded-md shadow-lg mb-4"
                        src={videoTutorials[currentVideoIndex]?.url}
                    />
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-2">{videoTutorials[currentVideoIndex]?.title}</h2>
                            <p className="text-gray-600 mb-4">{videoTutorials[currentVideoIndex]?.description || "No description available."}</p>
                        </div>
                        {
                            videoTutorials[currentVideoIndex]?.completed ?
                                <Tooltip title="Completed">
                                    <span
                                        disabled
                                        className={`px-[10px] py-[5px] rounded-md  bg-gray-400 text-white`}
                                    >
                                        Completed
                                    </span>
                                </Tooltip>
                                :
                                <Tooltip title="Mark As Complete">
                                    <button
                                        disabled={markLoading}
                                        className={`px-[1px] py-[1px] rounded-md  bg-primary text-white flex items-center gap-1`}

                                        onClick={() => handleMarkVideo(videoTutorials[currentVideoIndex]?._id)}
                                    >
                                        <BiCheck className=' w-8 h-8' />
                                        {markLoading && <Spin></Spin>}
                                    </button>
                                </Tooltip>
                        }


                    </div>

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
            {
                checkedData?.data?.result?.sessionCompleted &&
                <div className=' mx-4 md:container md:mx-auto pb-14'>
                    <div className="text-center">
                        <CheckCircleOutlined style={{ fontSize: "50px", color: "#e26972" }} />
                        <Title level={4} style={{ color: "#572c57", marginTop: "10px" }}>
                            Session Completed Successfully!
                        </Title>
                        <Text style={{ color: "#333" }}>Thank you for attending. Your feedback matters!</Text>
                    </div>
                    <GiveReview id={id}></GiveReview>
                </div>

            }
        </div>
    );
};

export default SingleSessionOfPt;
