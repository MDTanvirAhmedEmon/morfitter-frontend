"use client";
import { useVerifyEmailMutation } from "@/redux/features/auth/authApi";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const VerificationCode = () => {
  const [code, setCode] = useState(""); // Store the entire code as a single string
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const inputRefs = useRef([]);
  const router = useRouter();

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const handleChange = (value, index) => {
    if (/^[0-9]*$/.test(value)) { // Allow only numeric input
      const newCode = code.split(""); // Convert the code to an array of characters
      newCode[index] = value; // Update the specific digit at the index
      setCode(newCode.join("")); // Join it back into a string

      // Automatically focus the next input field if it exists
      const nextInput = inputRefs.current[index + 1];
      if (value && nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleVerifyCode = () => {
    if (code.length !== 5) {
      alert("Invalid code. Please enter a valid 5-digit code.");
      return;
    }

    verifyEmail({ email, tokenCode: Number(code) }) 
      .unwrap()
      .then((response) => {
        console.log("Verification successful:", response);
        router.push(`/auth/reset-password?email=${email}`);
      })
      .catch((err) => {
        console.error("Verification failed:", err);
        alert(err?.data?.message || "Invalid verification code. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-xl font-bold text-center mb-4">
          Verification Code
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We sent a reset link to {email}. Enter the 5-digit code mentioned in
          the email.
        </p>

        {/* Input fields for the 5-digit code */}
        <div className="flex justify-center gap-3 mb-6">
          {[...Array(5)].map((_, index) => (
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={code[index] || ""} // Ensure no error if the code isn't fully filled
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-greenColor rounded-md shadow-sm focus:outline-none text-lg"
            />
          ))}
        </div>

        {/* Verify button */}
        <div className="mb-4">
          <button
            onClick={handleVerifyCode}
            disabled={isLoading}
            className="w-full bg-greenColor text-white py-2 px-4 rounded-md shadow-md focus:outline-none"
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
