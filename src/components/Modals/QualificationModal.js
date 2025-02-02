import { useCreateQualificationMutation } from "@/redux/features/qualification/qualificationApi";
import { message, Spin } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

function QualificationModal({ setQualificationVisible }) {
  const { user } = useSelector((state) => state.auth)
  const [createQualification, { isLoading }] = useCreateQualificationMutation();
  const [qualification, setQualification] = useState("");

  const handleSubmit = () => {
    createQualification({
      data: {
        qualification: qualification
      }, id: user?._id
    }).unwrap()
      .then(() => {
        message.success(`Qualification Added`)
        setQualificationVisible(false);
        setQualification("");
      })
      .catch((error) => {
        message.error(error?.data?.message)
      })
  };



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded shadow-lg w-[500px]">
        <div className="px-5 py-10">
          <label
            htmlFor="qualification-input"
            className="block text-gray-700 text-lg font-medium mb-5"
          >
            Qualification
          </label>
          <input
          onChange={(e) => setQualification(e.target.value) }
            type="text"
            placeholder="Enter Your Qualification"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0ba593] focus:border-transparent"
          />
          <div className="mt-5 flex justify-end gap-2">
            <button
              onClick={() => setQualificationVisible(false)}
              className="px-4 py-2 bg-white text-[#0ba593] border border-[#0ba593] rounded hover:bg-[#0ba593] hover:text-white transition"
            >
              Cancel
            </button>

            <button disabled={isLoading} onClick={handleSubmit} className="px-5 py-2 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition">
              Save
               {isLoading && <Spin />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualificationModal;
