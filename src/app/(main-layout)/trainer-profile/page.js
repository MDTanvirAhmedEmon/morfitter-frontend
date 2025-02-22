"use client";
import { Avatar, message, Popconfirm, Rate, Upload } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiCamera } from "react-icons/pi";
import circle from "../../../assets/circle.svg";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import QualificationModal from "@/components/Modals/QualificationModal";
import SpecialismsModal from "@/components/Modals/SpecialismsModal";
import TestimonialsModal from "@/components/Modals/TestimonialsModal";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";
import AddSocialModal from "@/components/TrainerProfile/AddSocialModal";
import { useUpdateTrainerProfileMutation } from "@/redux/features/profile/profileApi";
import { useDeleteSpecialismMutation, useGetMySpecialismQuery } from "@/redux/features/specialism/specialismApi";
import { useDeleteQualificationMutation, useGetMyQualificationQuery } from "@/redux/features/qualification/qualificationApi";
import { useGetReviewQuery } from "@/redux/features/invitation/invitationApi";
import { useGetMySessionQuery } from "@/redux/features/session/sessionApi";
import defaultProfilePic from '../../../assets/profile/profile_image.webp'
import { useGetMembersQuery, useGetMyFollowersQuery } from "@/redux/features/trainer/trainerApi";

const TrainerProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, role } = useSelector((state) => state.auth)
  const [qualificationVisible, setQualificationVisible] = useState(false);
  const [specialismsVisible, setSpecialismsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const dispatch = useDispatch();
  const { data } = useGetMeQuery();
  dispatch(setUser(data?.data?.[0]?.trainerDetails?.[0]));

  const [updateTrainerProfile, { isLoading }] = useUpdateTrainerProfileMutation();
  const { data: myFollower } = useGetMyFollowersQuery(role?.id);
  const { data: specialism } = useGetMySpecialismQuery(user?._id);
  const { data: qualification } = useGetMyQualificationQuery(user?._id);
  // review 
  const { data: reviews } = useGetReviewQuery(user?._id);
  console.log('review', reviews);
  // members 
  const { data: members } = useGetMembersQuery(user?._id);
  // me session
  const { data: session } = useGetMySessionQuery(user?._id);
  console.log('session', session);

  const uploadImage = () => {
    const formData = new FormData();

    formData.append('data', JSON.stringify({}));
    if (profilePic) {
      formData.append('file', profilePic);
    }

    updateTrainerProfile({ data: formData, id: user?._id }).unwrap()
      .then(() => {
        message.success(`Updated Successfully`)
        setProfilePic(null)
      })
      .catch((error) => {
        message.error(error?.data?.message)
      })
  }


  const handleProfilePicUpload = (e) => {
    setProfilePic(e.file.originFileObj);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : `http://10.0.60.166:5000${user?.profileImageUrl}`;

  const[ deleteSpecialism ] = useDeleteSpecialismMutation();

  const confirmSpecialism = (id) => {
    deleteSpecialism(id).unwrap()
    .then( () => {
      message.success('Deleted Successfully')
    }) 
    .catch((error) => {
      message.error(error?.data?.message)
    })
  };

  const[ deleteQualification ] = useDeleteQualificationMutation();

  const confirmQualification = (id) => {
    deleteQualification(id).unwrap()
    .then( () => {
      message.success('Deleted Successfully')
    }) 
    .catch((error) => {
      message.error(error?.data?.message)
    })
  };

  return (
    <section className=" py-10 md:py-20">
      <div className="container mx-auto flex">
        <div className="details-info flex flex-col lg:flex-row gap-5 p-5 min-h-[660px] w-full rounded-lg shadow-lg">
          {/* Profile Section */}
          <div className="profile-details flex flex-col items-center gap-4 w-full lg:w-[25%]">
            <div className="relative mb-8 md:-mt-6">
              <Image
                src={circle}
                className=" absolute  w-[300px]"
                alt="circle"
                height={0}
                width={0}
              />
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


            <p className="desc text-center text-greenColor underline text-xl my-2 px-10 capitalize">
              Invite friends, family or acquaintances
            </p>

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
            <AddSocialModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} ></AddSocialModal>
          </div>

          {/* Right Information Section */}
          <div className="right-information w-full lg:w-[75%] pt-5">
            <div className="user-details flex flex-col lg:flex-row lg:justify-between gap-5">
              <div className="user">
                <div className="user-name text-4xl font-semibold capitalize">
                  {user?.firstName} {user?.lastName}
                </div>
                <div className="mt-2 text-2xl">New York</div>
              </div>

              <div className="following-follower grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="item text-center px-14 py-1 md:py-4 rounded-xl bg-[#0ba5931a] border border-greenColor shadow-lg">
                  <div className="total text-xl md:text-3xl font-bold text-greenColor">
                    {myFollower?.data?.totalFollower}
                  </div>
                  <div className="title text-lg  text-greenColor capitalize">
                    Followers
                  </div>
                </div>

                <div className="item text-center px-14 py-1 md:py-4 bg-[#e2697121] border border-primary rounded-xl shadow-lg">
                  <div className="total text-xl md:text-3xl font-bold text-primary">
                    {members?.data?.[0]?.totalMembers}
                  </div>
                  <div className="title text-lg text-primary capitalize">
                    Members
                  </div>
                </div>
                {/* 
                <div className="item text-center px-14 py-1 md:py-4 border bg-[#e2697121] border-black rounded-xl shadow-lg">
                  <div className="total text-xl md:text-3xl font-bold text-black">
                    £46
                  </div>
                  <div className="title text-lg text-gray-900 capitalize">
                    Revenue
                  </div>
                </div> */}
              </div>
            </div>

            <div className=" mt-6">
              <div className="border mb-4">
                <div className="w-full flex justify-between items-center  pt-4 px-6 rounded-md ">
                  <p className="text-lg  md:text-2xl block md:hidden font-medium mr-3">
                    Qualification
                  </p>
                  <div className="flex flex-wrap gap-3 md:pr-0 xl:pr-[200px]">
                    <p className=" hidden md:block text-[#858585] w-full md:w-auto text-sm md:text-base">
                      <span className="text-lg md:text-2xl font-medium mr-3 text-[#535353]">
                        Qualification
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => setQualificationVisible(true)}
                    className="add-btn text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full"
                  >
                    Add
                  </button>
                </div>
                <div className=" px-6 pb-4 md:w-[20%]">
                  {
                    qualification?.data?.map((item) =>
                      <Popconfirm
                        key={item?._id}
                        title="Delete the qualification"
                        description="Are you sure to delete this qualification?"
                        onConfirm={() => confirmQualification(item?._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <p className=" mb-2 cursor-pointer capitalize" key={item?._id}>{item?.qualification}</p>

                      </Popconfirm>

                    )
                  }
                </div>
              </div>
              <div className="border mb-4">
                <div className="qualification flex  justify-between items-center  pt-4 px-6 rounded-md ">
                  <div className="flex  gap-3 md:pr-8">
                    <h2 className="title text-lg md:text-2xl mb-2 font-medium text-[#535353] capitalize">
                      Specialisms
                    </h2>
                  </div>
                  <button
                    onClick={() => setSpecialismsVisible(true)}
                    className="add-btn text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full "
                  >
                    Add
                  </button>
                </div>
                <div className=" px-6 pb-4 flex flex-col  md:w-[20%]">
                  {
                    specialism?.data?.map((item) =>
                      <Popconfirm
                        key={item?._id}
                        title="Delete the specialisms"
                        description="Are you sure to delete this specialisms?"
                        onConfirm={() => confirmSpecialism(item?._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <p className=" mb-2 w-auto cursor-pointer capitalize" >{item?.specialism}</p>


                      </Popconfirm>

                    )
                  }
                </div>
              </div>
              <div className="border py-4 px-6">
                <div className="qualification flex  justify-between items-center   rounded-md mb-4">
                  <div className="flex  gap-3 md:pr-8">
                    <h2 className="title text-lg md:text-2xl font-medium text-[#535353]">
                      Customer Testimonials
                    </h2>
                  </div>
                  <button
                    onClick={() => setTestimonialsVisible(true)}
                    className="add-btn text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full "
                  >
                    Add
                  </button>
                </div>
                <div className=" mt-5">
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                    {/* when you have data do map here */}
                    <div className="space-y-4">
                      {reviews?.data?.map((item) => (
                        <div
                          key={item?._id}
                          className="flex items-start gap-4 bg-white shadow-md rounded-lg p-4 border border-gray-200"
                        >
                          {/* Profile Image */}
                          <Image
                            className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
                            src={item?.traineeData?.profileImageUrl
                              ? `http://10.0.60.166:5000${item?.traineeData?.profileImageUrl}`
                              : defaultProfilePic
                            }
                            height={200}
                            width={200}
                            alt="profile"
                          />

                          {/* Review Content */}
                          <div className="flex-1">
                            {/* Name & Rating */}
                            <div className="flex justify-between items-center">
                              <h2 className="text-lg font-semibold text-gray-800 capitalize">
                                {item?.traineeData?.firstName} {item?.traineeData?.lastName}
                              </h2>
                              <Rate disabled defaultValue={item?.rating} className="text-yellow-500" />
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                              {item?.review_text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>


                  </div>
                </div>
              </div>


              <div className="qualification flex  justify-between items-center  border py-4 px-6 rounded-md mb-4">
                <div className="flex  gap-3 md:pr-8">
                  <h2 className="title text-lg md:text-2xl font-medium text-[#535353]">
                    My Content
                  </h2>
                </div>
                <Link href={`/trainer-profile/my-content`}>
                  <button
                    className="add-btn text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full "
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>

            {/* Blogging Section */}
            <div className=" flex flex-col md:flex-row gap-5 w-full mt-5">
              <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                  Blog
                </div>
                <Link href={`/trainer-profile/creating-content`}>
                  <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg ">
                    <FaPlus className=" text-greenColor" />
                  </button>
                </Link>
              </div>

              <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                  Video
                </div>
                <Link href={`/trainer-profile/creating-content`}>
                  <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg ">
                    <FaPlus className=" text-greenColor" />
                  </button>
                </Link>
              </div>

              <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                  Images
                </div>
                <Link href={`/trainer-profile/creating-content`}>
                  <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-2 md:px-4 py-1 md:py-[14px] rounded-lg ">
                    <FaPlus className=" text-greenColor" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="text-white bg-secondary px-4 py-2 text-center text-lg rounded w-full my-4 ">
              Current Training Session
            </div>
            <div className=" grid grid-cols-4 gap-3">
              {
                session?.data?.data?.map((item) => (
                  <Link key={item?._id} href={`/trainer-profile/my-session/${item?._id}`}>
                    <div >
                      <Image alt="session" src={`http://10.0.60.166:5000${item?.promo_image}`} height={500} width={500} className=" w-[300px] h-[380px] object-cover" />
                    </div>
                  </Link>
                ))
              }
            </div>

            <div className=" flex flex-col justify-center items-center mt-6">
              <Link href={`/trainer-profile/creating-session`}>
                <button className=" text-white bg-secondary px-4 py-2 w-[300px] text-center text-lg rounded-full ">
                  Create a training Session
                </button>
              </Link>
              <p className="text-center text-secondary font-semibold underline text-lg mt-3">
                Reporting Dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
      {
        qualificationVisible && (
          <QualificationModal setQualificationVisible={setQualificationVisible} />
        )
      }
      {
        specialismsVisible && (
          <SpecialismsModal setSpecialismsVisible={setSpecialismsVisible} />
        )
      }
      {
        testimonialsVisible && (
          <TestimonialsModal setTestimonialsVisible={setTestimonialsVisible} />
        )
      }
    </section >
  );
};

export default TrainerProfile;

// (NOTES: Person needs to be abel tot add multiple refer to https://www.yourpersonaltraininguk.co.uk/trainers/barbara-veloso)
