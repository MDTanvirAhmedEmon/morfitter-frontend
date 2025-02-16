"use client";
import AddSessionContentModal from "@/components/TrainerProfile/AddSessionContentModal";
import { useDeletSessionVideoMutation, useDeletWholeSessionMutation, useGetSingleSessionQuery } from "@/redux/features/session/sessionApi";
import { message, Popconfirm } from "antd";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const BASE_URL = "http://10.0.60.166:5000";

const SingleSession = () => {
    const { id } = useParams();
    const router = useRouter();
    const { data } = useGetSingleSessionQuery(id);
    const session = data?.data;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [deletSessionVideo] = useDeletSessionVideoMutation();
    const [deletWholeSession, { isLoading }] = useDeletWholeSessionMutation();
    const confirm = (content) => {
        const data = {
            sessionId: id,
            contentId: content?._id
        }
        deletSessionVideo(data).unwrap()
            .then(() => {
                message.success('Deleted Successfully')
            })
            .catch((error) => {
                message.error(error?.data?.message)
            })
    };

    const handleDeleteSession = () => {
        deletWholeSession(id).unwrap()
            .then(() => {
                message.success('Session deleted successfully')
                router.push(`/trainer-profile`)
            })
            .catch((error) => {
                message.error(error?.data?.message)
            })
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12 space-y-10">

                <div className="flex flex-col md:flex-row gap-6 ">

                    {session?.promo_video && (
                        <div className="w-full md:w-[60%]">
                            <h2 className="text-xl font-semibold mb-3">Promo Video</h2>
                            <video controls className="w-full rounded-lg shadow-md" src={`${BASE_URL}${session.promo_video}`}>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    {session?.promo_image && (
                        <div className="w-full md:w-[40%]">
                            <h2 className="text-xl font-semibold mb-3">Promo Image</h2>
                            <Image
                                src={`${BASE_URL}${session.promo_image}`}
                                width={500}
                                height={300}
                                alt="Promo Image"
                                className="w-full h-auto lg:h-[500px] object-cover rounded-lg shadow-md"
                            />
                        </div>
                    )}
                </div>

                <div className="border p-6 rounded-lg shadow-md bg-gray-100">
                    <h1 className="text-3xl font-bold text-gray-900">{session?.title}</h1>
                    <div className="grid md:grid-cols-2 gap-4 mt-4 text-gray-700">
                        <p><strong>Session Type:</strong> {session?.sessionType}</p>
                        <p><strong>Fitness Focus:</strong> {session?.fitnessFocus}</p>
                        <p><strong>Access Type:</strong> {session?.accessType}</p>
                        <p><strong>Frequency:</strong> {session?.frequency}</p>
                        <p><strong>Membership Fee:</strong> ${session?.membership_fee}</p>
                    </div>
                </div>

                <AddSessionContentModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} id={id}></AddSessionContentModal>
                <div>
                    <div className=" flex justify-between items-center mb-5">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recorded Content</h2>
                        <button className=" bg-secondary text-white px-4 py-2 rounded-md" onClick={showModal}>Add Content</button>
                    </div>


                    {session?.recordedContent.length > 0 && (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                            {session.recordedContent.map((content, index) => (
                                <div key={content._id} className="border p-4 rounded-lg shadow-md bg-gray-50">
                                    <div className=" flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg font-semibold text-teal-600">{index + 1}. {content.title}</h3>
                                            <p className="text-gray-600">⏳ Duration: {content.duration}</p>
                                        </div>
                                        <Popconfirm
                                            title="Delete the video"
                                            description="Are you sure to delete this video?"
                                            onConfirm={() => confirm(content)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <button className=" bg-red-600 px-2 py-1 text-white rounded">Delete</button>
                                        </Popconfirm>

                                    </div>


                                    <video controls className="w-full mt-3 rounded-lg" src={`${BASE_URL}${content.url}`}>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className=" flex justify-end">
                    <Popconfirm
                        title="Delete the session"
                        description="Are you sure to delete this session?"
                        onConfirm={handleDeleteSession}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className=" bg-red-600 px-2 py-1 text-white rounded">Delete Whole Session</button>
                    </Popconfirm>
                </div>

            </div>
        </div>
    );
};

export default SingleSession;
