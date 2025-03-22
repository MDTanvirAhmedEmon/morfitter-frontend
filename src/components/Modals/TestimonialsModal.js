"use client";
import { Avatar, message, Spin } from "antd";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  useCreateInvitationMutation,
  useGetTraineeForSentInvitationQuery,
} from "@/redux/features/invitation/invitationApi";
import Image from "next/image";
import { useState } from "react";
import InvitationSkeleton from "../Skeleton/InvitationSkeleton";
import defaultProfilePic from "../../assets/profile/profile_image.webp";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton,WhatsappShareButton, WhatsappIcon, FacebookMessengerShareButton, EmailShareButton, EmailIcon, FacebookMessengerIcon , FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

function TestimonialsModal({ setTestimonialsVisible }) {
  const { user, role } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetTraineeForSentInvitationQuery({
    id: user?._id,
    searchTerm: search,
  });

  const [createInvitation, { isLoading: sentLoading }] =
    useCreateInvitationMutation();
  const handleSentInvitation = (id) => {
    const data = {
      trainer_id: user?._id,
      trainee_id: id,
    };
    console.log(data);
    createInvitation(data)
      .unwrap()
      .then(() => {
        message.success(`Invitation sent successfully`);
        setTestimonialsVisible(false);
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };
  const shareUrl = `/view-trainer-profile?trainer=${user?._id}&userId=${role?.id}`

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded shadow-lg w-[500px]">
      <div className=' flex gap-2 mt-5 mx-8 pt-10'>
                <FacebookShareButton url={shareUrl} >
                    <FacebookIcon size={40} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={40} round />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={40} round />
                </WhatsappShareButton>
                <FacebookMessengerShareButton url={shareUrl}>
                    <FacebookMessengerIcon size={40} round />
                </FacebookMessengerShareButton>
                <EmailShareButton url={shareUrl}>
                    <EmailIcon size={40} round />
                </EmailShareButton>
            </div>
        <div className="px-10 pb-16 pt-2">
          <div className="flex justify-end w-full">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              className="border border-[#0ba593] py-1.5 pl-4 pr-[65px] outline-none w-full rounded-md mt-5"
            />
            <button
              onClick={() => setTestimonialsVisible(false)}
              className="absolute top-2 right-2 text-white bg-[#0ba593] focus:outline-none p-2 rounded-full"
            >
              <IoCloseSharp />
            </button>
          </div>
          {isLoading && (
            <div>
              <InvitationSkeleton></InvitationSkeleton>
              <InvitationSkeleton></InvitationSkeleton>
              <InvitationSkeleton></InvitationSkeleton>
            </div>
          )}
          {data?.data?.data?.map((user) => (
            <div
              key={user?._id}
              className="mt-5 flex justify-between items-center gap-2"
            >
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={
                    user?.profileImageUrl
                      ? `${user?.profileImageUrl}`
                      : defaultProfilePic
                  }
                  width={100}
                  className="w-10 h-10 object-cover rounded-full"
                  height={100}
                  alt="profile-image"
                />
                <p className="text-lg">
                  {user?.firstName} {user?.lastName}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleSentInvitation(user?._id)}
                  disabled={sentLoading}
                  className="px-2 py-1 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition"
                >
                  Send Invite {sentLoading && <Spin />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsModal;
