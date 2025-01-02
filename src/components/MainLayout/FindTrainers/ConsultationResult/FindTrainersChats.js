import { Modal } from 'antd';

const FindTrainersChats = ({ isModalOpen, handleOk, handleCancel }) => {
    return (
        <Modal footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            
        </Modal>
    );
};

export default FindTrainersChats;