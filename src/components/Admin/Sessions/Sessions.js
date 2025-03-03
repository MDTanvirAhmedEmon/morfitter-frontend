"use client"
import { Avatar, Input, message, Pagination, Select } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import SessionSkeleton from '@/components/Skeleton/SessionSkeleton';
import Link from 'next/link';
import { useBlockUnblockSessionMutation, useGetAllSessionForAdminQuery } from '@/redux/features/admin/session/adminSessionApi';
import { FaStar } from 'react-icons/fa';

const SessionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sessionType, setSessionType] = useState(null);
  const [specialism, setSpecialism] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  const { data, isLoading } = useGetAllSessionForAdminQuery({
    page: currentPage,
    sessionType: sessionType || undefined,
    fitnessFocus: specialism || undefined,
    searchTerm: searchTerm || undefined,
  })
  console.log(data);
  const [blockUnblockSession] = useBlockUnblockSessionMutation();

  const handleBlockUnblock = (id) => {
    blockUnblockSession(id).unwrap()
      .then(() => {
        message.success(`Status updated successfuly`)
      })
      .catch((error) => {
        message.error(error?.data?.message)
      })
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className=' py-3'>
        <div className=' flex justify-between items-center'>
          <div className=' flex flex-col md:flex-row gap-6'>
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
          <Input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search' prefix={<IoSearchOutline />} className=' w-[300px]' />
        </div>
        {
          isLoading ? <SessionSkeleton></SessionSkeleton>
            :
            <div className=' mt-10 grid grid-cols-2 lg:grid-cols-4 gap-10'>
              {
                data?.data?.data?.map((item) => (
                  <div key={item?._id} className=''>
                    <Link className=' hover:text-black' key={item?._id} href={`/sessions/${item?._id}`}>
                      <div
                        onClick={() => {
                          setSelectedSession(item);
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
                              item?.averageRating < 1 ?
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
                    </Link>
                    <div className=" flex items-center  gap-2 mt-3">
                      {
                        item?.status === 'blocked' ?
                          <button className=" bg-red-500 px-2 py-2 rounded-md capitalize text-white">{item?.status}</button>
                          : <button className=" bg-green-500 text-white px-2 py-2 rounded-md capitalize">{item?.status}</button>
                      }

                      <p onClick={() => handleBlockUnblock(item?._id)} className="flex items-center text-white bg-slate-600 rounded-lg shadow-lg px-4 py-2 cursor-pointer">
                        {
                          item?.status === "in-progress" ? "block" : "unblock"
                        }
                      </p>
                    </div>
                  </div>

                ))
              }

            </div>
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

    </div>
  );
};

export default SessionsPage;