"use client"
import Image from 'next/image';
import logo1 from '../../../../assets/logo1.svg';
import logo2 from '../../../../assets/logo2.svg';
import logo3 from '../../../../assets/logo3.svg';
import logo4 from '../../../../assets/logo4.svg';
import logo5 from '../../../../assets/logo5.svg';
import logo6 from '../../../../assets/logo6.svg';
import logo7 from '../../../../assets/logo7.svg';
import logo8 from '../../../../assets/logo8.svg';
import logo9 from '../../../../assets/logo9.svg';
import { useState } from 'react';
import { ConfigProvider, Form, Input, Upload } from 'antd';
import { LuUpload } from "react-icons/lu";

const CreatingSession = () => {
    const [fileType, setFileType] = useState('audio');
    const [selectedLogos, setSelectedLogos] = useState([]);
    const [profilePic, setProfilePic] = useState(null);

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo2];

    const handleLogoClick = (index) => {
        setSelectedLogos((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((item) => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <section className=" py-14 px-3 md:px-0">
            <div className=" container mx-auto">

                <div className=" flex gap-2 md:gap-4 items-center">
                    <button onClick={() => setFileType('audio')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'audio' ? 'bg-greenColor' : 'bg-secondary'}`}>Audio</button>
                    <button onClick={() => setFileType('video')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'video' ? 'bg-greenColor' : 'bg-secondary'}`}>Video</button>
                    <button onClick={() => setFileType('content')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'content' ? 'bg-greenColor' : 'bg-secondary'}`}>Content</button>
                </div>
                <div className="flex gap-1 mt-8 overflow-x-auto ">
                    <div className="flex gap-1 flex-nowrap xl:flex-wrap">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                onClick={() => handleLogoClick(index)}
                                className={`flex items-center justify-center w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] px-7 text-center cursor-pointer ${selectedLogos.includes(index)
                                    ? 'border-4 border-greenColor shadow shadow-greenColor'
                                    : 'border-2 border-solid border-transparent'
                                    } rounded transition-all duration-300`}
                                style={{
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderImage: selectedLogos.includes(index)
                                        ? 'none'
                                        : 'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1', // Gradient for unselected logos
                                }}
                            >
                                <Image src={logo} alt={`Logo ${index + 1}`} height={170} width={170} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className=' w-full mt-10'>
                    <div className="border-2 border-[#d9d9d9] text-[#c0c0c0] rounded-md mb-6 px-2 py-1 flex justify-between items-center w-full">

                        {!profilePic && <p>Upload video or audio or image</p>}
                        <p className="text-sm text-gray-700">
                            {profilePic && profilePic}
                        </p>

                        <Upload

                            showUploadList={false}
                            maxCount={1}
                            beforeUpload={(file) => {
                                setProfilePic(file.name);
                                return false;
                            }}
                            className="cursor-pointer"
                        >
                            <LuUpload className="text-[#a3a3a3] h-8 w-8 p-1" />

                        </Upload>

                    </div>
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

                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="subject"
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
                                name="password"
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
                                <button type="primary" htmlType="submit" className=' bg-primary text-white px-12 py-1 rounded-full text-lg'>
                                    Submit
                                </button>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </div>

            </div>

        </section>
    );
};

export default CreatingSession;