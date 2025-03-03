"use client";

import Image from "next/image";
import Link from "next/link";
import { useMyEnrolledSessionQuery } from "@/redux/features/session/sessionApi";

import SessionSkeleton from "@/components/Skeleton/SessionSkeleton";
import { FaStar } from "react-icons/fa";
import { Avatar } from "antd";

const MyEnrolledSession = () => {
  const { data, isLoading } = useMyEnrolledSessionQuery();

  console.log(data);

  return (
    <div>
      <div className="px-3 md:container md:mx-auto py-10 md:py-16">
        <h1 className=" text-2xl font-semibold pb-6">My Enrolled Sessions</h1>
        {isLoading ? (
          <SessionSkeleton />
        ) : data?.data?.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {data?.data?.map((item) => (
              <Link
                key={item?.session_id}
                href={`/morfitter-sessions/single-session-of-pt/${item?.sessionDetails?._id}`}
              >
                <div className="cursor-pointer h-[400px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-md relative">
                  <Image

                    className="w-full h-[55%] object-cover rounded-t-md"
                    src={item?.sessionDetails?.promo_image}
                    alt="session"
                    width={500}
                    height={500}
                  />
                  <div className=' mx-4 py-3'>
                    <div className=' flex items-center gap-3'>
                      <Avatar
                        size={50}
                        src={
                          item?.owner?.profileImageUrl
                            ? `${item?.owner?.profileImageUrl}`
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                      />
                      <div>
                        <h2 className=' text-black font-semibold' >{item?.owner?.name}</h2>
                        <span className=' text-black bg-gray-100 rounded px-2' >PTs</span>
                      </div>

                    </div>
                    <div>
                      <h2 className='mt-4'>
                        {item?.sessionDetails?.title
                          ? item?.sessionDetails?.title?.length > 80
                            ? `${item?.sessionDetails?.title.slice(0, 80)}...`
                            : item?.sessionDetails?.title
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
            ))}
          </div>
        ) : (
          <div className=" my-32 text-center">
            <h2 className=" text-xl md:text-2xl">You have not enrolled in any sessions.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEnrolledSession;
