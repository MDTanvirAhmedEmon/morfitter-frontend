"use client";
import { useUpdateAdminMutation } from "@/redux/features/admin/settings/profileApi";
import { message, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function EditProfile() {
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // contact: '',
  });

  console.log('safddsafdsafsdaf', formData);

  // Set default form data when user is available
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        // contact: user?.contactNo || '',
      });
    }
  }, [user]);

  const [updateAdmin, { isLoading }] = useUpdateAdminMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
    };

    formDataToSend.append("data", JSON.stringify(data));

    updateAdmin(formDataToSend)
      .unwrap()
      .then(() => {
        message.success("Update Successfully");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
        });
      })
      .catch((error) => {
        message.error(error?.data?.message || "Error updating profile");
      });
};


  return (
    <div className="bg-white px-20 w-[715px] py-5 rounded-md">
      <p className="text-primary text-center font-bold text-xl mb-5">
        Edit Your Profile
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter first name"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter last name"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Email"
            required
          />
        </div>
        {/* <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Contact No
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Contact Number"
            required
          />
        </div> */}

        <div className="text-center my-5">
          <button
            type="submit"
            className="font-bold bg-primary text-white p-2 px-10 py-2 rounded-md shadow-lg"
          >
            {isLoading ? <Spin /> : "Save & Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
