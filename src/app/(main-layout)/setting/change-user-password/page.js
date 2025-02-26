"use client"
import { useChangeUserPasswordMutation } from "@/redux/features/auth/authApi";
import { message, Spin } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function ChangeUserPassword() {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const router = useRouter();
    const [changeUserPassword, { isLoading }] = useChangeUserPasswordMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            message.error(`Confirm password did not match!`)
            return;
        }
        const data = {
            oldPassword,
            newPassword,
        }

        changeUserPassword(data).unwrap()
            .then(() => {
                message.success('Password updated successfully')
                setOldPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
                router.push(`/`)
            })
            .catch((error) => {
                message.error(error?.data?.message)
            })
    };

    return (
        <div className=" flex items-center justify-center my-10 md:my-16">
            <div className="bg-white px-8 md:px-20 w-[600px] md:w-[715px] pt-10 pb-5 rounded-md">
                <p className="text-primary text-center font-bold text-xl mb-5">
                    Change Password
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="w-full">
                        <label
                            htmlFor="oldPassword"
                            className="text-[15px] font-[400] text-[#575757]"
                        >
                            Old Password
                        </label>
                        <div className="w-full relative">
                            <input
                                type={isEyeOpen ? "text" : "password"}
                                name="oldPassword"
                                id="oldPassword"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                placeholder="Enter Old Password"
                                className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                            />
                            {isEyeOpen ? (
                                <IoEyeOutline
                                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(false)}
                                />
                            ) : (
                                <IoEyeOffOutline
                                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="w-full">
                        <label
                            htmlFor="newPassword"
                            className="text-[15px] font-[400] text-[#575757]"
                        >
                            New Password
                        </label>
                        <div className="w-full relative">
                            <input
                                type={isEyeOpen ? "text" : "password"}
                                name="newPassword"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter New Password"
                                className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                            />
                            {isEyeOpen ? (
                                <IoEyeOutline
                                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(false)}
                                />
                            ) : (
                                <IoEyeOffOutline
                                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="w-full">
                        <label
                            htmlFor="confirmNewPassword"
                            className="text-[15px] font-[400] text-[#575757]"
                        >
                            Confirm New Password
                        </label>
                        <div className="w-full relative">
                            <input
                                type={isEyeOpen ? "text" : "password"}
                                name="confirmNewPassword"
                                id="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                placeholder="Confirm New Password"
                                className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                            />
                            {isEyeOpen ? (
                                <IoEyeOutline
                                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(false)}
                                />
                            ) : (
                                <IoEyeOffOutline
                                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="text-center my-5">
                        <button
                            type="submit"
                            className="font-bold bg-primary text-white p-2 px-10 py-2 rounded-md shadow-lg"
                        >
                            {isLoading ? <Spin /> : "Save & Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangeUserPassword;
