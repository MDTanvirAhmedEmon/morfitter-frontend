import { Input, Modal } from 'antd';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

const ShareModal = ({ isModalOpen, handleOk, handleCancel, shareUrl }) => {

    return (
        <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} >
            <div className=' flex gap-8 mt-5'>
                <FacebookShareButton url={shareUrl} >
                    <FacebookIcon size={50} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={50} round />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={50} round />
                </LinkedinShareButton>
            </div>
            <div className=' mt-6'>
                <p className=' text-lg mb-1'>Copy Link Below:</p>
                <Input defaultValue={shareUrl} />
            </div>

        </Modal>
    );
};

export default ShareModal;