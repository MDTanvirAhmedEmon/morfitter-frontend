"use client";
import ChangePass from "@/components/Admin/Settings/Profile/ChangePass";
import EditProfile from "@/components/Admin/Settings/Profile/EditProfile";
import { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import profile_image from "../../../../assets/profile/profile_image.webp";
import { Avatar, message, Upload } from "antd";
import { useSelector } from "react-redux";
import { useUpdateAdminMutation } from "@/redux/features/admin/settings/profileApi";

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const [profilePic, setProfilePic] = useState(null);
  const [activeTab, setActiveTab] = useState("editProfile");
  const [updateAdmin, { isLoading }] = useUpdateAdminMutation();

  const handleSubmit = () => {

    const formData = new FormData();
    if (profilePic) {
      formData.append('file', profilePic)
    }
    formData.append('data', JSON.stringify({}))

    updateAdmin(formData)
      .unwrap()
      .then(() => {
        message.success("Update Successfully");
        setProfilePic(null)
      })
      .catch((error) => {
        message.error(error?.data?.message || "Error updating profile");
      });
  };
  const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : `${user?.profileImageUrl}`;
  const handleProfilePicUpload = (e) => {
    setProfilePic(e.file);
  };

  return (
    <div className="overflow-y-auto">
      <div className="px-5 pb-5 h-full">
        <div className="mx-auto flex flex-col justify-center items-center">
          <div className="flex justify-center items-center bg-primary mt-5 text-white w-[715px] mx-auto p-5 gap-5 rounded-md">
            <div className="relative">
              <Avatar
                size={140}
                src={profilePicUrl || profile_image}
                className="border-4 border-buttonPrimary shadow-xl"
              />
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleProfilePicUpload}
                className="absolute bottom-2 right-2 bg-teal-500 px-2 py-[2px] rounded-full cursor-pointer"
              >
                <FaCamera className="text-white mt-[5px]" />
              </Upload>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold capitalize">{user?.firstName} {user?.lastName}</p>
              <p className="text-sm font-semibold">{user?.role}</p>
              {
                profilePic &&
                <button onClick={handleSubmit} className=" bg-white text-primary rounded-md mt-4 px-2 py-1" >Upload Image</button>
              }
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 text-md md:text-xl font-semibold my-5">
            <p
              onClick={() => setActiveTab("editProfile")}
              className={`cursor-pointer pb-1 ${activeTab === "editProfile"
                ? "text-primary border-b-2 border-primary"
                : "text-[#575757]"
                }`}
            >
              Edit Profile
            </p>
            <p
              onClick={() => setActiveTab("changePassword")}
              className={`cursor-pointer pb-1 ${activeTab === "changePassword"
                ? "text-primary border-b-2 border-primary"
                : "text-[#575757]"
                }`}
            >
              Change Password
            </p>
          </div>
          <div className="flex justify-center items-center p-5 rounded-md">
            <div className="w-full max-w-3xl">
              {activeTab === "editProfile" && <EditProfile />}
              {activeTab === "changePassword" && <ChangePass />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
