import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaThumbsUp } from "react-icons/fa";

function SingleContent({ competition }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-xl overflow-hidden">
      <Image
        src={competition?.image} 
        alt={competition?.title}
        className="w-full h-44 md:h-56 object-cover"
        width={500} 
        height={300}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
          {competition?.title}
        </h3>
        <p className="text-gray-600 mb-4">{competition?.description}</p>
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-1 gap-2 md:gap-0">
          <span className="flex items-center text-gray-700">
            <FaThumbsUp className="mr-2 text-xl text-[#0ba593']" />
            Total Likes:{" "}
            <strong className="ml-1">
             20
            </strong>
          </span>
          <Link href={`/moderation/${competition?._id}`}>
            <p className="flex items-center text-white bg-slate-600 rounded-lg shadow-lg px-4 py-2 cursor-pointer">
              Approve
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleContent;

