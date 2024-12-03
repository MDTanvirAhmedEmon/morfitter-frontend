"use client"
import { Avatar, Upload } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiCamera } from "react-icons/pi";
import circle from '../../../assets/circle.svg'
import { FaPlus } from "react-icons/fa";

const Profile = () => {
    const [profilePic, setProfilePic] = useState(null);

    const handleProfilePicUpload = (e) => {
        setProfilePic(e.file.originFileObj);
    };
    const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : null;

    return (
        <section className="welcome py-20">
            <div className="container mx-auto flex">
                <div className="details-info flex gap-5 p-5 min-h-[660px] w-full rounded-lg shadow-lg">
                    {/* Profile Section */}
                    <div className="profile-details flex flex-col items-center gap-4 w-[25%]">

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

                        <p className="desc text-center text-greenColor underline text-xl my-2 px-10 capitalize">Invite friends, family or acquaintances</p>

                        <div className="social-media w-full p-2 rounded-lg shadow-xl">
                            <div className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                    <FaTiktok size={20} />
                                </div>
                                <div className="name text-xl">Tik Tok</div>
                            </div>

                            <div className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                    <FaInstagram size={20} />
                                </div>
                                <div className="name text-xl">Instagram</div>
                            </div>

                            <div className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                    <FaFacebookF size={20} />
                                </div>
                                <div className="name text-xl">Facebook</div>
                            </div>

                            <div className="item flex items-center gap-2 p-2 border-b border-gray-300">
                                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                    <FaYoutube size={20} />
                                </div>
                                <div className="name text-xl">Youtube</div>
                            </div>

                            <div className="item flex items-center gap-2 p-2  ">
                                <div className="icon w-8 h-8 rounded-full bg-primary text-white text-center flex items-center justify-center">
                                    <FaXTwitter size={20} />
                                </div>
                                <div className="name text-xl">Twitter</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Information Section */}
                    <div className="right-information w-[75%] pt-5">
                        <div className="user-details flex justify-between gap-5">
                            <div className="user">
                                <div className="user-name text-4xl font-semibold">Emma Watson</div>
                                <div className="mt-2 text-2xl">New York</div>
                            </div>

                            <div className="following-follower grid grid-cols-3 gap-5">

                                <div className="item text-center px-14 py-4 rounded-xl bg-[#0ba5931a] border border-greenColor shadow-lg">
                                    <div className="total text-3xl font-bold text-greenColor">50</div>
                                    <div className="title text-lg  text-greenColor capitalize">Followers</div>
                                </div>

                                <div className="item text-center px-14 py-4 bg-[#e2697121] border border-primary rounded-xl shadow-lg">
                                    <div className="total text-3xl font-bold text-primary">30</div>
                                    <div className="title text-lg text-primary capitalize">Members</div>
                                </div>

                                <div className="item text-center px-14 py-4 border bg-[#e2697121] border-black rounded-xl shadow-lg">
                                    <div className="total text-3xl font-bold text-black">£46</div>
                                    <div className="title text-lg text-gray-900 capitalize">Revenue</div>
                                </div>

                            </div>
                        </div>

                        <div className="qualification-details mt-6">
                            <div className="qualification flex justify-between items-center border py-2 px-4 rounded-md mb-4">
                                <div className=" flex  gap-3 pr-[300px]">
                                    <h2 className="title text-2xl font-medium text-[#535353]">Qualification</h2>
                                    <div>
                                        <p className=" text-gray-400 mt-1">(NOTES: Person needs to be abel tot add multiple refer to https://www.yourpersonaltraininguk.co.uk/trainers/barbara-veloso)</p>
                                    </div>

                                </div>

                                <button className="add-btn text-white bg-secondary px-6 py-[2px] rounded-full">Add</button>
                            </div>

                            <div className="qualification flex justify-between items-center border py-2 px-4 rounded-md mb-4">
                                <div className=" flex  gap-3 pr-[300px]">
                                    <h2 className="title text-2xl font-medium text-[#535353]">Specialisms</h2>
                                </div>

                                <button className="add-btn text-white bg-secondary px-6 py-[2px] rounded-full">Add</button>
                            </div>

                            <div className="qualification flex justify-between items-center py-2 px-4 rounded-md mb-4">
                                <div className=" flex  gap-3 pr-[300px]">
                                    <h2 className="title text-2xl font-medium text-[#535353]">Customer testimonials</h2>
                                </div>

                                <button className="add-btn text-white bg-secondary px-6 py-[2px] rounded-full">Add</button>
                            </div>

                        </div>

                        {/* Blogging Section */}
                        <div className=" flex gap-5 w-full mt-4">
                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-xl font-bold">Blog</div>
                                <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-4 py-[14px] rounded-lg "><FaPlus className=" text-greenColor" /></button>
                            </div>

                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-xl font-bold">Video</div>
                                <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-4 py-[14px] rounded-lg "><FaPlus className=" text-greenColor" /></button>
                            </div>

                            <div className="qualification flex justify-between items-center w-full mb-4 shadow-lg py-4 px-3 rounded-lg">
                                <div className=" text-gray-500 text-xl font-bold">Images</div>
                                <button className="add-btn text-white bg-[#0ba5931a] border border-greenColor px-4 py-[14px] rounded-lg "><FaPlus className=" text-greenColor" /></button>
                            </div>
                        </div>

                        <div className=" flex flex-col justify-center items-center mt-6">
                            <button className=" text-white bg-secondary px-4 py-2 w-[300px] text-center text-lg rounded-full ">Create a training Session</button>
                            <p className="text-center text-secondary font-semibold underline text-lg mt-3">Reporting Dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
