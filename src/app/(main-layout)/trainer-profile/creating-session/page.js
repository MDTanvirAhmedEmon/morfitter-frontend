"use client";
import { DatePicker, Form, Input, message, Select, Upload } from "antd";
import regiserImg from "../../../../assets/fitness2.png";
import Image from "next/image";
import { useState } from "react";
// import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import { useCreateSessionMutation } from "@/redux/features/session/sessionApi";
import { useRouter } from "next/navigation";
// import { LuUpload } from "react-icons/lu";

const CreatingSession = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [promoPic, setPromoPic] = useState(null);
  const [Video1, setVideo1] = useState(null);
  const [accessType, setAccessType] = useState(null);
  // const [Video2, setVideo2] = useState(null);
  // const [Video3, setVideo3] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [createSession, { isLoading }] = useCreateSessionMutation();
  const onFinish = (values) => {
    const formData = new FormData();
    console.log("Success:", values);
    const sessionData = {
      sessionType: values.trainingType,
      title: values.title,
      // sessionMode: values.,
      fitnessFocus: values.focus,
      accessType: values.access,
      frequency: frequency,
      membership_fee: values.price || 0,
    };
    formData.append("image", promoPic);
    formData.append("video", Video1);
    formData.append("data", JSON.stringify(sessionData));
    createSession(formData)
      .unwrap()
      .then(() => {
        message.success(`Session Created Successfully`);
        router.push(`/trainer-profile`);
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };

  // const [faceToFace, setFaceToFace] = useState(null);
  // const [consultation, setConsultation] = useState(null);

  // const onChange = (date, dateString) => {
  //     console.log(date, dateString);
  // };
  const fitnessFocus = [
    { name: "Boxercise" },
    { name: "Calisthenics" },
    { name: "Circuit Training" },
    { name: "Core Strength" },
    { name: "Fat Burners" },
    { name: "Flexibility & Mobility" },
    { name: "Zumba" },
    { name: "HIIT" },
    { name: "Pilates" },
    { name: "Others" },
  ];

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
            className="w-full h-[80%] object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 flex flex-col justify-center md:p-8 rounded-lg ">
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            className=" space-x-0 md:space-y-4"
          >
            <div>
              <Form.Item
                name="trainingType"
                className=""
                rules={[
                  { required: true, message: "Please select your surname!" },
                ]}
              >
                <Select placeholder={<p className=" text-lg">Training type</p>}>
                  <Select.Option value="recorded">Recorded</Select.Option>
                  <Select.Option value="live_group">Live Group</Select.Option>
                  <Select.Option value="1on1">1 On 1 Session</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="focus"
                className=""
                rules={[
                  { required: true, message: "Please select fitness focus!" },
                ]}
              >
                <Select placeholder={<p className=" text-lg">Fitness focus</p>}>
                  {fitnessFocus.map((item) => (
                    <Select.Option key={item.name} value={item.name}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            {/* Second Item (Name + Surname) */}
            <div className="">
              <Form.Item
                name="title"
                rules={[
                  { required: true, message: "Please input content title!" },
                ]}
              >
                <Input placeholder="Content title" className="w-full" />
              </Form.Item>
            </div>
            <div className=" flex items-center gap-4">
              <div className="border border-greenColor text-[#c0c0c0] rounded-md  px-2 py-2 flex justify-between items-center w-full">
                {!promoPic && <p>Promo Image</p>}
                <p className="text-sm text-gray-700">
                  {promoPic && promoPic.name}
                </p>
              </div>
              <Upload
                showUploadList={false}
                maxCount={1}
                accept="image/*"
                beforeUpload={(file) => {
                  setPromoPic(file);
                  return false;
                }}
                className=" bg-primary py-2 px-4 rounded-full font-semibold text-white cursor-pointer"
              >
                Upload
              </Upload>
            </div>

            <div className="  flex flex-col md:flex-row md:items-center gap-4 lg:gap-6 my-20">
              <p className=" text-lg ">Frequency</p>
              <div className=" flex gap-5 lg:gap-8 items-center">
                <button
                  type="button"
                  onClick={() => setFrequency("weekly")}
                  className={` text-white rounded-full px-3 md:px-6 md:py-[6px] hover:bg-greenColor font-semibold md:text-lg ${
                    frequency === "Weekly" ? "bg-greenColor" : "bg-secondary"
                  }`}
                >
                  Weekly
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("fortnightly")}
                  className={` text-white rounded-full px-3 md:px-6 md:py-[6px] hover:bg-greenColor font-semibold md:text-lg ${
                    frequency === "Fortnightly"
                      ? "bg-greenColor"
                      : "bg-secondary"
                  }`}
                >
                  Fortnightly
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={` text-white rounded-full px-3 md:px-6 md:py-[6px] hover:bg-greenColor font-semibold md:text-lg ${
                    frequency === "Monthly" ? "bg-greenColor" : "bg-secondary"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* <Form.Item
                            name="startDate"
                            className=""
                            rules={[{ required: true, message: "Please select start date!" }]}
                        >
                            <div className=" flex items-center gap-3">
                                <p className=" text-lg w-[16%]">Start Date</p>
                                <DatePicker className=" w-full" onChange={onChange} />
                            </div>

                        </Form.Item> */}

            <Form.Item
              name="access"
              className=""
              rules={[{ required: true, message: "Please select access!" }]}
            >
              <div className=" flex items-center gap-3">
                <p className=" text-lg w-[16%]">Access</p>
                <Select
                  onChange={(value) => {
                    setAccessType(value);
                    form.setFieldsValue({ access: value });
                  }}
                  placeholder={<p className=" text-lg">Access</p>}
                >
                  <Select.Option value="free">Free</Select.Option>
                  <Select.Option value="followers">
                    Followers only
                  </Select.Option>
                  <Select.Option value="membership">Membership</Select.Option>
                </Select>
              </div>
            </Form.Item>

            {accessType === "membership" && (
              <Form.Item
                name="price"
                className=""
                rules={[{ required: true, message: "Please select price!" }]}
              >
                <div className=" flex items-center gap-3">
                  <p className=" text-lg w-[16%]">Price</p>
                  <Input type="number" placeholder="Enter price" className="" />
                </div>
              </Form.Item>
            )}
            <div className=" flex items-center gap-4">
              <div className="border border-greenColor text-[#c0c0c0] rounded-md  px-2 py-2 flex justify-between items-center w-full">
                {!Video1 && <p>Promo video</p>}
                <p className="text-sm text-gray-700">{Video1 && Video1.name}</p>
              </div>
              <Upload
                showUploadList={false}
                maxCount={1}
                accept="video/*"
                beforeUpload={(file) => {
                  setVideo1(file);
                  return false;
                }}
                className=" bg-primary py-2 px-4 rounded-full font-semibold text-white cursor-pointer"
              >
                Upload
              </Upload>
            </div>

            <div className=" flex justify-end">
              {/* <Link href={`/trainer-profile`}> */}
              <button
                disabled={isLoading}
                type="submit"
                className=" md:text-lg leading-8 text-white bg-secondary hover:bg-greenColor md:py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:"
              >
                Enter
              </button>
              {/* </Link> */}
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CreatingSession;
