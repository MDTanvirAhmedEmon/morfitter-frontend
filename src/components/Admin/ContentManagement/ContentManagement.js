"use client";
import { ConfigProvider, Pagination, Spin } from "antd";
import { useState } from "react";
import SingleContent from "./SingleContent";

import { useGetAllContentsForAdminQuery } from "@/redux/features/admin/contentManagement/contentManagementApi";

const ContentManagementPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useGetAllContentsForAdminQuery({
    page: currentPage,
    searchTerm: searchTerm,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  if(isLoading){
    return (
      <div className=" flex items-center justify-center h-[400px]">
        <Spin size="large"></Spin>
      </div>
    )
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBorderColor: "black",
                hoverBorderColor: "black",
              },
            },
          }}
        >
          <h1 className="text-3xl font-bold mb-5">Content Management</h1>
          <div>
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#0ba593] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
              />
            </div>
          </div>
        </ConfigProvider>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-12 mb-6">
        {data?.data?.data?.map((item) => (
          <SingleContent key={item?._id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="my-8 ">
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                colorPrimary: "rgb(0,0,0)",
                colorPrimaryHover: "rgb(0,0,0)",
              },
            },
          }}
        >
          <Pagination
            current={data?.meta?.page}
            pageSize={data?.meta?.limit}
            total={data?.meta?.total}
            onChange={handlePageChange}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ContentManagementPage;
