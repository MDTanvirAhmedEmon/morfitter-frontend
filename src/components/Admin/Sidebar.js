import { Layout, Menu, } from 'antd';
import { TbPresentationAnalytics } from "react-icons/tb";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiVideoThin } from "react-icons/pi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import Link from 'next/link';
const { Sider } = Layout;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    return (
        <div className='fixed top-0 left-0 bottom-0 bg-greenColor'>
            <Sider className='h-[100vh] w-[300px] bg-greenColor' width={250} collapsedWidth={80} trigger={null} collapsible collapsed={collapsed}>
                <p className={` ${collapsed ? 'text-lg' : 'text-3xl'} font-bold my-10 text-white text-center`}>Logo</p>
                <Menu
                    mode="inline"
                    className='px-2'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <TbPresentationAnalytics className=' w-5 h-5' />,
                            label: <Link className='' href={`/`}>Analytics</Link>,
                        },
                        {
                            key: '2',
                            icon: <HiOutlineVideoCamera className=' w-5 h-5' />,
                            label: <Link href={`competition`}>Competition</Link>,
                        },
                        {
                            key: '3',
                            icon: <PiVideoThin className=' w-5 h-5' />,
                            label: <Link href={`moderation`}>Moderation</Link>,
                        },
                        {
                            key: '4',
                            icon: <LiaMoneyCheckAltSolid className=' w-5 h-5' />,
                            label: <Link href={`payment-management`}>Payment Management</Link>,
                        },
                        {
                            key: '5',
                            icon: <PiUsersLight className=' w-5 h-5' />,
                            label: <Link href={`user-management`}>User Management</Link>,
                        },
                    ]}
                />
            </Sider>
        </div>
    );
};

export default Sidebar;