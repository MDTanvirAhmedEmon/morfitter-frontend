import { Input } from "antd";
import { BsSend } from "react-icons/bs";
import defaultProfilePic from '../../assets/profile/profile_image.webp'
import Image from "next/image";
import { useState } from "react";
import { useDoCommentMutation, useGetAllCommentsQuery } from "@/redux/features/content/contentApi";

const BlogComments = ({ id }) => {
    const [comments, setComments] = useState('');

    const { data } = useGetAllCommentsQuery(id);
    console.log(data?.data);
    const [doComment, { isLoading }] = useDoCommentMutation();

    const handleComment = () => {
        const commentData = {
            text: comments,
            content_id: id
        }
        doComment(commentData).unwrap()
            .then(() => {
                setComments('')
            })
    }

    return (
        <div className=" flex lg:gap-6">
            <div className=' lg:w-1/2'>
                <div className=" mt-5">
                    <Input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Add a comment..." suffix={<BsSend onClick={handleComment} className=" cursor-pointer w-8 h-8 " />} />
                </div>

                {/* Comments */}
                <h2 className=" text-2xl font-semibold my-5">All Comments</h2>
                {
                    data?.data?.map((item) => (
                        <div key={item?._id} className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
                            <div className="flex items-center gap-4">
                                <Image
                                    className="rounded-full border border-gray-300"
                                    src={item?.user_image
                                        ? `${item?.user_image}`
                                        : defaultProfilePic}
                                    height={50}
                                    width={50}
                                    alt="profile"
                                />
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 capitalize">{item?.user_name}</p>
                                    <p className="text-sm text-gray-600">{item?.role}</p>
                                </div>
                            </div>
                            <div className="mt-3 text-gray-800 text-[15px] leading-relaxed">
                                {item?.text}
                            </div>
                        </div>
                    ))
                }


                {/* <button onClick={() => setReplyComments(!replyComments)} className="bookBtn text-md font-medium leading-8 text-white mt-2 bg-secondary hover:bg-greenColor px-3 md:px-5 rounded-full capitalize transition-all">
                        Reply
                    </button> */}
                {/* reply */}
                {/* {
                        replyComments &&
                        <div className=" mt-3 ml-14">
                            <div className=" my-5">
                                <Input placeholder="Add a comment..." suffix={<BsSend className=" cursor-pointer w-8 h-8 " />} />
                            </div>
                            <div className=" flex items-center gap-2">
                                <Image className=" rounded-full w-10" src={profileImage} height={0} width={0} alt="profile" />
                                <div>
                                    <p className=" text-md font-semibold">Thila Palany</p>
                                    <p className=" text-md">Trainer</p>
                                </div>
                            </div>
                            <div className=" mt-3">
                                Whether you&apos;re a beginner or a seasoned athlete, our expert trainers will guide you every step of the way. Build strength, improve endurance.
                            </div>
                            <button className="bookBtn text-md font-medium leading-8 text-white mt-2 bg-secondary hover:bg-greenColor px-3 md:px-5 rounded-full capitalize transition-all">
                                Reply
                            </button>
                        </div>
                    } */}
            </div>
            <div className=' lg:w-1/2 mt-5'>

            </div>
        </div>

    );
};

export default BlogComments;