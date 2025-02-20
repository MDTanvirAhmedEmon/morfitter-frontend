"use client";
import { Avatar, Rate } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import circle from "../../../../assets/circle.svg";
import Link from "next/link";
import { useGetMySpecialismQuery } from "@/redux/features/specialism/specialismApi";
import { useGetMyQualificationQuery } from "@/redux/features/qualification/qualificationApi";
import { useGetReviewQuery } from "@/redux/features/invitation/invitationApi";
import { useGetMySessionQuery } from "@/redux/features/session/sessionApi";
import defaultProfilePic from '../../../../assets/profile/profile_image.webp'
import { useGetSingleTrainerQuery } from "@/redux/features/trainer/trainerApi";
import { useParams } from "next/navigation";

const ViewTrainerProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const {id} = useParams();

  const { data:trainer } = useGetSingleTrainerQuery(id);

  const { data: specialism } = useGetMySpecialismQuery(id);
  const { data: qualification } = useGetMyQualificationQuery(id);

  // review 
  const { data: reviews } = useGetReviewQuery(id);
  console.log(reviews);
  // me session
  const { data: session } = useGetMySessionQuery(id);



  const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : `http://10.0.60.166:5000${trainer?.data?.profileImageUrl}`;

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
                trainer?.data?.TikTok && (
                  <Link href={trainer?.data?.TikTok} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                    <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                      <FaTiktok size={20} />
                    </div>
                    <div className="name text-xl">TikTok</div>
                  </Link>
                )
              }

              {
                trainer?.data?.Instagram && (
                  <Link href={trainer?.data?.Instagram} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                    <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                      <FaInstagram size={20} />
                    </div>
                    <div className="name text-xl">Instagram</div>
                  </Link>
                )
              }

              {
                trainer?.data?.Facebook && (
                  <Link href={trainer?.data?.Facebook} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                    <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                      <FaFacebookF size={20} />
                    </div>
                    <div className="name text-xl">Facebook</div>
                  </Link>
                )
              }

              {
                trainer?.data?.Youtube && (
                  <Link href={trainer?.data?.Youtube} target="_blank" className="item flex items-center gap-2 p-2 border-b border-gray-300">
                    <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                      <FaYoutube size={20} />
                    </div>
                    <div className="name text-xl">YouTube</div>
                  </Link>
                )
              }

              {
                trainer?.data?.Twitter && (
                  <Link href={trainer?.data?.Twitter} target="_blank" className="item flex items-center gap-2 p-2">
                    <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                      <FaXTwitter size={20} />
                    </div>
                    <div className="name text-xl">Twitter</div>
                  </Link>
                )
              }

            </div>

          </div>

          {/* Right Information Section */}
          <div className="right-information w-full lg:w-[75%] pt-5">
            <div className="user-details flex flex-col lg:flex-row lg:justify-between gap-5">
              <div className="user">
                <div className="user-name text-4xl font-semibold capitalize">
                  {trainer?.data?.firstName} {trainer?.data?.lastName}
                </div>
                <div className="mt-2 text-2xl">New York</div>
              </div>

              <div className="following-follower grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="item text-center px-14 py-1 md:py-4 rounded-xl bg-[#0ba5931a] border border-greenColor shadow-lg">
                  <div className="total text-xl md:text-3xl font-bold text-greenColor">
                    50
                  </div>
                  <div className="title text-lg  text-greenColor capitalize">
                    Followers
                  </div>
                </div>

                <div className="item text-center px-14 py-1 md:py-4 bg-[#e2697121] border border-primary rounded-xl shadow-lg">
                  <div className="total text-xl md:text-3xl font-bold text-primary">
                    30
                  </div>
                  <div className="title text-lg text-primary capitalize">
                    Members
                  </div>
                </div>

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
                </div>
                <div className=" px-6 pb-4">
                  {
                    qualification?.data?.map((item) =>
                      <p className=" mb-2" key={item?._id}>{item?.qualification}</p>
                    )
                  }
                </div>
              </div>
              <div className="border mb-4">
                <div className="qualification flex  justify-between items-center  pt-4 px-6 rounded-md ">
                  <div className="flex  gap-3 md:pr-8">
                    <h2 className="title text-lg md:text-2xl mb-2 font-medium text-[#535353]">
                      Specialisms
                    </h2>
                  </div>

                </div>
                <div className=" px-6 pb-4">
                  {
                    specialism?.data?.map((item) =>
                      <p className=" mb-2" key={item?._id}>{item?.specialism}</p>
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


            </div>

            <div className="text-white bg-secondary px-4 py-2 text-center text-lg rounded w-full my-4 ">
              Current Training Session
            </div>
            <div className=" grid grid-cols-4 gap-3">
              {
                session?.data?.data?.map((item) => (
                  <Link key={item?._id} href={`/morfitter-pts/${id}`}>
                    <div >
                      <Image alt="session" src={`http://10.0.60.166:5000${item?.promo_image}`} height={500} width={500} className=" w-[300px] h-[380px] object-cover" />
                    </div>
                  </Link>
                ))
              }
            </div>

            <div className=" flex flex-col justify-center items-center mt-6">

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ViewTrainerProfile;

// (NOTES: Person needs to be abel tot add multiple refer to https://www.yourpersonaltraininguk.co.uk/trainers/barbara-veloso)