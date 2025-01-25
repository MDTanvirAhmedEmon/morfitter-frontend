"use client";
import {
  Form,
  Input,
  Checkbox,
  Avatar,
  Upload,
  InputNumber,
  Button,
} from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import regiserImg from "../../../../assets/register.png";
import circle from "../../../../assets/circle.svg";
import Image from "next/image";
import { PiCamera } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";

const UserRegister = () => {
  const [profilePic, setProfilePic] = useState(null);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleProfilePicUpload = (e) => {
    setProfilePic(e.file.originFileObj);
  };
  const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : null;

  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const { day, month, year } = values;
    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    console.log("Date of Birth:", formattedDate);
  };

  return (
    <section className="py-8 md:py-20">
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
              <div className=" w-full">
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  className=" w-full"
                >
                  <Input
                    placeholder="Email"
                    suffix={
                      <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                    }
                    className="md:w-[70%]"
                  />
                </Form.Item>
                <Form.Item
                  name="title"
                  rules={[
                    { required: true, message: "Please input your title!" },
                  ]}
                  className=" md:w-[50%]"
                >
                  <Input
                    placeholder="Title"
                    suffix={
                      <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                    }
                    className="w-full"
                  />
                </Form.Item>
              </div>
              <div className="relative mb-8 md:-mt-6">
                <Image
                  src={circle}
                  className=" absolute  w-[300px]"
                  alt="circle"
                  height={0}
                  width={0}
                />
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
                rules={[
                  { required: true, message: "Please input your surname!" },
                ]}
              >
                <Input placeholder="Surname" className="w-full" />
              </Form.Item>
            </div>

            {/* Date of Birth */}
            <div className=" flex flex-col md:flex-row gap-4">
              {/* <div className=" md:w-1/2 grid grid-cols-3 gap-4"> */}
              <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                className="grid grid-cols-3 gap-4"
              >
                <Form.Item
                  name="day"
                  rules={[
                    { required: true, message: "Please enter the day!" },
                    {
                      type: "number",
                      min: 1,
                      max: 31,
                      message: "Day must be between 1 and 31!",
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Day"
                    min={1}
                    max={31}
                    style={{ width: "100%" }}
                    className="border-greenColor py-1.5 px-4 rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="month"
                  rules={[
                    { required: true, message: "Please enter the month!" },
                    {
                      type: "number",
                      min: 1,
                      max: 12,
                      message: "Month must be between 1 and 12!",
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Month"
                    min={1}
                    max={12}
                    style={{ width: "100%" }}
                       className="border-greenColor py-1.5 px-4 rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="year"
                  rules={[
                    { required: true, message: "Please enter the year!" },
                    {
                      type: "number",
                      min: 1900,
                      max: new Date().getFullYear(),
                      message: `Year must be between 1900 and ${new Date().getFullYear()}!`,
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Year"
                    min={1900}
                    max={new Date().getFullYear()}
                    style={{ width: "100%" }}
                       className="border-greenColor py-1.5 px-4 rounded-lg"
                  />
                </Form.Item>
              </Form>
              {/* </div> */}

              {/* Mobile Number */}
              <Form.Item
                name="mobile"
                className=" md:w-1/2"
                rules={[
                  {
                    required: true,
                    message: "Please input your mobile number!",
                  },
                ]}
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
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Username" className="w-full" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password" className="w-full" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <Form.Item
                name="country"
                rules={[
                  { required: true, message: "Please input your country!" },
                ]}
              >
                <Input placeholder="Country" className="w-full" />
              </Form.Item>

              <Form.Item
                name="city"
                rules={[{ required: true, message: "Please input your city!" }]}
                hasFeedback
              >
                <Input placeholder="City" className="w-full" />
              </Form.Item>
            </div>

            {/* Terms Checkbox */}
            <Form.Item
              name="terms"
              className=""
              valuePropName="checked"
              rules={[
                { required: true, message: "You must agree to the terms!" },
              ]}
            >
              <Checkbox className="">
                I am 18+ and have read and agree with the Terms & Conditions and
                Privacy
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Link href={`/auth/user-register/user-register-2`}>
                <button
                  type="submit"
                  className="bookBtn text-lg leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:"
                >
                  Next
                </button>
              </Link>
            </Form.Item>
          </Form>
          <p className=" mt-6">
            Already have an account?{" "}
            <Link className=" text-primary font-semibold" href={`/auth/login`}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

// export default Register;
export default dynamic(() => Promise.resolve(UserRegister), {
  ssr: false,
});
