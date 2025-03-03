"use client"
import { ConfigProvider, Layout } from "antd";
import { mainTheme } from "@/theme/ant-theme";
import { useState } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import MainHeader from "@/components/Admin/MainHeader";
import { useGetAdminInfoQuery } from "@/redux/features/admin/settings/privacyPolicyApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";

const { Content } = Layout;
export default function AdminLayout({ children }) {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const { data } = useGetAdminInfoQuery();
    console.log(data?.[0]);
    dispatch(setUser(data?.[0]))

    return (
        <ConfigProvider theme={mainTheme}>
            <div className="">
                {/* in the layout bg color is setup for not to show the animation delay make sure the menu color and this color are same */}
                <Layout className="bg-[#0ba593]">
                    <Sidebar className=' bg-[#0ba593]' collapsed={collapsed} ></Sidebar>
                    <Layout
                        style={{
                            marginLeft: collapsed ? 80 : 250,
                            transition: 'margin-left 0.2s ease',
                        }}
                        className={``}>
                        {/* my header */}
                        <MainHeader setCollapsed={setCollapsed} collapsed={collapsed}></MainHeader>
                        <Content
                            className="p-5 bg-white"
                            style={{}}
                        >
                            {/* my content */}
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </ConfigProvider>
    );
}
