"use client";
import { ConfigProvider, Form, Input, notification, Select, Spin } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import regiserImg from "../../../../../assets/fitness2.png";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import logo1 from "../../../../../assets/logo1.svg";
import logo2 from "../../../../../assets/logo2.svg";
import logo3 from "../../../../../assets/logo3.svg";
import logo4 from "../../../../../assets/logo4.svg";
import logo5 from "../../../../../assets/logo5.svg";
import logo6 from "../../../../../assets/logo6.svg";
import logo7 from "../../../../../assets/logo7.svg";
import logo8 from "../../../../../assets/logo8.svg";
import logo9 from "../../../../../assets/logo9.svg";
import { setRole, setToken, setUser } from "@/redux/features/auth/authSlice";
import { clearRegisterInfo } from "@/redux/features/auth/registerSlice";
import { useRouter } from "next/navigation";
import { decodedToken } from "@/utils/VerifyJwtToken";
import Cookies from "js-cookie";
import { useUpdateTrainerMutation } from "@/redux/features/trainer/trainerApi";
import { IoMdArrowDropdown } from "react-icons/io";

const PTEditProfile2 = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, role } = useSelector((state) => state.auth);
    console.log('dsfjshdalifhnasfg', user?.specialism);
    const specialism = user?.specialism ? user?.specialism : []
    const [updateTrainer, { isLoading }] = useUpdateTrainerMutation();

    const [selectedLogos, setSelectedLogos] = useState(specialism);
    console.log('from select', selectedLogos);
    const { info, profile } = useSelector((state) => state.register);
    const email = info?.email ? info?.email : role?.email
    const [onlineSession, setOnlineSession] = useState(user?.onlineSession);
    const [faceToFace, setFaceToFace] = useState(user?.faceToFace);
    const [consultation, setConsultation] = useState(user?.consultationType);

    const interests = [
        { name: "boxercise", icon: logo1 },
        { name: "calisthenics", icon: logo2 },
        { name: "circuit training", icon: logo3 },
        { name: "core strength", icon: logo4 },
        { name: "fat burners", icon: logo5 },
        { name: "flexibility & mobility", icon: logo6 },
        { name: "zumba", icon: logo7 },
        { name: "hitt", icon: logo8 },
        { name: "pilates", icon: logo9 }
    ];

    const handleLogoClick = (index) => {
        setSelectedLogos((prevSelected) =>
            prevSelected.includes(index)
                ? prevSelected.filter((item) => item !== index)
                : [...prevSelected, index]
        );
    };

    const countries = [
        "United Kingdom",
        "United States",
        "Canada",
        "Australia",
        "Ireland",
        "France",
        "Germany",
        "Netherlands",
        "Belgium",
        "Sweden",
        "Denmark",
        "Norway",
        "Finland",
        "Iceland",
        "Switzerland",
        "Austria",
        "Luxembourg",
        "Liechtenstein",
        "Spain",
        "Portugal",
        "Italy",
        "Greece",
        "Malta",
        "Cyprus",
        "Estonia",
        "Latvia",
        "Lithuania",
        "Poland",
        "Czech Republic",
        "Slovakia",
        "Hungary",
        "Slovenia",
        "Croatia",
        "Romania",
        "Bulgaria",
        "Serbia",
        "Montenegro",
        "North Macedonia",
        "Albania",
        "Bosnia and Herzegovina",
        "Kosovo",
        "Ukraine",
        "Moldova",
        "New Zealand",
        "South Africa",
        "Jamaica",
        "Trinidad and Tobago",
        "Barbados",
        "Singapore",
        "Hong Kong"
    ];

    const onFinish = (values) => {
        const fromData = new FormData()
        const data = {
            user: {
                email: email,
            },
            trainer: {
                firstName: info.firstName,
                lastName: info.lastName,
                dob: info.dob,
                contactNo: info.mobile,
                userName: info?.userName,
                country: values?.country,
                zipCode: Number(values?.postcode),
                onlineSession: onlineSession,
                faceToFace: faceToFace,
                radius: values?.radius,
                about: values?.aboutMe,
                consultationType: consultation,
                specialism: selectedLogos,
            }
        };
        console.log("trainer page er data", data);
        fromData.append('data', JSON.stringify(data))
        // if (!onlineSession) {
        //     notification.error({
        //         message: "Please select your online Session",
        //         placement: "bottomRight",
        //     });
        //     return;
        // }
        // if (!faceToFace) {
        //     notification.error({
        //         message: "Please select your face To Face Session",
        //         placement: "bottomRight",
        //     });
        //     return;
        // }
        // if (!selectedLogos.length) {
        //     notification.error({
        //         message: "Please select your specialisms.",
        //         placement: "bottomRight",
        //     });
        //     return;
        // }
        // if (!consultation) {
        //     notification.error({
        //         message: "Please select consultation type.",
        //         placement: "bottomRight",
        //     });
        //     return;
        // }

        updateTrainer({ data: fromData, id: user?._id })
            .unwrap()
            .then((res) => {
                console.log(res);
                const verifiedtToken = decodedToken(res?.data?.accessToken)
                console.log(verifiedtToken);
                dispatch(clearRegisterInfo());
                dispatch(setToken(res?.data?.accessToken));
                Cookies.set('morfitter-token', res?.data?.accessToken)
                dispatch(setRole(verifiedtToken));
                router.push("/trainer-profile");
                notification.success({
                    message: "Updated Successfully",
                    description: data?.data?.message,
                    placement: "topRight",
                });
            })
            .catch((error) => {
                notification.error({
                    message: error?.data?.message || "Unexpected error",
                    description: "Please try again later",
                    placement: "topRight",
                });
            });
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
                        className="w-full h-[80%] object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="lg:w-1/2 flex flex-col justify-center md:p-8 rounded-lg">
                    <Form
                        name="register"
                        onFinish={onFinish}
                        // Set default values from the user object
                        initialValues={{
                            country: user?.country || "",
                            postcode: user?.zipCode || "",
                            radius: user?.radius || "",
                            aboutMe: user?.about || "",
                        }}
                        className="space-x-0 md:space-y-4"
                    >
                        {/* Country & Postcode */}
                        <div className="grid md:grid-cols-2 md:gap-4">
                            <Form.Item
                                name="country"
                            // rules={[{ required: true, message: "Please input your country!" }]}
                            >
                                <Select defaultValue={user?.country} placeholder="Country" suffixIcon={<IoMdArrowDropdown className="w-6 h-6 text-greenColor" />} className="w-full">
                                    {countries.map((country) => (
                                        <Select.Option key={country} value={country}>
                                            {country}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="postcode"
                            // rules={[{ required: true, message: "Please input your zip code!" }]}
                            >
                                <Input placeholder="Postcode or Zip code" className="w-full" />
                            </Form.Item>
                        </div>

                        {/* About Me */}
                        <div>
                            <Form.Item
                                name="aboutMe"
                            // rules={[{ required: true, message: "Please tell us about yourself!" }]}
                            >
                                <TextArea placeholder="About me" />
                            </Form.Item>
                        </div>

                        {/* Online Sessions */}
                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-12 mb-8">
                            <p className="text-lg md:w-1/2">I conduct online sessions:</p>
                            <div className="w-1/2 flex gap-5 lg:gap-8 items-center">
                                <button
                                    type="button"
                                    onClick={() => setOnlineSession("yes")}
                                    className={`text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${onlineSession === "yes" ? "bg-greenColor" : "bg-secondary"
                                        }`}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setOnlineSession("no")}
                                    className={`text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${onlineSession === "no" ? "bg-greenColor" : "bg-secondary"
                                        }`}
                                >
                                    No
                                </button>
                            </div>
                        </div>

                        {/* Face to Face Sessions */}
                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-12">
                            <p className="text-lg md:w-1/2">I conduct face to face sessions:</p>
                            <div className="w-1/2 flex gap-5 lg:gap-8 items-center">
                                <button
                                    type="button"
                                    onClick={() => setFaceToFace("yes")}
                                    className={`text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${faceToFace === "yes" ? "bg-greenColor" : "bg-secondary"
                                        }`}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFaceToFace("no")}
                                    className={`text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${faceToFace === "no" ? "bg-greenColor" : "bg-secondary"
                                        }`}
                                >
                                    No
                                </button>
                            </div>
                        </div>

                        {/* Consultation Type */}
                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-12 mb-8">
                            <p className="text-lg md:w-1/2">Consultations I offer are:</p>
                            <div className="w-1/2 flex gap-5 lg:gap-8 items-center">
                                <button
                                    type="button"
                                    onClick={() => setConsultation("free")}
                                    className={`text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${consultation === "free" ? "bg-greenColor" : "bg-secondary"
                                        }`}
                                >
                                    Free
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setConsultation("paid")}
                                    className={`text-white rounded-full px-6 py-[6px] hover:bg-greenColor font-semibold text-lg ${consultation === "paid" ? "bg-greenColor" : "bg-secondary"
                                        }`}
                                >
                                    Paid
                                </button>
                            </div>
                        </div>
                        {/* Radius Selection for Face to Face Sessions */}
                        <div>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        Select: {
                                            activeBorderColor: "rgb(11,165,147)",
                                            hoverBorderColor: "rgb(11,165,147)",
                                            colorPrimary: "rgb(11,165,147)",
                                            controlHeight: 40,
                                            fontSize: 16,
                                            colorBorder: "rgb(11,165,147)",
                                        },
                                    },
                                }}
                            >
                                {
                                    faceToFace === "yes" && (
                                        <Form.Item
                                            name="radius"
                                            className=" md:w-1/2"
                                        // rules={[
                                        //   { required: true, message: "Please select your surname!" },
                                        // ]}
                                        >

                                            <Select
                                                placeholder={
                                                    <p className=" text-lg">
                                                        Radius
                                                        <span className=" text-sm">
                                                            (If yes face to face sessions)
                                                        </span>
                                                    </p>
                                                }
                                                suffixIcon={<IoMdArrowDropdown className="w-6 h-6 text-greenColor" />}
                                            >
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
                                                <Select.Option value="15m+">15m+</Select.Option>
                                            </Select>


                                        </Form.Item>
                                    )
                                }
                            </ConfigProvider>
                        </div>


                        {/* Specialism */}
                        <div className="mb-10">
                            <p className="text-lg">Specialism</p>
                            <div className="flex gap-1 overflow-x-auto mt-4">
                                <div className="flex justify-center flex-nowrap xl:flex-wrap">
                                    {interests.map((logo, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleLogoClick(logo?.name)}
                                            className={`flex items-center justify-center w-[100px] lg:w-[110px] h-[100px] lg:h-[110px] px-7 text-center cursor-pointer ${selectedLogos.includes(logo?.name)
                                                ? "border-4 border-greenColor shadow shadow-greenColor"
                                                : "border-2 border-solid border-transparent"
                                                } rounded transition-all duration-300`}
                                            style={{
                                                borderWidth: "2px",
                                                borderStyle: "solid",
                                                borderImage: selectedLogos.includes(logo?.name)
                                                    ? "none"
                                                    : "linear-gradient(180deg, rgba(11,165,147,0.05) 0%, #08776a 51%, rgba(11,165,147,0.05) 100%) 1",
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
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end items-center gap-2">
                            {isLoading && <Spin />}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="text-lg leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default dynamic(() => Promise.resolve(PTEditProfile2), {
    ssr: false,
});
