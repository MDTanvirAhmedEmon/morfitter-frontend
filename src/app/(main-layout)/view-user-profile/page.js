"use client"
import { Avatar, message } from "antd";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import circle from '../../../assets/circle.svg'
import Link from "next/link";
import { useDofolowUnfollowMutation, useGetSingleUserQuery, useGetWhoIAmFollowingQuery } from "@/redux/features/follower/followerApi";
import { useSearchParams } from "next/navigation";
import defaultProfileImage from '../../../assets/profile/profile_image.webp'
import { useSelector } from "react-redux";
import { useGetMyFollowersQuery } from "@/redux/features/trainer/trainerApi";

const ViewUserProfile = () => {

    const searchParams = useSearchParams();
    const { role } = useSelector((state) => state.auth)
    const traineeId = searchParams.get("trainee");
    const userId = searchParams.get("userId");
    const [dofolowUnfollow] = useDofolowUnfollowMutation();
    const { data: trainee } = useGetSingleUserQuery(userId)
    console.log(trainee);
    const { data: myFollower } = useGetMyFollowersQuery(role?.id);
    const { data: following } = useGetWhoIAmFollowingQuery(userId);
    console.log(following?.data);
    const handleFollowUnfollow = () => {
        dofolowUnfollow({
            follower_id: role?.id, // logged in User _id 
            following_id: trainee?.data?.userInfo?.user
        }
        ).unwrap()
            .then((res) => {
            })
            .catch((err) => {
                message.error(err?.data?.message)
            })
    }
    const profilePicUrl = trainee?.data?.userInfo?.profileImageUrl ? `${trainee?.data?.userInfo?.profileImageUrl}` : defaultProfileImage;

    return (
        <section className=" py-10 md:py-20">
            <p></p>
            <div className="container mx-auto flex">
                <div className="details-info flex flex-col lg:flex-row gap-5 p-5 min-h-[660px] w-full rounded-lg shadow-lg">
                    {/* Profile Section */}
                    <div className="profile-details flex flex-col items-center gap-4 w-full lg:w-[25%]">

                        <div className="relative mb-8 md:-mt-6">
                            <Image src={circle} className=" absolute  w-[300px]" alt="circle" height={0} width={0} />
                            <Avatar
                                size={180}
                                src={profilePicUrl || "/default-avatar.png"}
                                className="border-4 m-[7px]"
                            />

                        </div>

                        <p className="desc text-center text-greenColor underline text-xl my-2 px-10 capitalize">Invite friends, family or acquaintances</p>

                        <div className="social-media w-full p-2 rounded-lg shadow-xl">
                            {
                                trainee?.data?.userInfo?.TikTok && (
                                    <Link href={trainee?.data?.userInfo?.TikTok} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaTiktok size={20} />
                                        </div>
                                        <div className="name text-xl">TikTok</div>
                                    </Link>
                                )
                            }

                            {
                                trainee?.data?.userInfo?.Instagram && (
                                    <Link href={trainee?.data?.userInfo?.Instagram} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaInstagram size={20} />
                                        </div>
                                        <div className="name text-xl">Instagram</div>
                                    </Link>
                                )
                            }

                            {
                                trainee?.data?.userInfo?.Facebook && (
                                    <Link href={trainee?.data?.userInfo?.Facebook} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaFacebookF size={20} />
                                        </div>
                                        <div className="name text-xl">Facebook</div>
                                    </Link>
                                )
                            }

                            {
                                trainee?.data?.userInfo?.Youtube && (
                                    <Link href={trainee?.data?.userInfo?.Youtube} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaYoutube size={20} />
                                        </div>
                                        <div className="name text-xl">YouTube</div>
                                    </Link>
                                )
                            }

                            {
                                trainee?.data?.userInfo?.Twitter && (
                                    <Link href={trainee?.data?.userInfo?.Twitter} target="_blank" className="item flex items-center gap-2 p-2">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaXTwitter size={20} />
                                        </div>
                                        <div className="name text-xl">Twitter</div>
                                    </Link>
                                )
                            }

                        </div>
                    </div>

                    <div className="right-information w-full lg:w-[75%] pt-5">
                        <div className="user-details flex flex-col lg:flex-row lg:justify-between gap-5">
                            <div className="user">
                                <div className="user-name text-4xl font-semibold capitalize">{trainee?.data?.userInfo?.firstName} {trainee?.data?.userInfo?.lastName}</div>
                                <div className="mt-2 text-2xl">New York</div>
                            </div>
                            <button
                                onClick={handleFollowUnfollow}
                                className={`w-[120px] py-1.5 text-lg font-medium rounded-md transition-all duration-300 border 
                                ${trainee?.data?.isFollowing
                                        ? "bg-primary text-white border-primary hover:bg-primary"
                                        : "bg-transparent text-gray-700 border-gray-400 hover:bg-gray-100"
                                    }
                                `}
                            >
                                {trainee?.data?.isFollowing ? "Follow" : "Following"}
                            </button>

                            <div className="following-follower grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div className="item text-center px-14 py-1 md:py-4 rounded-xl bg-[#0ba5931a] border border-greenColor shadow-lg">
                                    <div className="total text-xl md:text-3xl font-bold text-greenColor">{myFollower?.data?.totalFollower}</div>
                                    <div className="title text-lg  text-greenColor capitalize">Followers</div>
                                </div>


                            </div>
                        </div>

                        <p className=" text-xl mx-4 py-6">
                            Share thoughts of your journey to become MorFitter. Inspire and encourage others with the positive steps you have taken
                        </p>

                        {/* Blogging Section */}


                        <div className=" mt-5">
                            <h2 className=" text-4xl font-bold text-center">Following</h2>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                                {
                                    following?.data?.map((item) => (
                                        <div key={item?._id} className=" flex items-center gap-3 shadow-lg px-3 py-2 rounded-lg">
                                            <Image className=" w-14 rounded-2xl "
                                                src={item?.followingDetails?.profileImageUrl
                                                    ? `${item?.followingDetails?.profileImageUrl}`
                                                    : defaultProfileImage
                                                }
                                                height={200} width={200} alt="profile" />
                                            <div>
                                                <h2 className=" text-xl font-semibold capitalize">{item?.followingDetails?.firstName} {item?.followingDetails?.lastName}</h2>
                                                <p>{item?.followingDetails?.role}</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewUserProfile;
