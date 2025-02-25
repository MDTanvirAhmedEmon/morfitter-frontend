"use client";
import Image from "next/image";
import { useState } from "react";
import ShareModal from "../Content/ShareModal";
import { useDeleteContentMutation } from "@/redux/features/content/contentApi";
import { message, Popconfirm } from "antd";
import defaultProfilePic from "../../assets/profile/profile_image.webp";
const MySingleContent = ({ content }) => {
  const shareUrl = `${typeof window !== "undefined" && window.location}`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [deleteContent, { isLoading }] = useDeleteContentMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const date = new Date(content?.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const confirm = () => {
    deleteContent(content?._id)
      .unwrap()
      .then(() => {
        message.success("Successfully Deleted");
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };

  return (
    <div className="px-3 mx-0 py-5">
      <div className=" px-2 md:px-5 py-10 border border-gray-300 shadow-[0px_0px_19px_0px_rgba(0,0,0,0.2)] rounded-2xl flex flex-col md:flex-row gap-5 ">
        {/* Post Details Section */}
        <div className=" w-full">
          <div className=" flex flex-col md:flex-row justify-end gap-4 md:gap-8">
            {/* <div className=" flex items-center gap-8">
                <Image src={`http://10.0.60.166:5000${content?.userInfo?.profileImageUrl}`} width={200} height={200} alt="Follower" className="w-28 h-24 rounded-lg " />
                <div className="">
                  <div className="text-lg md:text-xl font-semibold">{content?.userInfo?.firstName} {content?.userInfo?.lastName}</div>
                  <div className="flex items-center mt-1 gap-1">
                    <Image src={Calisthenics} width={0} height={0} alt="Calisthenics" />
                    <span className=" text-xl md:text-2xl text-secondary">{content?.specialism}</span>
                  </div>
                </div>
              </div> */}
            {/* Header Section */}
            <div className=" md:pt-3 flex justify-end">
              <div className="date text-lg">
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className=" mt-3 md:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl w-full overflow-hidden">
              {content?.imageUrl && (
                <Image
                  src={`http://10.0.60.166:5000${content?.imageUrl}`}
                  alt="Post Content"
                  width={500}
                  height={500}
                  className="w-full h-[450px] object-cover"
                />
              )}

              {content?.videoUrl && (
                <video
                  controls
                  className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
                >
                  <source
                    src={`http://10.0.60.166:5000${content?.videoUrl}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Description Part */}
            <div className="border border-gray-300 p-5 rounded-lg">
              <div className=" hidden md:block text-xl md:text-2xl font-semibold">
                {content?.title}
              </div>
              <div className="md:text-xl font-normal md:mt-5 text-gray-600 leading-7 tracking-wide">
                {content?.content}
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className=" flex justify-between items-center">
            <div className="btn-part flex gap-3 md:gap-12 items-center mt-6"></div>
            <div>
              <Popconfirm
                title="Delete the content"
                description="Are you sure to delete this content?"
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <button className=" text-white bg-red-500 rounded-md py-2 px-4 mt-4">
                  Delete
                </button>
              </Popconfirm>
            </div>
          </div>
          {/* {openComment &&
              <BlogComments></BlogComments>
            } */}
        </div>
      </div>
      <ShareModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        shareUrl={shareUrl}
      ></ShareModal>
    </div>
  );
};

export default MySingleContent;
