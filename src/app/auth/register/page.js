'use client'
import { Form, Input, Checkbox, Avatar, Upload } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import regiserImg from '../../../assets/register.png'
import circle from '../../../assets/circle.svg'
import Image from "next/image";
import { PiCamera } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [profilePic, setProfilePic] = useState(null);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleProfilePicUpload = (e) => {
    setProfilePic(e.file.originFileObj);
  };
  const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : null;


  return (
    <section className="py-20">
      <div className="xl:container mx-auto flex flex-col lg:flex-row gap-4 shadow-2xl p-4 md:p-8 rounded-2xl">
        {/* Image Section */}
        <div className="lg:w-1/2 rounded-lg  overflow-hidden ">
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
            Register for Free
          </h1>

          <Form
            name="register"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            className=" space-x-0 md:space-y-4"
          >
            {/* First Item (Title + Profile Picture) */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-4 md:mb-10">
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

              <div className="relative mb-8 md:-mt-6">
                <Image src={circle} className=" absolute  w-[300px]" alt="circle" height={0} width={0} /> 
                <Avatar
                  size={140}
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
            </div>

            {/* Second Item (Name + Surname) */}
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Name" className="w-full" />
              </Form.Item>

              <Form.Item
                name="surname"
                rules={[{ required: true, message: "Please input your surname!" }]}
              >
                <Input placeholder="Surname" className="w-full" />
              </Form.Item>
            </div>

            {/* Date of Birth */}
            <div className=" flex flex-col md:flex-row gap-4">
              <div className=" md:w-1/2 grid grid-cols-3 gap-4">
                <Form.Item
                  name="dobDay"
                  rules={[{ required: true, message: "Please input your day of birth!" }]}
                >
                  <Input suffix={<IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />} placeholder="DD" className="w-full" />
                </Form.Item>

                <Form.Item
                  name="dobMonth"
                  rules={[{ required: true, message: "Please input your month of birth!" }]}
                >
                  <Input suffix={<IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />} placeholder="MM" className="w-full" />
                </Form.Item>

                <Form.Item
                  name="dobYear"
                  rules={[{ required: true, message: "Please input your year of birth!" }]}
                >
                  <Input suffix={<IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />} placeholder="YYYY" className="w-full" />
                </Form.Item>
              </div>

              {/* Mobile Number */}
              <Form.Item
                name="mobile"
                className=" md:w-1/2"
                rules={[{ required: true, message: "Please input your mobile number!" }]}
              >
                <Input
                  placeholder="Mobile Number"
                  prefix={<PhoneOutlined />}
                  className="w-full"
                />
              </Form.Item>
            </div>
            {/* Username & Password */}
            <div className="grid grid-cols-2 gap-4 ">
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                <Input placeholder="Username" className="w-full" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
                hasFeedback
              >
                <Input.Password placeholder="Password" className="w-full" />
              </Form.Item>
            </div>

            {/* Terms Checkbox */}
            <Form.Item
              name="terms"
              className=""
              valuePropName="checked"
              rules={[{ required: true, message: "You must agree to the terms!" }]}
            >
              <Checkbox className="">
                I am 18+ and have read and agree with the Terms & Conditions and Privacy
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <button type="submit" className="bookBtn text-lg font-medium leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:">
                Submit
              </button>
            </Form.Item>
          </Form>
          <p className=" mt-6">Already have an account? <Link className=" text-primary font-semibold" href={`/auth/login`}>Log In</Link></p>
        </div>
      </div>
    </section>
  );
};

// export default Register;
export default dynamic(() => Promise.resolve(Register), {
  ssr: false,
});