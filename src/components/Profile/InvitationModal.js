import { Modal, Rate, Form, Input, Button } from "antd";
import Image from "next/image";
import SingleModalItem from "./SingleModalItem";

const InvitationModal = ({ isInvitationModalOpen, handleInvitationCancel, handleInvitationOk, data }) => {

    console.log('dataadat', data);


    return (
        <Modal
            className="w-auto"
            footer={null}
            width={850}
            centered
            open={isInvitationModalOpen}
            onCancel={handleInvitationCancel}
        >
            <div className=" flex gap-5">
                {
                    data?.length === 0 && (
                        <div className="text-center h-32 w-full flex items-center justify-center">
                            <p className=" text-xl">No invitations found</p>
                        </div>
                    )
                }
                {
                    data?.map(item => (
                        <SingleModalItem key={item?._id} item={item}></SingleModalItem>
                    ))
                }
            </div>

        </Modal>
    );
};

export default InvitationModal;
