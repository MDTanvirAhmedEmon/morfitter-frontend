"use client";
import {
  useGetPrivacyQuery,
  useUpdatePrivacyMutation,
} from "@/redux/features/admin/settings/privacyPolicyApi";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { message } from "antd";

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");

  const { data: privacyData, isLoading, error } = useGetPrivacyQuery();

  const [updatePrivacy] = useUpdatePrivacyMutation();

  const policyItem = privacyData?.data?.[0];
  const policyId = policyItem?._id;
  const policyText = policyItem?.policy;

  useEffect(() => {
    if (policyText) {
      setContent(policyText);
    }
  }, [policyText]);

  const handleSave = async () => {
    if (!policyId) {
      message.error("Policy ID is missing. Unable to update.");
      return;
    }

    const finalData = {
      privacy: { content },
    };

    message.loading({ content: "Saving...", key: "saving" });

    try {
      await updatePrivacy({ data: finalData, policyId }).unwrap();

      message.success({
        content: "Privacy policy updated successfully!",
        key: "saving",
        duration: 2,
      });
    } catch (error) {
      console.error("Error updating content:", error);

      message.error({
        content: "Failed to save privacy policy. Please try again.",
        key: "saving",
      });
    }
  };

  return (
    <div className="px-5 pb-5">
      <h3 className="font-semibold pb-5 text-xl text-[#242424]">
        Privacy Policy
      </h3>

      <div className="bg-white rounded shadow p-5 h-full">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="bg-white h-full"
          modules={{
            toolbar: [
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
            ],
          }}
        />
      </div>
      <div className="text-center py-6">
        <button
          type="submit"
          onClick={handleSave}
          disabled={isLoading}
          className="w-full px-10 py-3 mt-20 rounded bg-primary text-white font-semibold shadow-lg flex items-center justify-center hover:bg-primary"
        >
          Save changes
        </button>
        {/* Error handling */}
        {error && (
          <div className="mt-6 text-center text-red-600">
            <p>
              Error fetching data: {error.message || "Something went wrong."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
