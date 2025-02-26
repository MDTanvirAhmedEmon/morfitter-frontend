"use client"
import MyContentSkeleton from '@/components/Skeleton/MyContentSkeleton';
import MySingleContent from '@/components/TrainerProfile/MySingleContent';
import { useGetMyContentQuery } from '@/redux/features/content/contentApi';
import { Pagination } from 'antd';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

const MyContent = () => {
    // const { user } = useSelector((state) => state.auth)
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetMyContentQuery({ page: currentPage, sortOrder: 'desc' });
    console.log(data?.data?.data);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className=' container mx-auto py-5 md:py-10'>
            {
                isLoading && <MyContentSkeleton></MyContentSkeleton>
            }
            {
                data?.data?.data?.length === 0 ?
                    <div className=' py-44 flex justify-center items-center'>
                        <h3 className=' text-xl md:text-3xl text-gray-600'>You Have No Content Yet</h3>
                    </div> :
                    data?.data?.data?.map((content) => <MySingleContent key={content?._id} content={content}></MySingleContent>)
            }
            {
                data?.data?.data?.length !== 0 &&
                <div className="">
                    <Pagination
                        current={data?.data?.meta?.page}
                        pageSize={data?.data?.meta?.limit}
                        total={data?.data?.meta?.total}
                        onChange={handlePageChange}
                    />
                </div>
            }

        </div>
    );
};

export default MyContent;