"use client";
import { Form, Input, notification, Spin } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import regiserImg from "../../../../assets/register.png";
import Image from "next/image";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useLogInMutation } from "@/redux/features/auth/authApi";
import { setRole, setToken } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { decodedToken } from "@/utils/VerifyJwtToken";
import Cookies from "js-cookie";

const LogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [logIn, { loading }] = useLogInMutation();
  const onFinish = (values) => {
    const LogInData = {
      email: values?.email,
      password: values?.password,
    };
    console.log("log in data", LogInData);

    logIn(LogInData)
      .unwrap()
      .then((data) => {
        console.log("log in data", data);

        const verifiedToken = decodedToken(data?.data?.accessToken);
        Cookies.set('morfitter-token', data?.data?.accessToken)
        dispatch(setRole(verifiedToken));
        dispatch(setToken(data?.data?.accessToken));
        notification.success({
          message: "log in Successful",
          description: data?.data?.message,
          placement: "topRight",
        });
        router.push("/");
      })
      .catch((error) => {
        console.log('error', error);
        notification.error({
          message: "Error",
          description:
            error?.data?.message,
          placement: "topRight",
        });
      });
  };

  return (
    <section className="py-20">
      <div className="xl:container mx-auto flex flex-col lg:flex-row gap-4 shadow-2xl p-4 md:p-8 rounded-2xl">
        {/* Image Section */}
        <div className="lg:w-1/2 rounded-lg overflow-hidden ">
          <Image
            height={0}
            width={0}
            src={regiserImg}
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 flex flex-col justify-center md:p-5 rounded-lg ">
          <h1 className="text-2xl md:text-5xl font-bold mb-5">Log In</h1>

          <Form
            name="register"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            className="space-x-0"
          >
            {/* First Item (Title + Profile Picture) */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-4 md:mb-0">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                className=" w-full"
              >
                <Input
                  placeholder="Email"
                  suffix={
                    <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                  }
                  className="w-full"
                />
              </Form.Item>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-4 mb-5 md:mb-5 lg:mb-5">
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                className=" w-full"
              >
                <Input.Password
                  placeholder="Password"
                  suffix={
                    <IoMdArrowDropdown className=" w-6 h-6 text-greenColor" />
                  }
                  className="w-full"
                />
              </Form.Item>
            </div>
            <div className="flex justify-end">
              <p className="">
                <Link
                  className=" text-primary font-semibold"
                  href={`/auth/forgot-password`}
                >
                  Forget Password
                </Link>
              </p>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <button
                type="submit"
                className="bookBtn text-lg font-medium leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-1 px-6 md:px-8 rounded-full capitalize transition-all hover:"
              >
                Log In {loading && <Spin></Spin>}
              </button>
            </Form.Item>
          </Form>
          <p className=" mt-6">
            Don&apos;t have an account?{" "}
            <Link className="font-semibold ml-2" href={`/auth/user-register`}>
              as a <span className="text-primary">member</span>
            </Link>
            <Link className="font-semibold ml-2" href={`/auth/pt-register`}>
              as a <span className="text-primary">trainer</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

// export default Register;
export default dynamic(() => Promise.resolve(LogIn), {
  ssr: false,
});
