import { Button, Form, Input, Modal } from "antd";


const AddSocialModal = ({ isModalOpen, handleCancel, handleOk }) => {

    const onFinish = (values) => {
        console.log("Submitted Values:", values);
    };
    return (
        <Modal className=" " footer={false} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                layout="vertical"
                className=" pt-10 px-2"
                // initialValues={initialValues}
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
                    <button className="text-white bg-secondary px-3 md:px-6 py-0 md:py-2 rounded-full" type="primary" htmlType="submit">Add Link</button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddSocialModal;