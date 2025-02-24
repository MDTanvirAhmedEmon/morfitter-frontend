"use client";
import { Form, Input, Checkbox, Avatar, Upload, InputNumber, message } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import regiserImg from "../../../../assets/register.png";
import circle from "../../../../assets/circle.svg";
import Image from "next/image";
import { PiCamera } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo, setProfile } from "@/redux/features/auth/registerSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EditProfile = () => {
  const { user, role } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        email: role?.email,
        title: user?.title,
        userName: user?.userName,
        name: user?.firstName,
        surname: user?.lastName,
        day: user?.dob ? new Date(user.dob).getDate() : undefined,
        month: user?.dob ? new Date(user.dob).getMonth() + 1 : undefined,
        year: user?.dob ? new Date(user.dob).getFullYear() : undefined,
        mobile: user?.contactNo,
        country: user?.country,
        city: user?.city,
      });
    }
  }, [user, form]);


  const onFinish = (values) => {
    const { day, month, year } = values; 

    const dob = new Date(year, month - 1, day).toISOString();

    // Prepare registration data
    const registrationData = {
      email: values.email,
      title: values.title,
      firstName: values.name,
      lastName: values.surname,
      dob: dob,
      mobile: values.mobile,
      userName: values.userName,
      country: values.country,
      city: values.city,
    };

    dispatch(setInfo(registrationData));
      router.push('/profile/edit-profile/edit-profile-2');
    
  };

  return (
    <section className="py-8 md:py-16">
      <div className="xl:container mx-auto flex flex-col lg:flex-row gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] p-4 md:p-8 rounded-2xl">
        {/* Image Section */}
        <div className="lg:w-1/2 rounded-lg overflow-hidden">
          <Image
            height={0}
            width={0}
            src={regiserImg}
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center md:p-8 rounded-lg">
          <h1 className="text-2xl md:text-5xl font-bold mb-8">Edit Info</h1>

          <Form
            form={form} 
            name="register"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
              <div className="w-full">
                <Form.Item
                  name="userName"
                  rules={[{ required: true, message: "Please input your username!" }]}
                >
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                  name="title"
                  rules={[{ required: true, message: "Please input your title!" }]}
                >
                  <Input
                    placeholder="Title"
                    suffix={<IoMdArrowDropdown className="w-6 h-6 text-greenColor" />}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="surname"
                rules={[{ required: true, message: "Please input your surname!" }]}
              >
                <Input placeholder="Surname" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Form.Item name="day">
                <InputNumber placeholder="Day" min={1} max={31} />
              </Form.Item>
              <Form.Item name="month">
                <InputNumber placeholder="Month" min={1} max={12} />
              </Form.Item>
              <Form.Item name="year">
                <InputNumber placeholder="Year" min={1900} max={new Date().getFullYear()} />
              </Form.Item>
            </div>

            <Form.Item name="mobile" rules={[{ required: true, message: "Please input your mobile number!" }]}>
              <Input placeholder="Mobile Number" prefix={<PhoneOutlined />} />
            </Form.Item>

            {/* Email */}
            <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
              <Input placeholder="Email" />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item name="country">
                <Input placeholder="Country" />
              </Form.Item>
              <Form.Item name="city">
                <Input placeholder="City" />
              </Form.Item>
            </div>

            <Form.Item>
              <button
                type="submit"
                className="bookBtn text-lg leading-8 text-white bg-secondary hover:bg-greenColor py-2 px-6 rounded-full capitalize transition-all"
              >
                Next
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(EditProfile), { ssr: false });
