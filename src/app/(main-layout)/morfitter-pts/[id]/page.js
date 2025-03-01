"use client"
import { Avatar, Input, Pagination, Select } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import SessionSkeleton from '@/components/Skeleton/SessionSkeleton';
import EnrollModal from '@/components/Sessions/EnrollModal';
import { useParams } from 'next/navigation';
import { useGetSingleTrainerSessionQuery } from '@/redux/features/trainer/trainerApi';
import { FaStar } from 'react-icons/fa';
import profileImage from '../../../../assets/profile/profile_image.webp'

const SinglePtSession = () => {
    const { id } = useParams();
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

    const { data, isLoading } = useGetSingleTrainerSessionQuery({
        id,
        page: currentPage,
        sessionType: sessionType || undefined,
        fitnessFocus: specialism || undefined,
        searchTerm: searchTerm || undefined,
    })
    console.log(data);

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
                            className=' w-full md:w-[190px]' placeholder={<p className=" text-lg">Live Or Recorded?</p>}>
                            <Select.Option value="live_group">Live</Select.Option>
                            <Select.Option value="recorded">Recorded</Select.Option>
                            <Select.Option value="">All</Select.Option>
                        </Select>
                        <Select
                            value={specialism}
                            onChange={setSpecialism}
                            className=" w-full md:w-[190px]" placeholder={<p className="text-lg">specialism</p>}>
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
                    isLoading ? <SessionSkeleton></SessionSkeleton>
                        : data?.data?.data?.length ?
                            <div className=' mt-10 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
                                {
                                    data?.data?.data?.map((item) => (
                                        // <Link key={item?._id} href={`/morfitter-sessions/single-session-of-pt/${item?._id}`}>
                                        <div
                                            onClick={() => {
                                                setSelectedSession(item);
                                                showModal();
                                            }} key={item?._id} className="cursor-pointer h-[400px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-md relative">
                                            <Image

                                                className="w-full h-[55%] object-cover rounded-t-md"
                                                src={item?.promo_image}
                                                alt="session"
                                                width={500}
                                                height={500}
                                            />
                                            <div className=' mx-4 py-3'>
                                                <div className=' flex items-center gap-3'>
                                                    <Avatar
                                                        size={50}
                                                        src={
                                                            item?.owner?.[0]?.profileImageUrl
                                                                ? `${item?.owner?.[0]?.profileImageUrl}`
                                                                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                                        }
                                                    />
                                                    <div>
                                                        <h2 className=' text-black font-semibold' >{item?.owner?.[0]?.name}</h2>
                                                        <span className=' text-black bg-gray-100 rounded px-2' >PTs</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <h2 className='mt-4'>
                                                        {item?.title
                                                            ? item?.title?.length > 80
                                                                ? `${item?.title.slice(0, 80)}...`
                                                                : item?.title
                                                            : "No Title Available"}
                                                    </h2>
                                                    {
                                                        !item?.averageRating ?
                                                            <div className=' flex items-center gap-2 absolute bottom-4 left-4'>
                                                                <FaStar className=' w-6 h-6' />

                                                                (0)
                                                            </div>
                                                            :

                                                            <div className=' flex items-center gap-2 absolute bottom-4 left-4'>
                                                                <FaStar className=' w-6 h-6' />
                                                                {(Math.round(item.averageRating * 2) / 2).toFixed(1)} {' '}
                                                                ({item?.totalReviews})
                                                            </div>
                                                    }
                                                    {
                                                        item?.membership_fee > 0 ?
                                                            <div className=' font-semibold absolute bottom-4 right-4'>
                                                                price: ${item?.membership_fee}
                                                            </div>
                                                            :
                                                            <div className=' font-semibold absolute bottom-4 right-4'>
                                                                Free
                                                            </div>
                                                    }



                                                </div>
                                            </div>
                                        </div>
                                        // </Link>
                                    ))
                                }

                            </div>
                            : <h1 className=' text-center mt-20 text-2xl'>No Sessions Found</h1>
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

export default SinglePtSession;