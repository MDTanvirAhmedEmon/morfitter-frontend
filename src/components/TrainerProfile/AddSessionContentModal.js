"use client";
import { useAddSessionMutation } from "@/redux/features/session/sessionApi";
import { Form, Input, message, Modal, Spin, Upload } from "antd";
import { useState } from "react";

const AddSessionContentModal = ({
  handleOk,
  handleCancel,
  isModalOpen,
  id,
}) => {
  const [Video1, setVideo1] = useState(null);
  const [addSession, { isLoading }] = useAddSessionMutation();

  const onFinish = (values) => {
    const formData = new FormData();
    const sessionData = {
      recordedContent: {
        title: values.title,
        duration: values.duration,
      },
    };
    formData.append("data", JSON.stringify(sessionData));
    formData.append("file", Video1);
    addSession({ formData: formData, id: id })
      .unwrap()
      .then(() => {
        message.success(`Session Created Successfully`);
        handleOk();
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };

  return (
    <Modal
      centered
      width={600}
      footer={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form layout="vertical" className=" pt-10" onFinish={onFinish}>
        <Form.Item
          name="title"
          className=""
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <div className=" flex items-center gap-3">
            <p className=" text-lg w-[16%]">Title</p>
            <Input type="text" placeholder="Enter title" className="" />
          </div>
        </Form.Item>
        <Form.Item
          name="duration"
          className=""
          rules={[{ required: true, message: "Please input duration!" }]}
        >
          <div className=" flex items-center gap-3">
            <p className=" text-lg w-[16%]">Duration</p>
            <Input type="text" placeholder="Ex: 5min" className="" />
          </div>
        </Form.Item>
        <div className=" flex items-center gap-4">
          <div className="border border-greenColor text-[#c0c0c0] rounded-md  px-2 py-2 flex justify-between items-center w-full">
            {!Video1 && <p>Add video</p>}
            <p className="text-sm text-gray-700">{Video1 && Video1.name}</p>
          </div>
          <Upload
            showUploadList={false}
            maxCount={1}
            accept="video/*"
            beforeUpload={(file) => {
              setVideo1(file);
              return false;
            }}
            className=" bg-primary py-2 px-4 rounded-full font-semibold text-white cursor-pointer"
          >
            Upload
          </Upload>
        </div>

        <Form.Item label={null}>
          <button
            disabled={isLoading}
            className=" bg-secondary text-white px-8 py-1 rounded-md mt-10 text-lg"
            type="primary"
            htmlType="submit"
          >
            Submit
          </button> { isLoading && <Spin size="large"></Spin>}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSessionContentModal;
