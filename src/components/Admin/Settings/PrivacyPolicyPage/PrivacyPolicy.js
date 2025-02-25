"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Form, message, Spin } from "antd";
import {
  useAddPrivacyPolicyMutation,
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
} from "@/redux/features/admin/settings/privacyPolicyApi";

const PrivacyPolicy = () => {
  const [form] = Form.useForm();
  const [content, setContent] = useState("");

  const { data } = useGetPrivacyPolicyQuery();
  console.log(data?.data?.[0]?.policy);

  useEffect(() => {
    setContent(data?.data?.[0]?.policy);
  }, [data]);

  const [addPrivacyPolicy, { isLoading }] = useAddPrivacyPolicyMutation();

  const [updatePrivacyPolicy, { isLoading: updataIsloading }] =
    useUpdatePrivacyPolicyMutation();

  const handleSubmit = () => {
    const finalData = {
      policy: content,
    };

    if (!data?.data?.[0]?.policy) {
      addPrivacyPolicy(finalData)
        .unwrap()
        .then(() => {
          message.success("Privacy Policy Added Successfully");
        })
        .catch((error) => {
          message.error(error?.data?.message || "Something went wrong!");
        });
    } else {
      updatePrivacyPolicy({ id: data?.data?.[0]?._id, data: finalData })
        .unwrap()
        .then(() => {
          message.success("Privacy Policy Updated Successfully");
        })
        .catch((error) => {
          message.error(error?.data?.message || "Something went wrong!");
        });
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="bg-white p-4 rounded-md  h-auto mx-auto  ">
      <p className="text-3xl font-bold my-5">Privacy Policy</p>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          rules={[
            { required: true, message: "Please input your blog content!" },
          ]}
        >
          <ReactQuill
            value={content}
            onChange={setContent}
            placeholder="Write your privacy policy here..."
            modules={quillModules}
            formats={quillFormats}
            className="h-96 mb-10"
          />
        </Form.Item>

        <Form.Item>
          <button
            disabled={isLoading}
            type="primary"
            htmlType="submit"
            className="mt-4 bg-primary text-white px-6 py-1 rounded-md"
          >
            Submit {isLoading && <Spin></Spin>}
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PrivacyPolicy;
