"use client";
import { useForgotAdminPasswordMutation } from "@/redux/features/auth/authApi";
import { Form, Input, notification, Spin } from "antd";
import { useRouter } from "next/navigation";

const ForgotAdminPassword = () => {
  const router = useRouter();
  const [forgotAdminPassword, { isLoading }] = useForgotAdminPasswordMutation();

  const onFinish = (values) => {
    forgotAdminPassword({
      email: values.email,
    })
      .unwrap()
      .then(() => {
        notification.success({
          message: "OTP Sent",
          description: "The OTP has been sent to your email successfully!",
          placement: "topRight",
        });
        router.push(`/auth/verification-code?email=${values.email}`);
      })
      .catch((error) => {
        notification.error({
          message: "Error",
          description:
            error?.data?.message || "Something went wrong. Please try again.",
          placement: "topRight",
        });
      });
  };

  return (
    <div className="flex justify-center items-center bg-white py-16 sm:py-20 lg:py-40">
    <div className="w-[calc(100%-20px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-100px)] lg:w-2/3 xl:w-1/2 px-4 sm:px-6">
      <div className="relative rounded-lg bg-white px-6 sm:px-8 md:px-10 py-10 sm:py-14 md:py-20 shadow-lg">
        <h1 className="text-gray-600 text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">
          Forgot Password!😶‍🌫️
        </h1>
        <p className="text-gray-600 text-base sm:text-lg text-center mb-8 sm:mb-10">
        Please enter your email here, and we&apos;ll send you a code to reset your password
        </p>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="max-w-full"
        >
          <Form.Item
            name="email"
            label={
              <p className="block text-sm sm:text-md font-medium text-gray-700 mb-2">
                Email Address:
              </p>
            }
          >
            <Input
              required
              className="text-sm sm:text-md py-2 px-3 border border-gray-300 rounded-md w-full"
              placeholder="esteban_schiller@gmail.com"
            />
          </Form.Item>
          <Form.Item className="text-center">
            <button
              disabled={isLoading}
              className="bg-greenColor hover:bg-greenColor text-center w-full py-2 sm:py-3 font-semibold text-white rounded-md shadow-lg transition"
              type="submit"
            >
              Send a code {isLoading && <Spin />}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
  
  );
};

export default ForgotAdminPassword;
