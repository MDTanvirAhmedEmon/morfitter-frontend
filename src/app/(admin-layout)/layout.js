"use client"
import { ConfigProvider, Layout } from "antd";
import { mainTheme } from "@/theme/ant-theme";
import { useState } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import MainHeader from "@/components/Admin/MainHeader";

const { Content } = Layout;
export default function AdminLayout({ children }) {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <ConfigProvider theme={mainTheme}>
            <div className="">
                {/* in the layout bg color is setup for not to show the animation delay make sure the menu color and this color are same */}
                <Layout className="bg-[#1d1d1b]">
                    <Sidebar className=' bg-[#282826]' collapsed={collapsed} ></Sidebar>
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
