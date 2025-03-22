"use client";
import { useCreateSpecialismMutation } from "@/redux/features/specialism/specialismApi";
import { message } from "antd";
import { useState } from "react";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.svg";
import logo7 from "../../assets/logo7.svg";
import logo8 from "../../assets/logo8.svg";
import logo9 from "../../assets/logo9.svg";
import { useSelector } from "react-redux";
import Image from "next/image";

function SpecialismsModal({ setSpecialismsVisible }) {
  const { user } = useSelector((state) => state.auth);
  const [createSpecialism, { isLoading }] = useCreateSpecialismMutation();
  // const [specialism, setSpecialism] = useState(null);
  const [selectedLogos, setSelectedLogos] = useState([]);
  console.log(selectedLogos);
  const interests = [
    { name: "Boxercise", icon: logo1 },
    { name: "Calisthenics", icon: logo2 },
    { name: "Circuit Training", icon: logo3 },
    { name: "Core Strength", icon: logo4 },
    { name: "Fat Burners", icon: logo5 },
    { name: "Flexibility & Mobility", icon: logo6 },
    { name: "Zumba", icon: logo7 },
    { name: "Hitt", icon: logo8 },
    { name: "Pilates", icon: logo9 },
  ];
  const handleSubmit = () => {
    if (!selectedLogos.length) {
      message.warning("Please select at least one specialism.");
      return;
    }
  
    const formattedData = selectedLogos.map((name) => ({
      specialism: name,
    }));
  
    createSpecialism({
      data: formattedData,
      id: user?._id,
    })
      .unwrap()
      .then(() => {
        message.success(`Specialisms Added`);
        setSpecialismsVisible(false);
        setSelectedLogos([]);
      })
      .catch((error) => {
        message.error(error?.data?.message || "Failed to add specialisms");
      });
  };
  
  const handleLogoClick = (index) => {
    setSelectedLogos((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((item) => item !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 h-auto flex justify-center items-center">
      <div className="relative bg-white rounded shadow-lg w-[500px]">
        <div className="px-5 py-10">
          <label
            htmlFor="Specialisms-input"
            className="block text-gray-700 text-lg font-medium mb-5"
          >
            Add Specialisms
          </label>
          {/* <input
            type="text"
            onChange={(e) => setSpecialism(e.target.value)}
            placeholder="Enter Your Specialisms"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0ba593] focus:border-transparent"
          /> */}
          <div className="grid grid-cols-3 md:grid-cols-4">
            {interests.map((logo, index) => (
              <div
                key={index}
                onClick={() => handleLogoClick(logo?.name)}
                className={`flex items-center justify-center gap-2 w-[100px] lg:w-[110px] h-[100px] lg:h-[110px] px-7 text-center cursor-pointer ${
                  selectedLogos.includes(logo?.name)
                    ? "border-4 border-greenColor shadow shadow-greenColor"
                    : "border-2 border-solid border-transparent"
                } rounded transition-all duration-300`}
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImage: selectedLogos.includes(logo?.name)
                    ? "none"
                    : "linear-gradient(180deg, rgba(11,165,147,0.05) 0%, #08776a 51%, rgba(11,165,147,0.05) 100%) 1",
                }}
              >
                <Image
                  src={logo.icon}
                  alt={`Logo ${logo.name}`}
                  height={170}
                  width={170}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-end gap-2">
            <button
              onClick={() => setSpecialismsVisible(false)}
              className="px-4 py-2 bg-white text-[#0ba593] border border-[#0ba593] rounded hover:bg-[#0ba593] hover:text-white transition"
            >
              Cancel
            </button>

            <button
              disabled={isLoading}
              onClick={handleSubmit}
              className="px-5 py-2 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialismsModal;
