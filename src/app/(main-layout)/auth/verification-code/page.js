"use client";
import { useVerifyEmailMutation } from "@/redux/features/auth/authApi";
import { notification } from "antd";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const VerificationCode = () => {
  const [code, setCode] = useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const inputRefs = useRef([]);
  const router = useRouter();

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const handleChange = (value, index) => {
    if (/^[0-9]*$/.test(value)) {
      const newCode = code.split(""); 
      newCode[index] = value; 
      setCode(newCode.join(""));

      // Automatically focus the next input field if it exists
      const nextInput = inputRefs.current[index + 1];
      if (value && nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleVerifyCode = () => {
    if (code.length !== 5) {
      notification.success({
        message: "OTP Sent",
        description: "Invalid code. Please enter a valid 5-digit code!",
        placement: "topRight",
      });
      return;
    }

    verifyEmail({ email, tokenCode: Number(code) })
      .unwrap()
      .then((response) => {
        console.log("verification page er  response", response);
        notification.success({
          message: "OTP Sent",
          description: " verifications were successfully completed!",
          placement: "topRight",
        });
        router.push(`/auth/reset-password?email=${email}&tokenCode=${code}`);
      })
      .catch((error) => {
        notification.error({
          message: "Error",
          description: error?.data?.message,
          placement: "topRight",
        });
      });
  };

  return (
    <div className="flex justify-center items-center bg-white py-16 sm:py-20 lg:py-40">
      <div className="w-[calc(100%-20px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-100px)] lg:w-2/3 xl:w-1/2 px-4 sm:px-6">
        <div className="relative rounded-lg bg-white px-6 sm:px-8 md:px-10 py-10 sm:py-14 md:py-20 shadow-[0px_10px_30px_rgba(0,0,0,0.2)]">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4">
            Verification Code
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center mb-6">
            We sent a reset link to <span className="font-medium">{email}</span>
            . Enter the 5-digit code mentioned in the email.
          </p>

          {/* Input fields for the 5-digit code */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6">
            {[...Array(5)].map((_, index) => (
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={code[index] || ""}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-10 sm:w-12 h-10 sm:h-12 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none text-lg sm:text-xl"
              />
            ))}
          </div>

          {/* Verify button */}
          <div>
            <button
              onClick={handleVerifyCode}
              disabled={isLoading}
              className="w-full bg-greenColor hover:bg-greenColor text-white py-2 sm:py-3 rounded-md shadow-md focus:outline-none transition"
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
