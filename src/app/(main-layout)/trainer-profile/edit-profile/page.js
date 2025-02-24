"use client";
import { Form, Input, InputNumber, message } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import regiserImg from "../../../../assets/register.png";
import circle from "../../../../assets/circle.svg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setInfo } from "@/redux/features/auth/registerSlice";

const PTEditProfile = () => {
    const { user, role } = useSelector((state) => state.auth);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const router = useRouter();

    const onFinish = (values) => {
        const { day, month, year } = values;
        // Validate day, month, and year
        if (!day || !month || !year) {
            message.error("Please provide a valid date of birth.");
            return;
        }
        // Construct ISO Date
        const dob = new Date(year, month - 1, day).toISOString();

        // Prepare registration data
        const TrainerRegistrationData = {
            firstName: values.name,
            lastName: values.surname,
            dob: dob,
            mobile: values.mobile,
            userName: values?.userName,
            password: values.password,
        };
        console.log("Registration Data of user ", TrainerRegistrationData);
        dispatch(setInfo(TrainerRegistrationData))

        // Validate profilePic
        if (!profilePic) {
            message.error("Please upload a profile picture.");
            return;
        }
    };

    return (
        <section className="py-8 md:py-16">
            <div className="xl:container mx-auto flex flex-col lg:flex-row gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] p-4 md:p-8 rounded-2xl">
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
                        Edit Trainer Info
                    </h1>

                    <Form
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            email: role?.email,
                            name: user?.firstName,
                            surname: user?.lastName,
                            mobile: user?.contactNo,
                            userName: user?.userName,
                            day: user?.dob ? new Date(user.dob).getDate() : null,
                            month: user?.dob ? new Date(user.dob).getMonth() + 1 : null,
                            year: user?.dob ? new Date(user.dob).getFullYear() : null,
                        }}
                        form={form}
                        className=" space-x-0 md:space-y-4"
                    >
                        {/* First Item (Title + Profile Picture) */}
                        <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
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
                                <Image
                                    src={circle}
                                    className=" absolute  w-[300px]"
                                    alt="circle"
                                    height={0}
                                    width={0}
                                />
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
                            <div className="grid grid-cols-3 gap-4">
                                <Form.Item
                                    name="day"
                                    rules={[
                                        { required: true, message: "Please enter the day!" },
                                        { type: "number", min: 1, max: 31, message: "Day must be between 1 and 31!" },
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
                                        { type: "number", min: 1, max: 12, message: "Month must be between 1 and 12!" },
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
                                        { type: "number", min: 1900, max: new Date().getFullYear(), message: `Year must be between 1900 and ${new Date().getFullYear()}!` },
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
                            </div>

                            {/* Mobile Number */}
                            <Form.Item
                                name="mobile"
                                className=" md:w-1/2"
                                rules={[{ required: true, message: "Please input your mobile number!" }]}
                            >
                                <Input placeholder="Mobile Number" prefix={<PhoneOutlined />} className="w-full" />
                            </Form.Item>
                        </div>

                        {/* Username & Password */}
                        <div className="">
                            <Form.Item
                                name="userName"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input placeholder="UserName" className="w-full" />
                            </Form.Item>
                        </div>

                        {/* Submit Button */}
                        <Form.Item>
                            <Link href={`/trainer-profile/edit-profile/2`}>
                                <button
                                    type="submit"
                                    className="bookBtn text-lg leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:"
                                >
                                    Next
                                </button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    );
};

// export default Register;
export default dynamic(() => Promise.resolve(PTEditProfile), { ssr: false });
