import { Layout, Menu, } from 'antd';
import { TbPresentationAnalytics } from "react-icons/tb";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiVideoThin } from "react-icons/pi";
import { PiUsersLight } from "react-icons/pi";
import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';

const { Sider } = Layout;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    return (
        <div className='fixed top-0 left-0 bottom-0 bg-greenColor'>
            <Sider className='h-[100vh] w-[300px] bg-greenColor' width={250} collapsedWidth={80} trigger={null} collapsible collapsed={collapsed}>
                <div className=' w-full flex justify-center items-center py-10'>
                    <Link
                        className={` ${collapsed ? 'text-auto' : 'text-[32px]'}  font-extrabold text-white hover:text-white `}
                        href={`/`}>
                        Morfitter
                    </Link>

                </div>

                <Menu
                    mode="inline"
                    className='px-2'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <TbPresentationAnalytics className=' w-5 h-5' />,
                            label: <Link className='' href={`/admin`}>Analytics</Link>,
                        },
                        {
                            key: '2',
                            icon: <HiOutlineVideoCamera className=' w-5 h-5' />,
                            label: <Link href={`/content-management`}>Content Management</Link>,
                        },
                        {
                            key: '3',
                            icon: <PiVideoThin className=' w-5 h-5' />,
                            label: <Link href={`/sessions`}>Sessions</Link>,
                        },
                        {
                            key: '4',
                            icon: <BsPerson className=' w-5 h-5' />,
                            label: <Link href={`/all-personal-trainer`}>All Personal Trainer</Link>,
                        },
                        {
                            key: '5',
                            icon: <PiUsersLight className=' w-5 h-5' />,
                            label: <Link href={`/user-management`}>User Management</Link>,
                        },
                    ]}
                />
            </Sider>
        </div>
    );
};

export default Sidebar;