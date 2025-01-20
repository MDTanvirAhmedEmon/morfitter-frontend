import { Button, Layout, theme } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";
const { Header } = Layout;


// eslint-disable-next-line react/prop-types
const MainHeader = ({ setCollapsed, collapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div >
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className=' flex justify-between items-center pr-4 bg-greenColor'>
                    <Button
                        type="text"
                        icon={collapsed ? <RxHamburgerMenu className=' text-white -ml-8 w-8 h-8 ' /> : <RxHamburgerMenu className=' text-white -ml-8 w-8 h-8 ' />}
                        onClick={() => setCollapsed(!collapsed)}
                        className=' text-white hover:bg-transparent'
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className=''><p className=' text-xl text-white'>Welcome, Admin</p></div>
                </div>
            </Header>
        </div>
    );
};

export default MainHeader;