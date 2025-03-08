"use client"
import { ConfigProvider, Form, Input, message, Modal, Spin, Upload } from "antd";
import Image from "next/image";
import { LuUpload } from "react-icons/lu";
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import logo5 from '../../assets/logo5.svg';
import logo6 from '../../assets/logo6.svg';
import logo7 from '../../assets/logo7.svg';
import logo8 from '../../assets/logo8.svg';
import logo9 from '../../assets/logo9.svg';
import { useEffect, useState } from 'react';
import { useGetSingleContentQuery, useUpdateContentMutation } from '@/redux/features/content/contentApi';
import { useForm } from 'antd/es/form/Form';
import { useRouter } from 'next/navigation';

const EditMyContentModal = ({ isModalOpen, handleOk, handleCancel, id }) => {
    console.log(id);
    const { data } = useGetSingleContentQuery(id);
    console.log('data from db', data);
    const [fileType, setFileType] = useState('audio');
    const [form] = useForm();
    const router = useRouter();
    const [selectedLogos, setSelectedLogos] = useState(null);

    useEffect(() => {
        setSelectedLogos(data?.data?.specialism)
        if (data?.data) {
            form.setFieldsValue({
                title: data.data.title,
                content: data.data.content,
            });
            setSelectedLogos(data.data.specialism);
        }
    }, [data, form])

    const [profilePic, setProfilePic] = useState(null);

    const handleProfilePicUpload = (e) => {
        setProfilePic(e.file.originFileObj);
    };
    const interests = [
        { name: "Boxercise", icon: logo1 },
        { name: "Calisthenics", icon: logo2 },
        { name: "Circuit Training", icon: logo3 },
        { name: "Core Strength", icon: logo4 },
        { name: "Fat Burners", icon: logo5 },
        { name: "Flexibility & Mobility", icon: logo6 },
        { name: "Zumba", icon: logo7 },
        { name: "HIIT", icon: logo8 },
        { name: "Pilates", icon: logo9 },
    ];

    // const handleLogoClick = (index) => {
    //     setSelectedLogos((prevSelected) =>
    //         prevSelected.includes(index)
    //             ? prevSelected.filter((item) => item !== index)
    //             : [...prevSelected, index]
    //     );
    // };
    const handleLogoClick = (index) => {
        setSelectedLogos(index);
    };

    const [updateContent, { isLoading }] = useUpdateContentMutation();


    const onFinish = (values) => {

        if (!selectedLogos) {
            message.warning('Please Select Specialism')
            return
        }
        const finalData = {
            title: values.title,
            content: values.content,
            specialism: selectedLogos,
            status: "in-progress"
        }
        const formData = new FormData();
        if (profilePic) {
            formData.append('file', profilePic)
        }
        formData.append('data', JSON.stringify(finalData))
        updateContent({id,formData}).unwrap()
            .then(() => {
                message.success('Content Updated Successfully')
                setProfilePic(null)
                form.resetFields()
                setSelectedLogos(null)
                handleOk()
                router.push(`/trainer-profile/my-content`)
            })
            .catch((error) => {
                message.error(error?.data?.message)
            })
    };
    const hasMedia = data?.data?.imageUrl || data?.data?.videoUrl;

    return (
        <Modal centered footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <h2 className=" text-2xl font-semibold">Edit Content</h2>
            <section className=" px-3 xxl:px-0">
                <div className="mx-auto">

                    {/* <div className=" flex gap-2 md:gap-4 items-center">
                        <button onClick={() => setFileType('audio')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'audio' ? 'bg-greenColor' : 'bg-secondary'}`}>Audio</button>
                        <button onClick={() => setFileType('video')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'video' ? 'bg-greenColor' : 'bg-secondary'}`}>Video</button>
                        <button onClick={() => setFileType('content')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'content' ? 'bg-greenColor' : 'bg-secondary'}`}>Content</button>
                    </div> */}
                    <div className="flex gap-1 mt-8 overflow-x-auto ">
                        <div className="flex gap-1 flex-nowrap xl:flex-wrap">
                            {interests.map((logo, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleLogoClick(logo.name)}
                                    className={`flex items-center justify-center w-[100px] h-[100px] px-7 text-center cursor-pointer ${selectedLogos === logo.name
                                        ? "border-4 border-greenColor shadow shadow-greenColor"
                                        : "border-2 border-transparent"
                                        } rounded transition-all duration-300`}
                                    style={{
                                        borderWidth: "2px",
                                        borderStyle: "solid",
                                        borderImage: selectedLogos === logo.name
                                            ? "none"
                                            : "linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1", // Gradient for unselected logos
                                    }}
                                >
                                    <Image
                                        src={logo.icon}
                                        alt={`Logo ${logo.name}`}
                                        height={170}
                                        width={170}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=' w-full mt-10'>
                        {
                            hasMedia &&
                            <div className="border-2 border-[#d9d9d9] text-[#c0c0c0] rounded-md mb-6 px-2 py-1 flex justify-between items-center w-full">
                                {!profilePic && <p>Upload video or audio or image</p>}
                                <p className="text-sm text-gray-700">
                                    {profilePic && profilePic.name}
                                </p>

                                <Upload

                                    showUploadList={false}
                                    maxCount={1}
                                    onChange={handleProfilePicUpload}
                                    className="cursor-pointer"
                                >
                                    <LuUpload className="text-[#a3a3a3] h-8 w-8 p-1" />

                                </Upload>

                            </div>
                        }

                        <ConfigProvider
                            theme={{
                                components: {
                                    Input: {
                                        "colorBorder": "#d9d9d9",
                                        "hoverBorderColor": "rgb(11,165,147)",
                                        "activeBorderColor": "rgb(11,165,147)",
                                        "lineWidth": 2
                                    },
                                },
                            }}
                        >
                            <Form
                                name="basic"
                                form={form}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input subject!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='Enter subject line' />
                                </Form.Item>

                                <Form.Item
                                    name="content"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your content/text!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea placeholder='Add additional content/text' />
                                </Form.Item>


                                <Form.Item className=' flex justify-center'>
                                    <button disabled={isLoading} type="primary" htmlType="submit" className=' bg-primary text-white px-12 py-1 rounded-full text-lg'>
                                        Submit {isLoading && <Spin />}
                                    </button>
                                </Form.Item>
                            </Form>
                        </ConfigProvider>
                    </div>

                </div>

            </section>
        </Modal>
    );
};

export default EditMyContentModal;