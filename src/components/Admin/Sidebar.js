"use client";
import { Layout, Menu } from "antd";
import { TbPresentationAnalytics } from "react-icons/tb";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiVideoThin } from "react-icons/pi";
import { PiUsersLight } from "react-icons/pi";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

import { SettingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { clearRegisterInfo } from "@/redux/features/auth/registerSlice";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    Cookies.remove("morfitter-token");
    // dispatch(clearRegisterInfo());
    window.location.reload();
    router.push(`/admin-login`);
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 bg-greenColor">
      <div className=" h-full w-full relative ">
        <Sider
          className=" h-[100vh] w-[300px] bg-greenColor"
          width={250}
          collapsedWidth={80}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className=" w-full flex justify-center items-center py-10">
            <Link
              className={` ${
                collapsed ? "text-auto" : "text-[32px]"
              }  font-extrabold text-white hover:text-white `}
              href={`/`}
            >
              Morfitter
            </Link>
          </div>

          <Menu
            mode="inline"
            className="px-2"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <TbPresentationAnalytics className=" w-5 h-5" />,
                label: (
                  <Link className="" href={`/admin`}>
                    Analytics
                  </Link>
                ),
              },
              {
                key: "2",
                icon: <HiOutlineVideoCamera className=" w-5 h-5" />,
                label: (
                  <Link href={`/content-management`}>Content Management</Link>
                ),
              },
              {
                key: "3",
                icon: <PiVideoThin className=" w-5 h-5" />,
                label: <Link href={`/sessions`}>Sessions</Link>,
              },
              {
                key: "4",
                icon: <BsPerson className=" w-5 h-5" />,
                label: (
                  <Link href={`/all-personal-trainer`}>
                    All Personal Trainer
                  </Link>
                ),
              },
              {
                key: "5",
                icon: <PiUsersLight className=" w-5 h-5" />,
                label: <Link href={`/user-management`}>User Management</Link>,
              },

              {
                key: "6",
                icon: <SettingOutlined className="w-5 h-5" />,

                label: <p>Settings</p>,
                children: [
                  {
                    key: "6-1",
                    label: <Link href={`/settings/profile`}>Profile</Link>,
                  },
                  {
                    key: "6-2",
                    label: (
                      <Link href={`/settings/privacy-policy`}>
                        Privacy Policy
                      </Link>
                    ),
                  },
                  {
                    key: "6-3",
                    label: (
                      <Link href={`/settings/terms-condition`}>
                        Terms & Condition
                      </Link>
                    ),
                  },
                ],
              },
            ]}
          />
        </Sider>

        {collapsed ? (
          <Link href={`/auth/login`}>
            <div className=" absolute bottom-12 w-full flex justify-center cursor-pointer gap-3 items-center">
              <CiLogout className=" w-8 h-8 text-white" />
            </div>
          </Link>
        ) : (
          // <Link href={`/auth/login`}>
          <div
            onClick={handleLogOut}
            className=" absolute bottom-12 w-full flex justify-center cursor-pointer gap-3 items-center"
          >
            <CiLogout className=" w-8 h-8 text-white" />
            <p className=" text-white text-lg">Log Out</p>
          </div>
          // </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
