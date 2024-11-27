import { Drawer } from 'antd';

const MobileNavbar = ({onClose, open}) => {
    return (
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    );
};

export default MobileNavbar;