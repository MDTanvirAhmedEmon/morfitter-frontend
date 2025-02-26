"use client"
import Image from "next/image";
import logo1 from '../../../assets/logo1.svg';
import logo2 from '../../../assets/logo2.svg';
import logo3 from '../../../assets/logo3.svg';
import logo4 from '../../../assets/logo4.svg';
import logo5 from '../../../assets/logo5.svg';
import logo6 from '../../../assets/logo6.svg';
import logo7 from '../../../assets/logo7.svg';
import logo8 from '../../../assets/logo8.svg';
import logo9 from '../../../assets/logo9.svg';
import { Input, Pagination } from "antd";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useGetAllTrainerQuery } from "@/redux/features/trainer/trainerApi";
import profileImage from '../../../assets/profile/profile_image.webp'
import { useState } from "react";

const MorfitterPts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(undefined);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const interests = [
        { name: "boxercise", icon: logo1 },
        { name: "calisthenics", icon: logo2 },
        { name: "circuit training", icon: logo3 },
        { name: "core strength", icon: logo4 },
        { name: "fat burners", icon: logo5 },
        { name: "flexibility & mobility", icon: logo6 },
        { name: "zumba", icon: logo7 },
        { name: "hitt", icon: logo8 },
        { name: "pilates", icon: logo9 }
    ];

    const { data } = useGetAllTrainerQuery({ page: currentPage, searchTerm: searchTerm });

    return (
        <>
            <section className=" container mx-auto py-8 md:py-14">
                <div className=" flex justify-end mx-3 md:mx-0">
                    <Input onChange={(e) => setSearchTerm(e.target.value)} suffix={<CiSearch className=" w-6 h-6" />} placeholder="Search PT" className="md:w-[320px] mb-8" />
                </div>

                {
                    !data?.data?.data?.length && 
                    <div className=" flex items-center justify-center py-32">
                        <h1 className=" text-xl md:text-3xl">Still waiting for the first trainer to register!</h1>
                    </div>
                }

                {data?.data?.data?.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={item?._id} className=" rounded-xl shadow-lg mx-3 px-3 md:px-12 md:mx-0 py-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-6">
                        <div className=" w-full md:w-[50%] xl:w-[40%] 2xl:w-[20%]">
                            <Image
                                className=" w-32 rounded-full"
                                src={item?.profileImageUrl
                                    ? `${item?.profileImageUrl}`
                                    : profileImage}
                                width={300}
                                height={300}
                                alt="profile-trainer-image" />
                            <div className="mt-3">
                                <h2 className=" text-xl font-semibold capitalize">Name: {item?.firstName} {item?.lastName}</h2>
                                <p className=" capitalize">Trainer</p>
                                {/* <p>Age: 29</p> */}
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 className=" text-2xl font-semibold mb-2">PTs Bio</h2>
                                <p>{item?.about}</p>
                            </div>

                            <div className=" mt-2">
                                <h2 className=" text-lg font-semibold">Providing Sessions Types: {item?.onlineSession === 'yes' && 'Live & '} Recorded</h2>
                                <h2 className=" text-lg font-semibold mt-2">Specialism:</h2>
                            </div>

                            <div className="mb-6">
                                <div className="flex gap-2 overflow-x-auto mt-4">
                                    {/* Use grid for better responsiveness */}
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4 w-full">
                                        {item?.allSpecialism?.map((spec, index) => {
                                            const matchedInterest = interests?.find(interest =>
                                                interest?.name?.toLowerCase() === spec?.specialism?.toLowerCase()
                                            );

                                            return matchedInterest ? (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[100px] lg:h-[100px] p-2 text-center rounded border-2 border-solid border-transparent transition-all duration-300"
                                                    style={{
                                                        borderImage:
                                                            'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1',
                                                    }}
                                                >
                                                    <Image
                                                        src={matchedInterest?.icon}
                                                        alt={spec?.specialism}
                                                        height={170}
                                                        width={170}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            ) : null;
                                        })}
                                    </div>

                                </div>
                            </div>
                            <Link href={`/morfitter-pts/${item?._id}`}>
                                <button className=" bg-primary text-white px-5 py-2 rounded-full">View My Session</button>
                            </Link>

                        </div>
                    </div>
                ))}
                <div className="pt-5">
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
            </section>

        </>
    );
};

export default MorfitterPts;