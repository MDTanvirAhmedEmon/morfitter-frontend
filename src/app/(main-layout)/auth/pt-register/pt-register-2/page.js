'use client'
import { ConfigProvider, Form, Input, Select } from "antd";
import dynamic from "next/dynamic";
import regiserImg from '../../../../../assets/fitness2.png'
import Image from "next/image";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import logo1 from '../../../../../assets/logo1.svg';
import logo2 from '../../../../../assets/logo2.svg';
import logo3 from '../../../../../assets/logo3.svg';
import logo4 from '../../../../../assets/logo4.svg';
import logo5 from '../../../../../assets/logo5.svg';
import logo6 from '../../../../../assets/logo6.svg';
import logo7 from '../../../../../assets/logo7.svg';
import logo8 from '../../../../../assets/logo8.svg';
import logo9 from '../../../../../assets/logo9.svg';
import Link from "next/link";


const PTRegister2 = () => {
    const [selectedLogos, setSelectedLogos] = useState([]);
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const handleProfilePicUpload = (e) => {
        setProfilePic(e.file.originFileObj);
    };
    const [onlineSession, setOnlineSession] = useState(null);
    const [faceToFace, setFaceToFace] = useState(null);
    const [consultation, setConsultation] = useState(null);

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
    const handleLogoClick = (index) => {
        setSelectedLogos((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((item) => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });
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
                        className="w-full h-[80%] object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="lg:w-1/2 flex flex-col justify-center md:p-8 rounded-lg ">
                    <Form
                        name="register"
                        onFinish={onFinish}
                        initialValues={{ remember: true }}
                        className=" space-x-0 md:space-y-4"
                    >
                        {/* Second Item (Name + Surname) */}
                        <div className="grid md:grid-cols-2 md:gap-4">
                            <Form.Item
                                name="country"
                                rules={[{ required: true, message: "Please input your country!" }]}
                            >
                                <Input placeholder="Country" className="w-full" />
                            </Form.Item>

                            <Form.Item
                                name="zip"
                                rules={[{ required: true, message: "Please input your zip code!" }]}
                            >
                                <Input placeholder="Postcode or Zip code" className="w-full" />
                            </Form.Item>
                        </div>

                        <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                            <p className=' text-lg md:w-1/2'>I condact online sessions:</p>
                            <div className=" w-1/2 flex gap-5 lg:gap-8 items-center">
                                <button type="button" onClick={() => setOnlineSession('Yes')} className={` text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${onlineSession === 'Yes' ? 'bg-greenColor' : 'bg-secondary'}`}>Yes</button>
                                <button type="button" onClick={() => setOnlineSession('No')} className={` text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${onlineSession === 'No' ? 'bg-greenColor' : 'bg-secondary'}`}>No</button>
                            </div>
                        </div>

                        <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                            <p className=' text-lg md:w-1/2'>I condact face to face sessions:</p>
                            <div className=" w-1/2 flex gap-5 lg:gap-8 items-center">
                                <button type="button" onClick={() => setFaceToFace('Yes')} className={` text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${faceToFace === 'Yes' ? 'bg-greenColor' : 'bg-secondary'}`}>Yes</button>
                                <button type="button" onClick={() => setFaceToFace('No')} className={` text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${faceToFace === 'No' ? 'bg-greenColor' : 'bg-secondary'}`}>No</button>
                            </div>
                        </div>
                        <div>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        "Select": {
                                            "activeBorderColor": "rgb(11,165,147)",
                                            "hoverBorderColor": "rgb(11,165,147)",
                                            "colorPrimary": "rgb(11,165,147)",
                                            "controlHeight": 40,
                                            "fontSize": 16,
                                            "colorBorder": "rgb(11,165,147)"
                                        }
                                    },
                                }}
                            >

                                <Form.Item
                                    name="surname"
                                    className=" md:w-1/2"
                                    rules={[{ required: true, message: "Please select your surname!" }]}
                                >
                                    <Select placeholder={<p className=" text-lg">Radius<span className=" text-sm">(If yes face to face sessions)</span></p>}>
                                        <Select.Option value="1m">1m</Select.Option>
                                        <Select.Option value="2m">2m</Select.Option>
                                        <Select.Option value="3m">3m</Select.Option>
                                        <Select.Option value="4m">4m</Select.Option>
                                        <Select.Option value="5m">5m</Select.Option>
                                        <Select.Option value="6m">6m</Select.Option>
                                        <Select.Option value="7m">7m</Select.Option>
                                        <Select.Option value="10m">10m</Select.Option>
                                        <Select.Option value="11m">11m</Select.Option>
                                        <Select.Option value="12m">12m</Select.Option>
                                        <Select.Option value="13m">13m</Select.Option>
                                        <Select.Option value="14m">14m</Select.Option>
                                        <Select.Option value="15m">15m</Select.Option>
                                    </Select>
                                </Form.Item>
                            </ConfigProvider>
                        </div>
                        <div>
                            <Form.Item
                                name="surname"
                                className=""
                                rules={[{ required: true, message: "Please select your surname!" }]}
                            >
                                <TextArea placeholder="About me"></TextArea>
                            </Form.Item>
                        </div>

                        <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                            <p className=' text-lg md:w-1/2'>Consultations I offer are:</p>
                            <div className=" w-1/2 flex gap-5 lg:gap-8 items-center">
                                <button type="button" onClick={() => setConsultation('Free')} className={` text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${consultation === 'Free' ? 'bg-greenColor' : 'bg-secondary'}`}>Free</button>
                                <button type="button" onClick={() => setConsultation('Paid')} className={` text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${consultation === 'Paid' ? 'bg-greenColor' : 'bg-secondary'}`}>Paid</button>
                            </div>
                        </div>

                        <div className=" mb-10">
                            <p className=" text-lg">specialism</p>
                            <div className="flex gap-1 overflow-x-auto mt-4">
                                <div className="flex justify-center flex-nowrap xl:flex-wrap">
                                    {logos.map((logo, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleLogoClick(index)}
                                            className={`flex items-center justify-center w-[100px] lg:w-[110px] h-[100px] lg:h-[110px] px-7 text-center cursor-pointer ${selectedLogos.includes(index)
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
                        </div>

                        <div className=" flex justify-end">
                            <Link href={`/trainer-profile`}>
                                <button type="submit" className=" text-lg leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:">
                                    Enter
                                </button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

// export default Register;
export default dynamic(() => Promise.resolve(PTRegister2), {
    ssr: false,
});