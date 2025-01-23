"use client"
import Link from "next/link";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ResetPassword = () => {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [isConfirmEyeOpen, setIsConfirmEyeOpen] = useState(false);

    const handleSubmit = () => {};
  return (
    <section className="mx-auto flex justify-center items-center bg-white py-20 md:py-20 lg:py-40">
      <div className="px-5 w-1/3">
        <div className="relative rounded-lg bg-white px-8 py-20 shadow-lg">
          <h1 className="text-[#6F6F6F] text-3xl font-bold text-center mb-2">
            Reset Password
          </h1>
          <p className="text-[#6F6F6F] text-lg mb-10 text-center">
            Welcome to reset password page !
          </p>

          {/* Form Section */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="w-full">
              <label
                htmlFor="password"
                className="text-[15px] font-[400] text-[#575757]"
              >
                Password
              </label>
              <div className="w-full relative">
                <input
                  type={isEyeOpen ? "text" : "password"}
                  name="password"
                //   value={formData.password}
                //   onChange={handleChange}
                  id="password"
                  placeholder="Enter new password"
                  className="peer border-[1px] border-[#0ba593] rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                  required
                />
                {isEyeOpen ? (
                  <IoEyeOutline
                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                    onClick={() => setIsEyeOpen(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                    onClick={() => setIsEyeOpen(true)}
                  />
                )}
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[15px] font-[400] text-[#575757]"
              >
                Confirm Password
              </label>
              <div className="w-full relative">
                <input
                  type={isConfirmEyeOpen ? "text" : "password"}
                  name="confirmPassword"
                //   value={formData.confirmPassword}
                //   onChange={handleChange}
                  id="confirmPassword"
                  placeholder="Re-enter new password"
                  className="peer border-[1px] border-[#0ba593] rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                  required
                />
                {isConfirmEyeOpen ? (
                  <IoEyeOutline
                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                    onClick={() => setIsConfirmEyeOpen(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                    onClick={() => setIsConfirmEyeOpen(true)}
                  />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Link href={`/`}>
              <button
                type="submit"
                className="w-full bg-[#0ba593] text-white font-semibold py-2 rounded-lg shadow-lg transition mt-5"
              >
                Confirm
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
