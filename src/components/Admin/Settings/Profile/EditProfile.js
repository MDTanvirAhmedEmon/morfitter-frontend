import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function EditProfile() {
  const { user } = useSelector((state) => state.auth);
  const [profilePic] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });

  // Set default form data when user is available
  useEffect(() => {
    if (user) {
      setFormData({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email || '',
        contact: user.contactNo || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white px-20 w-[715px] py-5 rounded-md">
      <p className="text-primary text-center font-bold text-xl mb-5">
        Edit Your Profile
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            User Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Name"
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
        <div>
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
        </div>

        <div className="text-center my-5">
          {profilePic ? (
            <button
              type="button"
              onClick={() => alert("Uploading image...")}
              className="bg-primary text-white p-2 px-10 py-2 rounded-md shadow-lg"
            >
              Upload Picture
            </button>
          ) : (
            <button
              type="submit"
              className="font-bold bg-primary text-white p-2 px-10 py-2 rounded-md shadow-lg"
            >
              Save Changes
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
