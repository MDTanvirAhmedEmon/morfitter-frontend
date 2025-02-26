"use client";

import Image from "next/image";
import Link from "next/link";
import { useMyEnrolledSessionQuery } from "@/redux/features/session/sessionApi";

import SessionSkeleton from "@/components/Skeleton/SessionSkeleton";

const MyEnrolledSession = () => {
  const { data, isLoading } = useMyEnrolledSessionQuery();

  return (
    <div>
      <div className="px-3 md:container md:mx-auto py-10 md:py-16">
        {isLoading ? (
          <SessionSkeleton />
        ) : data?.data?.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {data?.data?.map((item) => (
              <Link
                key={item?._id}
                href={`/morfitter-sessions/single-session-of-pt/${item?.sessionDetails?._id}`}
              >
                <div className="cursor-pointer">
                  <Image
                    className="w-full h-[450px] object-cover"
                    src={item?.sessionDetails?.promo_image}
                    alt="session"
                    width={500}
                    height={500}
                  />
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
