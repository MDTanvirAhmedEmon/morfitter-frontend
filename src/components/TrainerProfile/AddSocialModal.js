"use client";
import { useUpdateTrainerProfileMutation } from "@/redux/features/profile/profileApi";
import { Form, Input, message, Modal, Spin } from "antd";
import { useSelector } from "react-redux";

const AddSocialModal = ({ isModalOpen, handleCancel, handleOk }) => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const initialValues = {
    TikTok: user?.TikTok || "",
    Instagram: user?.Instagram || "",
    Facebook: user?.Facebook || "",
    YouTube: user?.YouTube || "",
    Twitter: user?.Twitter || "",
  };
  const [updateTrainerProfile, { isLoading }] =
    useUpdateTrainerProfileMutation();
  const onFinish = (values) => {
    const formData = new FormData();
    console.log("Submitted Values:", values);
    formData.append("data", JSON.stringify({ trainer: values }));
    updateTrainerProfile({ data: formData, id: user?._id })
      .unwrap()
      .then(() => {
        message.success(`Updated Successfully`);
        handleCancel();
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };

  return (
    <Modal
      className=" "
      footer={false}
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        className=" pt-10 px-2"
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item label="TikTok" name="TikTok">
          <Input placeholder="Enter TikTok URL" />
        </Form.Item>

        <Form.Item label="Instagram" name="Instagram">
          <Input placeholder="Enter Instagram URL" />
        </Form.Item>

        <Form.Item label="Facebook" name="Facebook">
          <Input placeholder="Enter Facebook URL" />
        </Form.Item>

        <Form.Item label="YouTube" name="Youtube">
          <Input placeholder="Enter YouTube URL" />
        </Form.Item>

        <Form.Item label="Twitter" name="Twitter">
          <Input placeholder="Enter Twitter URL" />
        </Form.Item>

        <Form.Item>
          <button
            className="text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full"
            type="primary"
            htmlType="submit"
          >
            Add Link {isLoading && <Spin />}
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSocialModal;
