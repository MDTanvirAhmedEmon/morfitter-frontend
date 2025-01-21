import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="mx-auto flex justify-center items-center bg-white py-20">
      <div className="px-5 w-1/3">
        <div className="relative rounded-lg bg-white p-8 shadow-lg">
          <h1 className="text-[#6F6F6F] text-3xl font-bold text-center mb-2">
            Forgot Password
          </h1>
          <p className="text-[#6F6F6F] text-lg mb-10 text-center">
            Welcome to forgot password page !
          </p>

          {/* Form Section */}
          <form className="space-y-5">
            <div>
              <label className="block text-md font-medium text-[#575757] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full p-2 border-[1px] border-[#0ba593] rounded-md focus:outline-none text-md"
                placeholder="Enter Email"
                required
              />
            </div>

            <Link  href={`/auth/verification-code`}>
            <button
              type="button"
              className="w-full bg-[#0ba593] text-white font-semibold py-2 rounded-lg mt-5"
            >
              Send Code
            </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
