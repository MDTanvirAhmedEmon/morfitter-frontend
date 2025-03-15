"use client";
import { useUpdateSessionMutation } from "@/redux/features/session/sessionApi";
import { Form, Input, message, Modal, Select, Spin, Upload } from "antd";
import { useEffect, useState } from "react";

const EditSessionModal = ({
    handleEditOk,
    handleEditCancel,
    isEditModalOpen,
    session,
}) => {
    console.log(session);
    const [promoPic, setPromoPic] = useState(null);
    const [Video1, setVideo1] = useState(null);
    const [accessType, setAccessType] = useState(session?.accessType);
    const [frequency, setFrequency] = useState(session?.frequency);

    const [form] = Form.useForm();

    useEffect(() => {
        if (session) {
            form.setFieldsValue({
                fitnessFocus: session?.fitnessFocus || "",
                title: session?.title || "",
                access: session?.accessType || "",
                price: session?.price || "",
                trainingType: session?.sessionType || "",
                focus: session?.fitnessFocus || "",
            });
            setPromoPic(session?.promoPic || null);
            setVideo1(session?.video || null);
            setAccessType(session?.accessType || "free");
            setFrequency(session?.frequency || "weekly");
        }
    }, [session, form]);

    const [updateSession, { isLoading }] = useUpdateSessionMutation();


    const onFinish = (values) => {
        const formData = new FormData();
        console.log("Success:", values);
        const sessionData = {
            sessionType: values.trainingType,
            title: values.title,
            // sessionMode: values.,
            fitnessFocus: values.focus,
            accessType: values.access,
            membership_fee: Number(values.price || 0),
            ...(frequency && { frequency })
        };
        formData.append("image", promoPic);
        formData.append("video", Video1);
        formData.append("data", JSON.stringify(sessionData));
        updateSession({ id: session?._id, formData })
            .unwrap()
            .then(() => {
                message.success(`Session updated Successfully`);
                handleEditOk();
            })
            .catch((error) => {
                message.error(error?.data?.message);
            });
    };

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
        <Modal
            centered
            width={600}
            footer={false}
            open={isEditModalOpen}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
        >
            <Form form={form} layout="vertical" className="pt-3" onFinish={onFinish}>
                <div>
                    <h2 className=" text-2xl mb-8">Update Session Details</h2>
                </div>
                <div>
                    <Form.Item
                        name="trainingType"
                        className=""
                        rules={[{ required: true, message: "Please select training type!" }]}
                    >
                        <Select defaultValue={session?.accessType} placeholder="Training type">
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
                        rules={[{ required: true, message: "Please select fitness focus!" }]}
                    >
                        <Select defaultValue={session?.fitnessFocus} placeholder="Fitness focus">
                            {fitnessFocus.map((item) => (
                                <Select.Option key={item.name} value={item.name}>
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div>
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: "Please input content title!" }]}
                    >
                        <Input placeholder="Content title" className="w-full text-lg" />
                    </Form.Item>
                </div>

                <div className="flex items-center gap-4">
                    <div className="border border-greenColor text-[#c0c0c0] rounded-md px-2 py-2 flex justify-between items-center w-full">
                        {!promoPic && <p className="text-lg">Promo Image</p>}
                        <p className="text-sm text-gray-700">{promoPic && promoPic.name}</p>
                    </div>
                    <Upload
                        showUploadList={false}
                        maxCount={1}
                        accept="image/*"
                        beforeUpload={(file) => {
                            setPromoPic(file);
                            return false;
                        }}
                        className="bg-primary py-2 px-4 rounded-full font-semibold text-white cursor-pointer"
                    >
                        Upload
                    </Upload>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-6 my-6">
                    <p className="text-lg">Frequency</p>
                    <div className="flex gap-5 lg:gap-8 items-center">
                        <button
                            type="button"
                            onClick={() => setFrequency("weekly")}
                            className={`text-white rounded-full px-3 md:px-6 py-[3px] md:py-[6px] hover:bg-greenColor font-semibold md:text-lg ${frequency === "weekly" ? "bg-greenColor" : "bg-secondary"}`}
                        >
                            Weekly
                        </button>
                        <button
                            type="button"
                            onClick={() => setFrequency("fortnightly")}
                            className={`text-white rounded-full px-3 md:px-6 py-[3px] md:py-[6px] hover:bg-greenColor font-semibold md:text-lg ${frequency === "fortnightly" ? "bg-greenColor" : "bg-secondary"}`}
                        >
                            Fortnightly
                        </button>
                        <button
                            type="button"
                            onClick={() => setFrequency("monthly")}
                            className={`text-white rounded-full px-3 md:px-6 py-[3px] md:py-[6px] hover:bg-greenColor font-semibold md:text-lg ${frequency === "monthly" ? "bg-greenColor" : "bg-secondary"}`}
                        >
                            Monthly
                        </button>
                    </div>
                </div>

                <Form.Item
                    name="access"
                    className=""
                    rules={[{ required: true, message: "Please select access!" }]}
                >
                    <Select
                        onChange={(value) => {
                            setAccessType(value);
                            form.setFieldsValue({ access: value });
                        }}
                        placeholder="Access"
                        defaultValue={session?.accessType}
                    >
                        <Select.Option value="free">Free</Select.Option>
                        <Select.Option value="followers">Followers only</Select.Option>
                        <Select.Option value="membership">Membership</Select.Option>
                    </Select>
                </Form.Item>

                {accessType === "membership" && (
                    <Form.Item
                        name="price"
                        className=""
                        rules={[{ required: true, message: "Please enter a price!" }]}
                    >
                        <Input type="number" placeholder="Enter price" />
                    </Form.Item>
                )}

                <div className="flex items-center gap-4">
                    <div className="border border-greenColor text-[#c0c0c0] rounded-md px-2 py-2 flex justify-between items-center w-full">
                        {!Video1 && <p className="text-lg">Promo video</p>}
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
                        className="bg-primary py-2 px-4 rounded-full font-semibold text-white cursor-pointer"
                    >
                        Upload
                    </Upload>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-8 md:mt-10 md:text-lg leading-8 text-white font-bold bg-secondary hover:bg-greenColor md:py-2 px-6 md:px-8 rounded-full capitalize transition-all"
                    >
                        Update {isLoading && <Spin></Spin>}
                    </button>
                </div>
            </Form>
        </Modal>
    );
};

export default EditSessionModal;
