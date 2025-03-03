"use client";
import { useState } from "react";
import { Form, Input, Rate, Button, message, Typography, Alert } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useGiveSessionReviewMutation } from "@/redux/features/session/sessionApi";

const { Title, Text } = Typography;

const GiveReview = ({ id }) => {
    const [form] = Form.useForm();
    const { role } = useSelector((state) => state.auth)
    const [giveSessionReview, { isLoading }] = useGiveSessionReviewMutation();
    const onFinish = (values) => {
        const data = {
            session_id: id,
            user_id: role?.id,
            review_text: values?.review_text,
            rating: values?.rating
        }
        giveSessionReview(data).unwrap()
            .then(() => {
                message.success(`Review Given Successfully`)
                form.resetFields();
            })
            .catch((error) => {
                message.error(error?.data?.message)
                form.resetFields();
            })
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-auto md:w-[500px] mx-auto mt-10 border border-gray-200">
            {/* Session Completed Message */}

            <>
                <Alert
                    message="Session Completed Successfully!"
                    type="success"
                    showIcon
                    icon={<CheckCircleOutlined />}
                    className="mb-4"
                    style={{ backgroundColor: "#f6ffed", borderColor: "#b7eb8f", color: "#389e0d" }}
                />

                <Title level={3} className="text-center" style={{ color: "#572c57" }}>
                    Give a Review
                </Title>

                {/* Review Form */}
                <Form onFinish={onFinish} form={form} layout="vertical" className="space-y-4">
                    {/* Review Text */}
                    <Form.Item
                        label={<Text className="text-md font-medium" style={{ color: "#572c57" }}>Your Review</Text>}
                        name="review_text"
                        rules={[{ required: true, message: "Please write your review" }]}
                    >
                        <Input.TextArea
                            rows={4}
                            placeholder="Share your experience..."
                            className="p-2 border-gray-300 rounded-md"
                        // style={{
                        //     borderColor: "#e26972",
                        //     borderWidth: "2px",
                        //     borderRadius: "6px",
                        //     padding: "10px",
                        // }}
                        />
                    </Form.Item>

                    {/* Rating */}
                    <Form.Item
                        label={<Text className="text-md font-medium" style={{ color: "#572c57" }}>Rating</Text>}
                        name="rating"
                        rules={[{ required: true, message: "Please select a rating" }]}
                    >
                        <Rate className="text-xl" style={{ color: "#e26972" }} />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                            block
                            style={{
                                backgroundColor: "#e26972",
                                borderColor: "#e26972",
                                color: "white",
                                fontSize: "16px",
                                padding: "10px",
                                borderRadius: "6px",
                            }}
                            className="hover:opacity-90 transition duration-300"
                        >
                            Submit Review
                        </Button>
                    </Form.Item>
                </Form>
            </>

        </div>
    );
};

export default GiveReview;
