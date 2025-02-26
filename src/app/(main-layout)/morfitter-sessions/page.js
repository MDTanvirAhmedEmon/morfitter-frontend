"use client"
import { Input, Pagination, Select } from 'antd';
import Image from 'next/image';
import { useGetAllSessionQuery } from '@/redux/features/session/sessionApi';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import SessionSkeleton from '@/components/Skeleton/SessionSkeleton';
import EnrollModal from '@/components/Sessions/EnrollModal';

const MorfitterSessions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sessionType, setSessionType] = useState(null);
    const [specialism, setSpecialism] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
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

    const { data, isLoading } = useGetAllSessionQuery({
        page: currentPage,
        sessionType: sessionType || undefined,
        fitnessFocus: specialism || undefined,
        searchTerm: searchTerm || undefined,
    })

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <div className=' px-3 md:container md:mx-auto py-10 md:py-16'>
                <div className=' flex flex-col md:flex-row justify-between items-center'>
                    <div className=' w-full flex flex-col md:flex-row gap-6'>
                        <Select
                            value={sessionType}
                            onChange={setSessionType}
                            className=' md:w-[190px]' placeholder={<p className=" text-lg">Live Or Recorded?</p>}>
                            <Select.Option value="live_group">Live</Select.Option>
                            <Select.Option value="recorded">Recorded</Select.Option>
                            <Select.Option value="">All</Select.Option>
                        </Select>
                        <Select
                            value={specialism}
                            onChange={setSpecialism}
                            className="md:w-[190px]" placeholder={<p className="text-lg">specialism</p>}>
                            <Select.Option value="Ab Workouts">Ab Workouts</Select.Option>
                            <Select.Option value="Anaerobic exercise">Anaerobic exercise</Select.Option>
                            <Select.Option value="Boxercise">Boxercise</Select.Option>
                            <Select.Option value="Calisthenics">Calisthenics</Select.Option>
                            <Select.Option value="Circuits">Circuits</Select.Option>
                            <Select.Option value="Core Strength">Core Strength</Select.Option>
                            <Select.Option value="Fat Burners">Fat Burners</Select.Option>
                            <Select.Option value="Flexibility & Mobility">Flexibility & Mobility</Select.Option>
                            <Select.Option value="HIIT">HIIT</Select.Option>
                            <Select.Option value="Nutritionist">Nutritionist</Select.Option>
                            <Select.Option value="Pilates">Pilates</Select.Option>
                            <Select.Option value="Senior Fitness">Senior Fitness</Select.Option>
                            <Select.Option value="Spin">Spin</Select.Option>
                            <Select.Option value="Yoga">Yoga</Select.Option>
                            <Select.Option value="Weights">Weights</Select.Option>
                            <Select.Option value="Zumba">Zumba</Select.Option>
                            <Select.Option value="">Other</Select.Option>
                        </Select>
                        {/* <Select
                        value={mode}
                        onChange={setMode}
                        className=' md:w-[220px]' placeholder={<p className=" text-lg">Online or in-person?</p>}>
                        <Select.Option value="Onlien">Onlien</Select.Option>
                        <Select.Option value="In-Person">In-Person</Select.Option>
                    </Select> */}
                    </div>
                    <Input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search' prefix={<IoSearchOutline />} className=' md:w-[300px] mt-7 md:mt-0' />
                </div>
                {
                    isLoading ? (
                        <SessionSkeleton />
                    ) : data?.data?.data?.length ? (
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                            {data?.data?.data?.map((item) => (
                                <div key={item?._id} className="cursor-pointer">
                                    <Image
                                        onClick={() => {
                                            setSelectedSession(item);
                                            showModal();
                                        }}
                                        className="w-full h-[450px] object-cover"
                                        src={item?.promo_image}
                                        alt="session"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center py-32">
                            <h1 className="text-xl md:text-3xl">
                                Still waiting for the first session to be created!
                            </h1>
                        </div>
                    )
                }


                <div className=" mt-10">
                    {
                        data?.data?.data?.length !== 0 &&
                        <Pagination
                            current={data?.data?.meta?.page}
                            pageSize={data?.data?.meta?.limit}
                            total={data?.data?.meta?.total}
                            onChange={handlePageChange}
                        />
                    }
                </div>
            </div>
            <EnrollModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} session={selectedSession}></EnrollModal>
        </div>
    );
};

export default MorfitterSessions;