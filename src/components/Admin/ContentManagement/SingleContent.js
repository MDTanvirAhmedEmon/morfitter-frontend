"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import profileImage from "../../../assets/profile/profile_image.webp";
import { useBlockUnblockContentMutation } from "@/redux/features/admin/contentManagement/contentManagementApi";
import { Button, message } from "antd";

function SingleContent({ item }) {
  const [blockUnblockContent] = useBlockUnblockContentMutation();

  const handleBlockUnblock = (id) => {
    blockUnblockContent(id)
      .unwrap()
      .then(() => {
        message.success(`Status updated successfuly`);
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-xl overflow-hidden">
      {item?.imageUrl && (
        <Image
          src={
            item?.imageUrl
              ? `http://10.0.60.166:5000${item?.imageUrl}`
              : profileImage
          }
          alt={item?.title}
          className="w-full h-44 md:h-56 object-cover"
          width={500}
          height={300}
        />
      )}

      {item?.videoUrl && (
        <video controls className="w-full rounded-lg ">
          <source
            src={`http://10.0.60.166:5000${item?.videoUrl}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
          {item?.title}
        </h3>
        <p className="text-gray-600 mb-4">{item?.description}</p>
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-1 gap-2 md:gap-0">
          <span className="flex items-center text-gray-700">
            <FaThumbsUp className="mr-2 text-xl text-[#0ba593']" />
            Total Likes: <strong className="ml-1">{item?.totalLikes}</strong>
          </span>
          <div className=" flex items-center gap-2">
            {item?.status === "blocked" ? (
              <button className=" bg-red-500 px-2 py-2 rounded-md capitalize text-white">
                {item?.status}
              </button>
            ) : (
              <button className=" bg-green-500 text-white px-2 py-2 rounded-md capitalize">
                {item?.status}
              </button>
            )}

            <p
              onClick={() => handleBlockUnblock(item?._id)}
              className="flex items-center text-white bg-slate-600 rounded-lg shadow-lg px-4 py-2 cursor-pointer"
            >
              {item?.status === "in-progress" ? "block" : "unblock"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleContent;
