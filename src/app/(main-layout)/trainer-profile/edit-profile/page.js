"use client";
import { Form, Input, Select, message } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import regiserImg from "../../../../assets/register.png";
import Image from "next/image";
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
        if (!day || !month || !year) {
            message.error("Please provide a valid date of birth.");
            return;
        }
        const dob = new Date(year, month - 1, day).toISOString();

        const TrainerRegistrationData = {
            title: values?.title,
            firstName: values.name,
            lastName: values.surname,
            dob: dob,
            email: values.email,
            mobile: values.mobile,
            // userName: values?.userName,
        };
        dispatch(setInfo(TrainerRegistrationData));
        router.push("/trainer-profile/edit-profile/edit-profile-2");
    };

    return (
        <section className="py-8 md:py-16">
            <div className="xxl:w-[1340px] mx-auto flex flex-col lg:flex-row gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] p-4 xxl:p-8 rounded-2xl">
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

                {/* Form Section */}
                <div className="lg:w-1/2 flex flex-col justify-center md:p-8 rounded-lg">
                    <h1 className="text-2xl md:text-5xl font-bold mb-8">
                        Edit Trainer Info
                    </h1>

                    <Form
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            title: user?.title,
                            email: role?.email,
                            name: user?.firstName,
                            surname: user?.lastName,
                            mobile: user?.contactNo,
                            // userName: user?.userName,
                            day: user?.dob ? new Date(user.dob).getDate() : null,
                            month: user?.dob ? new Date(user.dob).getMonth() + 1 : null,
                            year: user?.dob ? new Date(user.dob).getFullYear() : null,
                        }}
                        form={form}
                        layout="vertical"
                    >
                        {/* Title */}
                        <Form.Item
                            name="title"
                            label="Title"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            className="w-[180px]"
                        >
                            <Select
                                placeholder="Select Title"
                                suffixIcon={<IoMdArrowDropdown className="w-6 h-6 text-greenColor" />}
                                className="w-full"
                            >
                                <Select.Option value="Mr">Mr</Select.Option>
                                <Select.Option value="Mrs">Mrs</Select.Option>
                                <Select.Option value="Ms">Ms</Select.Option>
                                <Select.Option value="Miss">Miss</Select.Option>
                                <Select.Option value="Dr">Dr</Select.Option>
                            </Select>
                        </Form.Item>

                        {/* Name & Surname */}
                        <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                                name="name"
                                label="Name"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: "Please input your first name!" }]}
                            >
                                <Input placeholder="Name" className="w-full" />
                            </Form.Item>

                            <Form.Item
                                name="surname"
                                label="Surname"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: "Please input your surname!" }]}
                            >
                                <Input placeholder="Surname" className="w-full" />
                            </Form.Item>
                        </div>

                        {/* Date of Birth */}
                        <div className="grid grid-cols-3 gap-4">
                            <Form.Item name="day" label="Day" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                <Select placeholder="Day" suffixIcon={<IoMdArrowDropdown className="w-6 h-6 text-greenColor" />} className="w-full">
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <Select.Option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item name="month" label="Month" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                <Select placeholder="Month" suffixIcon={<IoMdArrowDropdown className="w-6 h-6 text-greenColor" />} className="w-full">
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <Select.Option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item name="year" label="Year" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                <Select placeholder="Year" suffixIcon={<IoMdArrowDropdown className="w-6 h-6 text-greenColor" />} className="w-full">
                                    {Array.from(
                                        { length: new Date().getFullYear() - 1925 + 1 },
                                        (_, i) => {
                                            const year = new Date().getFullYear() - i;
                                            return (
                                                <Select.Option key={year} value={year}>
                                                    {year}
                                                </Select.Option>
                                            );
                                        }
                                    )}
                                </Select>
                            </Form.Item>
                        </div>

                        {/* Mobile Number & Email */}
                        <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                                name="mobile"
                                label="Mobile Number"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: "Please input your mobile number!" }]}
                            >
                                <Input
                                    placeholder="Mobile Number"
                                    prefix={<PhoneOutlined />}
                                    className="w-full"
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Email"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: "Please input your email!" }]}
                            >
                                <Input
                                    placeholder="Email"
                                    className="w-full"
                                />
                            </Form.Item>
                        </div>

                        {/* Username */}
                        {/* <Form.Item
                            name="userName"
                            label="Username"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            rules={[{ required: true, message: "Please input your username!" }]}
                        >
                            <Input placeholder="Username" className="w-full" />
                        </Form.Item> */}

                        {/* Submit Button */}
                        <Form.Item>
                            <button
                                type="submit"
                                className="bookBtn text-lg leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:"
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

export default dynamic(() => Promise.resolve(PTEditProfile), { ssr: false });
