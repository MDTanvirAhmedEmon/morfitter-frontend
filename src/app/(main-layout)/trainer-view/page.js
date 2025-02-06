"use client";
import { Avatar } from "antd";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import circle from "../../../assets/circle.svg";

import Link from "next/link";

const TrainerView = () => {
  return (
    <section className="py-16 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] rounded-2xl">
      <div className="container mx-auto flex">
        <div className="details-info flex flex-col lg:flex-row gap-5 p-5 min-h-[660px] w-full rounded-lg shadow-lg">

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
                src="https://avatar.iran.liara.run/public/46"
                className="border-4 m-[7px]"
              />
            </div>

            <div className="social-media w-full p-2">
              <Link
                href="www.tiktok.com"
                target="_blank"
                className="item flex items-center gap-2 p-2 border-b border-gray-300"
              >
                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                  <FaTiktok size={20} />
                </div>
                <div className="name text-xl">Emon Khan</div>
              </Link>

              <Link
                href="www.instagram.com"
                target="_blank"
                className="item flex items-center gap-2 p-2 border-b border-gray-300"
              >
                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                  <FaInstagram size={20} />
                </div>
                <div className="name text-xl">Emon Khan</div>
              </Link>

              <Link
                href="www.facebook.com"
                target="_blank"
                className="item flex items-center gap-2 p-2 border-b border-gray-300"
              >
                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                  <FaFacebookF size={20} />
                </div>
                <div className="name text-xl">Emon Khan</div>
              </Link>

              <Link
                href="www.youtube.com"
                target="_blank"
                className="item flex items-center gap-2 p-2 border-b border-gray-300"
              >
                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                  <FaYoutube size={20} />
                </div>
                <div className="name text-xl">Emon Khan</div>
              </Link>

              <Link
                href="www.twitter.com"
                target="_blank"
                className="item flex items-center gap-2 p-2"
              >
                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                  <FaXTwitter size={20} />
                </div>
                <div className="name text-xl">Emon Khan</div>
              </Link>
            </div>
          </div>

          <div className="right-information w-full lg:w-[75%] pt-5">
            <div className="user-details flex flex-col lg:flex-row lg:justify-between gap-5">
              <div className="user">
                <div className="user-name text-4xl font-semibold">
                  Emon Khan
                </div>
                <div className="mt-2 text-2xl">Dhaka,Bangladesh.</div>
              </div>
              <div className="following-follower grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="item text-center px-14 py-1 rounded-xl bg-[#0ba5931a] border border-greenColor shadow-lg">
                  <div className="total text-xl md:text-3xl font-bold text-greenColor">
                    50
                  </div>
                  <div className="title text-lg  text-greenColor capitalize">
                    Followers
                  </div>
                </div>

                <div className="item text-center px-14 py-1 bg-[#e2697121] border border-primary rounded-xl shadow-lg">
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
                  <div>
                    <h2 className="title text-lg md:text-2xl mb-2 font-medium text-[#535353]">
                      Qualification
                    </h2>
                  </div>
                  <p className="px-6 pb-4">
                    Boxercise,Calisthenics,circuit Training,Core Strength,Fat
                    Burns,Flexibility & Mobility.{" "}
                  </p>
                </div>
              </div>
              <div className="border mb-4">
                <div className="qualification flex  justify-between items-center  pt-4 px-6 rounded-md ">
                  <div className="flex  gap-3 md:pr-8">
                    <h2 className="title text-lg md:text-2xl mb-2 font-medium text-[#535353]">
                      Specialisms
                    </h2>
                  </div>
                  <p className="px-6 pb-4">
                    Boxercise,Calisthenics,circuit Training,Core Strength,Fat
                    Burns,Flexibility & Mobility.{" "}
                  </p>
                </div>
              </div>

              <div className="qualification flex  justify-between items-center  border py-4 px-6 rounded-md mb-4">
                <div className="flex  gap-3 md:pr-8">
                  <h2 className="title text-lg md:text-2xl font-medium text-[#535353]">
                    Customer Testimonials
                  </h2>
                </div>
                <button className="add-btn text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full ">
                  View
                </button>
              </div>

              <div className="qualification flex  justify-between items-center  border py-4 px-6 rounded-md mb-4">
                <div className="flex  gap-3 md:pr-8">
                  <h2 className="title text-lg md:text-2xl font-medium text-[#535353]">
                    All Content
                  </h2>
                </div>
                <Link href={`/trainer-profile/my-content`}>
                  <button className="add-btn text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full ">
                    View
                  </button>
                </Link>
              </div>
            </div>

            <div className=" flex flex-col md:flex-row gap-5 w-full mt-5">
              <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                  Blogs
                </div>
                <button className="text-lg md:text-xl text-gray-500 font-bold rounded-lg ">
                  28
                </button>
              </div>

              <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                  Video
                </div>
                <button className="text-lg md:text-xl text-gray-500 font-bold rounded-lg ">
                  20
                </button>
              </div>

              <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                <div className=" text-gray-500 text-lg md:text-xl font-bold">
                  Images
                </div>
                <button className="text-lg md:text-xl text-gray-500 font-bold rounded-lg ">
                  200
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerView;