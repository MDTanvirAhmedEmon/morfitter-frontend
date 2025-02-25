"use client";
import { Form, Input, notification, Spin } from "antd";
import dynamic from "next/dynamic";
import regiserImg from "../../../../../assets/fitness2.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo1 from "../../../../../assets/logo1.svg";
import logo2 from "../../../../../assets/logo2.svg";
import logo3 from "../../../../../assets/logo3.svg";
import logo4 from "../../../../../assets/logo4.svg";
import logo5 from "../../../../../assets/logo5.svg";
import logo6 from "../../../../../assets/logo6.svg";
import logo7 from "../../../../../assets/logo7.svg";
import logo8 from "../../../../../assets/logo8.svg";
import logo9 from "../../../../../assets/logo9.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setRole, setToken } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { clearRegisterInfo } from "@/redux/features/auth/registerSlice";
import { useUpdateTraineeProfileMutation } from "@/redux/features/profile/profileApi";
import { decodedToken } from "@/utils/VerifyJwtToken";

const EditProfile2 = () => {
  const { user, role } = useSelector((state) => state.auth);
  console.log(user);
  const interest = user?.interest ? user?.interest : [];
  const [selectedLogos, setSelectedLogos] = useState(interest);

  const { info, profile } = useSelector((state) => state.register);
  const email = info?.email ? info?.email : role?.email;
  const [form] = Form.useForm();

  const [updateTraineeProfile, { isLoading }] =
    useUpdateTraineeProfileMutation();
  const [height, setHeight] = useState(user?.heightMeasurement);
  const [weight, setWeight] = useState(user?.weightMeasurement);
  const [fitterGoal, setFitterGoal] = useState(user?.fitterGoal);

  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleLogoClick = (index) => {
    setSelectedLogos((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((item) => item !== index)
        : [...prevSelected, index]
    );
  };

  const onFinish = (values) => {
    if (!user) {
      console.warn("User is null, preventing API call.");
      return; // Don't execute anything if user is null
    }
    const data = {
      user: {
        email: email,
      },
      trainee: {
        firstName: info?.firstName,
        lastName: info?.lastName,
        address: `${info?.city}, ${info?.country}`,
        // gender: "male", // nai
        contactNo: info?.mobile,
        title: info?.title,
        userName: info?.userName,
        dob: info?.dob,
        country: info?.country,
        city: info?.city,
        height: Number(values.height),
        heightMeasurement: height,
        weight: Number(values.weight),
        weightMeasurement: weight,
        fitterGoal: fitterGoal,
        interest: selectedLogos,
        towardsGoal: values.towardsGoal,
        achieveGoal: values.achieveGoal,
      },
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", profile);
    updateTraineeProfile({ data: formData, id: user?._id })
      .unwrap()
      .then((res) => {
        console.log(res);
        const verifiedtToken = decodedToken(res?.data?.accessToken);
        console.log(verifiedtToken);
        dispatch(clearRegisterInfo());
        dispatch(setToken(res?.data?.accessToken));
        Cookies.set("morfitter-token", res?.data?.accessToken);
        dispatch(setRole(verifiedtToken));
        router.push("/profile");
        notification.success({
          message: "Updated Successfully",
          placement: "topRight",
        });
      })
      .catch((error) => {
        notification.error({
          message: error?.data?.message,
          description: "Please try again later",
          placement: "topRight",
        });
      });
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
            className="w-full h-[80%] object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 flex flex-col justify-center md:p-8 rounded-lg ">
          <Form
            name="register"
            form={form}
            onFinish={onFinish}
            initialValues={{
              height: user?.height || "",
              weight: user?.weight || "",
              towardsGoal: user?.towardsGoal || "",
              achieveGoal: user?.achieveGoal || "",
            }}
            className=" space-x-0 md:space-y-4"
          >
            {/* Second Item (Name + Surname) */}
            <div className="grid md:grid-cols-2 md:gap-4">
              <div>
                <div className=" flex gap-5 lg:gap-4 items-center mb-4">
                  <button
                    type="button"
                    onClick={() => setHeight("CM")}
                    className={` text-white rounded-md px-4 py-[2px] hover:bg-greenColor font-semibold ${
                      height === "CM" ? "bg-greenColor" : "bg-secondary"
                    }`}
                  >
                    CM
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeight("Ft & In")}
                    className={` text-white rounded-md px-4 py-[2px] hover:bg-greenColor font-semibold ${
                      height === "Ft & In" ? "bg-greenColor" : "bg-secondary"
                    }`}
                  >
                    Ft & In
                  </button>
                </div>
                <Form.Item
                  name="height"
                  label="Height"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  // rules={[{ required: true, message: "Please input your height!" }]}
                  className=" w-full"
                >
                  <Input
                    placeholder="Height"
                    suffix={
                      <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                    }
                    className="w-full"
                  />
                </Form.Item>
              </div>
              <div>
                <div className=" flex gap-5 lg:gap-4 items-center mb-4">
                  <button
                    type="button"
                    onClick={() => setWeight("Stones")}
                    className={` text-white rounded-md px-4 py-[2px] hover:bg-greenColor font-semibold ${
                      weight === "Stones" ? "bg-greenColor" : "bg-secondary"
                    }`}
                  >
                    Stones
                  </button>
                  <button
                    type="button"
                    onClick={() => setWeight("KG")}
                    className={` text-white rounded-md px-4 py-[2px] hover:bg-greenColor font-semibold ${
                      weight === "KG" ? "bg-greenColor" : "bg-secondary"
                    }`}
                  >
                    KG
                  </button>
                  <button
                    type="button"
                    onClick={() => setWeight("Lbs")}
                    className={` text-white rounded-md px-4 py-[2px] hover:bg-greenColor font-semibold ${
                      weight === "Lbs" ? "bg-greenColor" : "bg-secondary"
                    }`}
                  >
                    Lbs
                  </button>
                </div>
                <Form.Item
                  name="weight"
                  label="Weight"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  // rules={[{ required: true, message: "Please input your weight!" }]}
                  className=" w-full"
                >
                  <Input
                    placeholder="Weight"
                    suffix={
                      <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                    }
                    className="w-full"
                  />
                </Form.Item>
              </div>
            </div>

            <div className=" -mt-4">
              <p className=" mb-4">My Fitter Goal</p>
              <div className=" w-full 2xl:w-[90%] grid grid-cols-3 xl:grid-cols-4 gap-3 items-center mb-4">
                <button
                  type="button"
                  onClick={() => setFitterGoal("Feel Fitter")}
                  className={` text-white rounded-full md:px-3 py-[2px] hover:bg-greenColor font-semibold ${
                    fitterGoal === "Feel Fitter"
                      ? "bg-greenColor"
                      : "bg-secondary"
                  }`}
                >
                  Feel Fitter
                </button>
                <button
                  type="button"
                  onClick={() => setFitterGoal("look Fitter")}
                  className={` text-white rounded-full md:px-3 py-[2px] hover:bg-greenColor font-semibold ${
                    fitterGoal === "look Fitter"
                      ? "bg-greenColor"
                      : "bg-secondary"
                  }`}
                >
                  look Fitter
                </button>
                <button
                  type="button"
                  onClick={() => setFitterGoal("Fitter Living")}
                  className={` text-white rounded-full md:px-3 py-[2px] hover:bg-greenColor font-semibold ${
                    fitterGoal === "Fitter Living"
                      ? "bg-greenColor"
                      : "bg-secondary"
                  }`}
                >
                  Fitter Living
                </button>
                <button
                  type="button"
                  onClick={() => setFitterGoal("Fitter Weight")}
                  className={` text-white rounded-full md:px-3 py-[2px] hover:bg-greenColor font-semibold ${
                    fitterGoal === "Fitter Weight"
                      ? "bg-greenColor"
                      : "bg-secondary"
                  }`}
                >
                  Fitter Weight
                </button>
              </div>
            </div>

            <div className=" mb-10">
              <p className=" text-lg">I’m interested in</p>
              <div className="flex gap-1 overflow-x-auto mt-4">
                <div className="flex justify-center flex-nowrap xl:flex-wrap">
                  {interests.map((logo, index) => (
                    <div
                      key={index}
                      onClick={() => handleLogoClick(logo.name)}
                      className={`flex items-center justify-center w-[100px] lg:w-[110px] h-[100px] lg:h-[110px] px-7 text-center cursor-pointer ${
                        selectedLogos.includes(logo.name)
                          ? "border-4 border-greenColor shadow shadow-greenColor"
                          : "border-2 border-solid border-transparent"
                      } rounded transition-all duration-300`}
                      style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderImage: selectedLogos.includes(logo.name)
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
            </div>

            <div className="grid md:grid-cols-2 md:gap-4">
              <div>
                <Form.Item
                  name="towardsGoal"
                  label="Towards Goal"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  // rules={[{ required: true, message: "Please input your working goal!" }]}
                  className=" w-full"
                >
                  <Input
                    placeholder="I've been working towards my goal...    "
                    suffix={
                      <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                    }
                    className="w-full"
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  name="achieveGoal"
                  label="AChieve Goal"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  // rules={[{ required: true, message: "Please input your goal!" }]}
                  className=" w-full"
                >
                  <Input
                    placeholder="I want to achieve my goal by..."
                    suffix={
                      <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                    }
                    className="w-full"
                  />
                </Form.Item>
              </div>
            </div>
            <div className=" flex justify-end items-center gap-2">
              {/* <Link href={`/profile`}> */}
              {isLoading && <Spin></Spin>}
              <button
                disabled={isLoading}
                type="submit"
                className=" text-lg leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:"
              >
                Submit
              </button>
              {/* </Link> */}
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

// export default Register;
export default dynamic(() => Promise.resolve(EditProfile2), {
  ssr: false,
});
