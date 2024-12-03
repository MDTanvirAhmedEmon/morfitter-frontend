import { Input } from "antd";
import { BsSend } from "react-icons/bs";
import profileImage from '../../assets/content/follwing2.png'
import Image from "next/image";
import { useState } from "react";

const BlogComments = () => {
    const [replyComments, setReplyComments] = useState(false);

    return (
        <div className=" flex lg:gap-6">
            <div className=' lg:w-1/2'>
                <div className=" mt-5">
                    <Input placeholder="Add a comment..." suffix={<BsSend className=" cursor-pointer w-8 h-8 " />} />
                </div>

                {/* Comments */}
                <h2 className=" text-2xl font-semibold my-5">All Comments</h2>
                <div>
                    <div className=" flex items-center gap-2">
                        <Image className=" rounded-full w-14" src={profileImage} height={0} width={0} alt="profile" />
                        <div>
                            <p className=" text-lg font-semibold">Thila Palany</p>
                            <p className=" text-lg">Trainer</p>
                        </div>

                    </div>
                    <div className=" mt-3">
                        Whether you&apos;re a beginner or a seasoned athlete, our expert trainers will guide you every step of the way. Build strength, improve endurance, and boost your overall health with workouts designed just for you. Join our community and transform your body today!
                    </div>
                    <button onClick={() => setReplyComments(!replyComments)} className="bookBtn text-md font-medium leading-8 text-white mt-2 bg-secondary hover:bg-greenColor px-3 md:px-5 rounded-full capitalize transition-all">
                        Reply
                    </button>
                    {/* reply */}
                    {
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
                    }

                </div>
            </div>
            <div className=' lg:w-1/2 mt-5'>

            </div>
        </div>

    );
};

export default BlogComments;