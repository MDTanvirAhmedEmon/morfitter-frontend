"use client";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { Form, Input, notification, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgotPassword = () => {
  const router = useRouter();
  const [forgetPassword, { isLoading }] = useForgotPasswordMutation();

  const onFinish = (values) => {
    forgetPassword({
      email: values.email,
    })
      .unwrap()
      .then((data) => {
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
    <div className="mx-auto flex justify-center items-center bg-white py-20 md:py-20 lg:py-40">
      <div className="px-5 w-1/3">
        <div className="relative rounded-lg bg-white px-8 py-20 shadow-lg">
          <h1 className="text-[#6F6F6F] text-3xl font-bold text-center mb-2">
            Forgot Password
          </h1>
          <p className="text-[#6F6F6F] text-lg mb-10 text-center">
            Welcome to forgot password page !
          </p>
          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 550 }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="email"
              label={
                <p className="block text-md font-medium text-[#575757] mb-2">
                  Email Address :
                </p>
              }
              style={{}}
            >
              <Input
                required
                style={{ padding: "6px" }}
                className="text-md"
                placeholder="esteban_schiller@gmail.com"
              />
            </Form.Item>

            <Form.Item className="text-center">
              <button
                disabled={isLoading}
                className="bg-greenColor text-center w-full p-2 font-semibold text-white px-10 py-2 rounded-md shadow-lg"
                type="submit"
              >
                Send a code {isLoading && <Spin></Spin>}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
