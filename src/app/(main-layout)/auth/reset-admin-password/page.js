"use client";
import { useResetAdminPasswordMutation } from "@/redux/features/auth/authApi";
import { notification } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ResetAdminPassword = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isConfirmEyeOpen, setIsConfirmEyeOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const tokenCode = searchParams.get("tokenCode");

  const [resetAdminPassword, { isLoading }] = useResetAdminPasswordMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPassword, tokenCode, confirmPassword);
    if (!newPassword || !confirmPassword) {
      notification.error({
        message: "Error",
        description: "Both password fields are required.",
        placement: "topRight",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      notification.error({
        message: "Error",
        description: "Passwords do not match. Please try again.",
        placement: "topRight",
      });
      return;
    }
    resetAdminPassword({ email, tokenCode, newPassword: newPassword })
      .unwrap()
      .then((response) => {
        notification.success({
          message: "Success",
          description: response.message,
          placement: "topRight",
        });
        router.push("/admin-login");
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
    <section className="flex justify-center items-center bg-white py-16 sm:py-20 lg:py-40">
      <div className="w-[calc(100%-20px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-100px)] lg:w-2/3 xl:w-1/2 px-4 sm:px-6">
        <div className="relative rounded-lg bg-white px-6 sm:px-8 md:px-10 py-10 sm:py-14 md:py-20 shadow-[0px_10px_30px_rgba(0,0,0,0.2)]">
          <h1 className="text-[#6F6F6F] text-3xl font-bold text-center mb-2">
            Reset Password
          </h1>
          <p className="text-[#6F6F6F] text-lg mb-10 text-center">
            Welcome to reset password page!
          </p>

          {/* Form Section */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="w-full">
              <label
                htmlFor="password"
                className="text-[15px] font-[400] text-[#575757]"
              >
                New Password
              </label>
              <div className="w-full relative">
                <input
                  type={isEyeOpen ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={(e) => setNewPassword(e.target.value)}
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
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0ba593] text-white font-semibold py-2 rounded-lg shadow-lg transition mt-5"
            >
              {isLoading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetAdminPassword;
