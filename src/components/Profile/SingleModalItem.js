import { useGiveReviewMutation, useRejectInvitationMutation } from "@/redux/features/invitation/invitationApi";
import { Rate, Form, Input, Button, message } from "antd";
import Image from "next/image";
import defaultProfilePic from '../../assets/profile/profile_image.webp'

const SingleModalItem = ({ item, handleInvitationOk }) => {

    const [form] = Form.useForm();
    const [giveReview, { isLoading }] = useGiveReviewMutation();
    const onFinish = (values) => {
        const reviewData = {
            trainer_id: item?.trainer_id,
            trainee_id: item?.trainee_id,
            review_text: values?.review_text,
            rating: values?.rating
        }

        giveReview(reviewData).unwrap()
            .then(() => {
                message.success(`Review submitted successfully`)
                handleInvitationOk()
            })
            .catch((error) => {
                message.error(error?.data?.message)
            })
    };
    const [rejectInvitation] = useRejectInvitationMutation();
    const handleReject = () => {
        rejectInvitation(item?._id).unwrap()
            .then(() => {
                message.success(`Rejected Successfully`)
                handleInvitationOk()
            })
            .catch((error) => {
                message.error(error?.data?.message)
            })
    }

    return (
        <div className=" shadow-md px-5 py-5 mt-5 w-full">
            <div className=" flex justify-between items-center">
                <div className=" flex items-center gap-2">
                    <Image
                        className=" w-14 rounded-2xl object-cover "
                        src={item?.traineeData?.profileImageUrl
                            ? `${item?.trainerData?.profileImageUrl}`
                            : defaultProfilePic
                        }
                        height={200} width={200} alt="profile" />
                    <h3 className=" capitalize text-lg">{item?.trainerData?.firstName} {item?.trainerData?.lastName}</h3>
                </div>
                <div>
                    <button onClick={handleReject} className=" bg-red-500 px-4 py-1 text-white rounded-2xl">Reject</button>
                </div>
            </div>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ rating: 5 }}
            >
                <Form.Item
                    name="review_text"
                    label="Review"
                    rules={[{ required: true, message: "Please enter your review" }]}
                >
                    <Input.TextArea rows={4} placeholder="Write your review here..." />
                </Form.Item>

                <Form.Item
                    name="rating"
                    label="Rating"
                    rules={[{ required: true, message: "Please give a rating" }]}
                >
                    <Rate />
                </Form.Item>

                <Form.Item>
                    <button disabled={isLoading} className=" bg-secondary text-white w-full py-1 rounded-2xl" type="primary" htmlType="submit">
                        Submit
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SingleModalItem;