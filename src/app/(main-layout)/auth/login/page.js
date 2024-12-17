'use client'
import { Form, Input, Checkbox, Avatar, Upload } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import regiserImg from '../../../assets/register.png'
import Image from "next/image";
import { PiCamera } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";

const LogIn = () => {

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    return (
        <section className="py-20">
            <div className="xl:container mx-auto flex flex-col lg:flex-row gap-4 shadow-2xl p-4 md:p-8 rounded-2xl">
                {/* Image Section */}
                <div className="lg:w-1/2 rounded-lg overflow-hidden ">
                    <Image
                        height={0}
                        width={0}
                        src={regiserImg}
                        alt="Register"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="lg:w-1/2 flex flex-col justify-center md:p-8 rounded-lg ">
                    <h1 className="text-2xl md:text-5xl font-bold  mb-8">
                        Log In
                    </h1>

                    <Form
                        name="register"
                        onFinish={onFinish}
                        initialValues={{ remember: true }}
                        className=" space-x-0 md:space-y-4"
                    >
                        {/* First Item (Title + Profile Picture) */}
                        <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-4 md:mb-0">
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: "Please input your email!" }]}
                                className=" w-full"
                            >
                                <Input
                                    placeholder="Email"
                                    suffix={<IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />}
                                    className="w-full"
                                />
                            </Form.Item>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-4 md:mb-10">
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                                className=" w-full"
                            >
                                <Input.Password
                                    placeholder="Password"
                                    suffix={<IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />}
                                    className="w-full"
                                />
                            </Form.Item>
                        </div>

                        {/* Submit Button */}
                        <Form.Item>
                            <Link href={`/`}>
                                <button type="submit" className="bookBtn text-lg font-medium leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:">
                                    Log In
                                </button>
                            </Link>
                        </Form.Item>
                    </Form>
                    <p className=" mt-6">Don&apos;t have an account? <Link className=" text-primary font-semibold" href={`/auth/register`}>Register</Link></p>
                </div>
            </div>
        </section>
    );
};

// export default Register;
export default dynamic(() => Promise.resolve(LogIn), {
    ssr: false,
});