"use client";
import { Form, Input, notification, Spin } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useLogInAdminMutation } from "@/redux/features/auth/authApi";
import { setRole, setToken } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { decodedToken } from "@/utils/VerifyJwtToken";
import Cookies from "js-cookie";

const AdminLogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [logIn, { isLoading }] = useLogInAdminMutation();
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
        Cookies.set("morfitter-token", data?.data?.accessToken);
        dispatch(setRole(verifiedToken));
        dispatch(setToken(data?.data?.accessToken));
        notification.success({
          message: "log in Successful",
          description: data?.data?.message,
          placement: "topRight",
        });
        router.push("/admin");
      })
      .catch((error) => {
        console.log("error", error);
        notification.error({
          message: "Error",
          description: error?.data?.message,
          placement: "topRight",
        });
      });
  };

  return (
    <section className="py-20 px-3 xxl:px-0 bg-greenColor h-screen w-full flex justify-center items-center">
      <div className="lg:w-[700px] mx-auto flex flex-col lg:flex-row gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] bg-white px-4 md:px-8 py-16 rounded-2xl w-[700px]">
        {/* Form Section */}
        <div className="flex flex-col justify-center md:p-5 rounded-lg w-full">
          <h1 className="text-2xl md:text-5xl font-bold mb-8 text-center">
            Admin Log In
          </h1>

          <Form
            name="register"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            className="space-x-0"
          >
            {/* Email Field */}
            <div className="flex flex-col-reverse md:flex-row justify-center items-center space-x-4">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                className="w-full"
              >
                <Input
                  placeholder="Email"
                  suffix={
                    <IoMdArrowDropdown className="w-6 h-6 text-greenColor" />
                  }
                  className="w-full"
                />
              </Form.Item>
            </div>

            {/* Password Field */}
            <div className="flex flex-col-reverse md:flex-row justify-center items-center space-x-4 mb-5">
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                className="w-full"
              >
                <Input.Password
                  placeholder="Password"
                  suffix={
                    <IoMdArrowDropdown className="w-6 h-6 text-greenColor" />
                  }
                  className="w-full"
                />
              </Form.Item>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end -mt-6 mb-3">
              <p>
                <Link
                  className="text-primary font-semibold"
                  href={`/auth/forget-admin-password`}
                >
                  Forget Password?
                </Link>
              </p>
            </div>

            {/* Submit Button */}
            <Form.Item className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bookBtn text-lg font-medium text-white bg-secondary hover:bg-greenColor py-2 px-8 rounded-full capitalize transition-all"
              >
                Log In {isLoading && <Spin />}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

// export default Register;
export default dynamic(() => Promise.resolve(AdminLogIn), {
  ssr: false,
});
