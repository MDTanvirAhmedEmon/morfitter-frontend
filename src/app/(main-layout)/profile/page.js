"use client"
import { Avatar, Badge, message, Tooltip, Upload } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiCamera } from "react-icons/pi";
import circle from '../../../assets/circle.svg'
import { FaPlus } from "react-icons/fa";
// import follower1 from '../../../assets/profile/following1.png'
// import follower2 from '../../../assets/profile/following2.png'
// import follower3 from '../../../assets/profile/following3.png'
// import follower4 from '../../../assets/profile/following4.png'
// import follower5 from '../../../assets/profile/following5.png'
// import follower6 from '../../../assets/profile/following6.png'
import Link from "next/link";
import { useGetMembershipQuery, useUpdateTraineeProfileMutation } from "@/redux/features/profile/profileApi";
import { useDispatch, useSelector } from "react-redux";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import AddProfileSocialModal from "@/components/Profile/AddProfileSocialModal";
import { useGetWhoIAmFollowingQuery } from "@/redux/features/follower/followerApi";
import { useGetMyInvitationQuery } from "@/redux/features/invitation/invitationApi";
import InvitationModal from "@/components/Profile/InvitationModal";
import defaultProfilePic from '../../../assets/profile/profile_image.webp'
import { useGetMyFollowersQuery } from "@/redux/features/trainer/trainerApi";
import { CiEdit } from "react-icons/ci";

