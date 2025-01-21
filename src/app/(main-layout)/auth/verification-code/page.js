"use client";
import React from "react";
import { useRef, useState } from "react";

const VerificationCode = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleKeyDown = (e) => {
    const index = inputRefs.current.indexOf(e.target);

    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      if (otp[index]) {
        // Clear current input
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index),
          "",
          ...prevOtp.slice(index + 1),
        ]);
      } else if (index > 0) {
        // Move to the previous input
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    const value = e.target.value.trim();

    if (/^[0-9]$/.test(value)) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        value,
        ...prevOtp.slice(index + 1),
      ]);

      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, otp.length);
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp((prevOtp) => prevOtp.map((_, index) => digits[index] || ""));
      const lastFilledIndex = Math.min(digits.length, otp.length) - 1;
      inputRefs.current[lastFilledIndex]?.focus();
    }
  };
  return (
    <section className="mx-auto flex justify-center items-center bg-white py-20">
      <div className="px-5 w-1/3">
        <div className="relative rounded-lg bg-white p-8 shadow-lg">
            <h1 className="text-[#6F6F6F] text-3xl font-bold text-center mb-2">
              Verification Code
            </h1>
            <p className="text-[#6F6F6F] text-lg mb-10 text-center">
              Welcome to verification code page !
            </p>
            <form className="space-y-5 mt-5">
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="shadow-xs w-20 h-20 text-2xl text-center border-[1px] border-[#0ba593]  text-[#0ba593] rounded-md focus:outline-none"
                  />
                ))}
              </div>

              {/* <Link to="/new-password"> */}
              <button
                type="submit"
                className="w-full bg-[#0ba593] text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-primary-dark transition mt-10"
              >
                Verify Code
              </button>
              {/* </Link> */}
            </form>
        </div>
      </div>
    </section>
  );
};

export default VerificationCode;