const Profile = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
    const { user, role } = useSelector((state) => state.auth)

    const dispatch = useDispatch();
    const [updateTraineeProfile, { isLoading }] = useUpdateTraineeProfileMutation();
    const { data: following } = useGetWhoIAmFollowingQuery(role?.id);
    const handleProfilePicUpload = (e) => {
        setProfilePic(e.file.originFileObj);
    };
    const { data: membership } = useGetMembershipQuery();
    console.log(membership);
    const { data: myFollower } = useGetMyFollowersQuery(role?.id);

    const showInvitationModal = () => {
        setIsInvitationModalOpen(true);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleInvitationOk = () => {
        setIsInvitationModalOpen(false);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleInvitationCancel = () => {
        setIsInvitationModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // invitation
    const { data: invitation } = useGetMyInvitationQuery(user?._id);


    const { data } = useGetMeQuery();
    dispatch(setUser(data?.data?.[0]?.traineeDetails?.[0]));
    const uploadImage = () => {
        const formData = new FormData();

        formData.append('data', JSON.stringify({
            trainee: {}
        }));
        if (profilePic) {
            formData.append('file', profilePic);
        }

        updateTraineeProfile({ data: formData, id: user?._id }).unwrap()
            .then(() => {
                message.success(`Updated Successfully`)
                setProfilePic(null)
            })
            .catch((error) => {
                message.error(error?.data?.message)
            })
    }
    // const profilePicture = user?.profilePicture ? `${user?.profileImageUrl}` : follower1;
    // const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : profilePicture;
    const text =
        <div className=" flex gap-3 py-1">
            <Link className=" bg-white text-black hover:text-black px-1 rounded " href={`/profile/edit-profile`}>Edit Profile</Link>
            <Link className=" bg-white text-black hover:text-black px-1 rounded " href={`/setting/change-user-password`}>Change Password</Link>
        </div>;

    const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : `${user?.profileImageUrl}`;

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
                            <Upload
                                showUploadList={false}
                                onChange={handleProfilePicUpload}
                                className="absolute bottom-4 right-3 flex justify-center items-center h-[28px] bg-teal-500 px-1 py-1 rounded-full cursor-pointer "
                            >
                                <PiCamera className=" w-5 h-5 text-white" />
                            </Upload>

                        </div>
                        {
                            profilePic &&
                            <div className=" flex justify-center mb-2">
                                <button
                                    onClick={uploadImage}
                                    className="add-btn text-white bg-secondary px-4 md:px-6 py-1 md:py-2 rounded-full"
                                >
                                    Upload Image
                                </button>
                            </div>
                        }
                        <p className="desc text-center text-greenColor underline text-xl my-2 px-10 capitalize">Invite friends, family or acquaintances</p>

                        <div className="social-media w-full p-2 rounded-lg shadow-xl">
                            {
                                user?.TikTok && (
                                    <Link href={user?.TikTok} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaTiktok size={20} />
                                        </div>
                                        <div className="name text-xl">TikTok</div>
                                    </Link>
                                )
                            }

                            {
                                user?.Instagram && (
                                    <Link href={user?.Instagram} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaInstagram size={20} />
                                        </div>
                                        <div className="name text-xl">Instagram</div>
                                    </Link>
                                )
                            }

                            {
                                user?.Facebook && (
                                    <Link href={user?.Facebook} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaFacebookF size={20} />
                                        </div>
                                        <div className="name text-xl">Facebook</div>
                                    </Link>
                                )
                            }

                            {
                                user?.Youtube && (
                                    <Link href={user?.Youtube} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaYoutube size={20} />
                                        </div>
                                        <div className="name text-xl">YouTube</div>
                                    </Link>
                                )
                            }

                            {
                                user?.Twitter && (
                                    <Link href={user?.Twitter} target="_blank" className="item flex items-center gap-2 p-2">
                                        <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                            <FaXTwitter size={20} />
                                        </div>
                                        <div className="name text-xl">Twitter</div>
                                    </Link>
                                )
                            }
                            <div className=" flex justify-center mt-4 mb-6">
                                <button
                                    onClick={showModal}
                                    className="add-btn text-white bg-secondary px-4 md:px-6 py-1 md:py-2 rounded-full"
                                >
                                    Add Socail Link
                                </button>
                            </div>
                        </div>
                        <AddProfileSocialModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} ></AddProfileSocialModal>
                    </div>

                    {/* Right Information Section */}
                    <div className="right-information w-full lg:w-[75%] pt-5">
                        <div className=" flex justify-end mb-4">
                            <Tooltip placement="top" title={text}>
                                <CiEdit className=" w-7 h-7 cursor-pointer" />
                            </Tooltip>

                        </div>
                        <div className="user-details flex flex-col lg:flex-row lg:justify-between gap-5">
                            <div className="user">
                                <div className="user-name text-4xl font-semibold capitalize">{user?.firstName} {user?.lastName}</div>
                                <div className="mt-2 text-2xl">{user?.city}</div>
                            </div>

                            <div className="following-follower grid grid-cols-1 md:grid-cols-3 gap-5">

                                <div className="item text-center px-14 py-1 md:py-4 rounded-xl bg-[#0ba5931a] border border-greenColor shadow-lg">
                                    <div className="total text-xl md:text-3xl font-bold text-greenColor">{myFollower?.data?.totalFollower}</div>
                                    <div className="title text-lg  text-greenColor capitalize">Followers</div>
                                </div>

                                <div className="item text-center px-14 py-1 md:py-4 bg-[#e2697121] border border-primary rounded-xl shadow-lg">
                                    <div className="total text-xl md:text-3xl font-bold text-primary">{membership?.data?.[0]?.totalMembership}</div>
                                    <div className="title text-lg text-primary capitalize">membership</div>
                                </div>

                            </div>
                        </div>

                        <p className=" text-xl mx-4 py-6">
                            Share thoughts of your journey to become MorFitter. Inspire and encourage others with the positive steps you have taken
                        </p>

                        {/* Blogging Section */}
                        <div className=" flex flex-col md:flex-row gap-5 w-full mt-5">
                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                                    Blog
                                </div>
                                <Link href={`/profile/creating-content`}>
                                    <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg ">
                                        <FaPlus className=" text-greenColor" />
                                    </button>
                                </Link>
                            </div>

                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                                    Video
                                </div>
                                <Link href={`/profile/creating-content`}>
                                    <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg ">
                                        <FaPlus className=" text-greenColor" />
                                    </button>
                                </Link>
                            </div>

                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                                    Images
                                </div>
                                <Link href={`/profile/creating-content`}>
                                    <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg ">
                                        <FaPlus className=" text-greenColor" />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className=" mt-5">
                            <h2 className=" text-4xl font-bold text-center">Following</h2>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                                {/* when you have data do map here */}
                                {
                                    following?.data?.map((item) => (
                                        <div key={item?._id} className=" flex items-center gap-3 shadow-lg px-3 py-2 rounded-lg">
                                            <Image className=" w-14 rounded-2xl object-cover "

                                                src={item?.followingDetails?.profileImageUrl
                                                    ? `${item?.followingDetails?.profileImageUrl}`
                                                    : defaultProfilePic
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

                        <div className=" flex flex-col md:flex-row gap-5 w-full mt-4">
                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-lg md:text-xl font-bold">My training</div>
                                <Link href={`/profile/my-enrolled-session`}>
                                    <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg "><FaPlus className=" text-greenColor" /></button>
                                </Link>
                            </div>

                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-lg md:text-xl font-bold">Customer testimonials</div>
                                <Badge count={invitation?.data?.length}>
                                    <button onClick={showInvitationModal} className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg "><FaPlus className=" text-greenColor" /></button>
                                </Badge>
                            </div>
                        </div>
                        <div className="qualification flex  justify-between items-center  mb-4 shadow-lg py-4 px-3 rounded-lg">
                            <div className="flex  gap-3 md:pr-8">
                                <h2 className="text-gray-500 text-lg md:text-xl font-bold">
                                    My Content
                                </h2>
                            </div>
                            <Link href={`/profile/my-content`}>
                                <button
                                    className="add-btn text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full "
                                >
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <InvitationModal isInvitationModalOpen={isInvitationModalOpen} handleInvitationCancel={handleInvitationCancel} handleInvitationOk={handleInvitationOk} data={invitation?.data}></InvitationModal>
            </div>
        </section>
    );
};

export default Profile;
