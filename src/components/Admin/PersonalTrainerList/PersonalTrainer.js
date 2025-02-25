"use client";
import { getBaseUrl } from "@/config/envConfig";
import { useGetallPersonalTrainerQuery } from "@/redux/features/admin/allPersonalTrainer/allPersonalTrainerApi";
import { useUpdateUserMutation } from "@/redux/features/admin/userManagement/userManagementApi";
import { Avatar, message, Pagination, Popconfirm, Spin, Table } from "antd";
import { useState } from "react";

const PersonalTrainersTable = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getallPersonalTrainerData, isLoading } =
    useGetallPersonalTrainerQuery({
      page: currentPage,
      searchTerm: searchQuery,
    });
  // console.log(getallPersonalTrainerData?.data);
  const [updateUser] = useUpdateUserMutation();

  const confirm = (id) => {
    updateUser(id)
      .unwrap()
      .then(() => {
        message.success("Status Changed Successfully");
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "userData",
      key: "image",
      render: (_, record) =>
        record?.profileImageUrl ? (
          <Avatar
            size={40}
            src={`http://10.0.60.166:5000${record?.profileImageUrl}`}
          />
        ) : (
          <Avatar size={40} src="https://avatar.iran.liara.run/public/43" />
        ),
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "name",
      render: (_, record) => (
        <p>{`${record?.firstName} ${record?.lastName}`}</p>
      ),
    },
    {
      title: "Email",
      dataIndex: "userData",
      key: "email",
      render: (_, record) => record?.userData?.email || "N/A",
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      render: (_, record) => record?.contactNo,
    },
    {
      title: "Qualification",
      dataIndex: "qualification",
      key: "qualification",
      render: (qualification) => qualification?.join(", ") || "N/A",
    },
    {
      title: "User Status",
      dataIndex: "userData",
      key: "status",
      render: (_, record) => (
        <button
          className={`cursor-default px-2 py-1 rounded-md ${
            record?.userData?.status === "in-progress"
              ? "bg-green-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {record?.userData?.status || "N/A"}
        </button>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title={`${
            record?.userData?.status === "blocked" ? "Unblock" : "Ban"
          }  This User`}
          description={`Are you sure you want to ${
            record?.userData?.status === "blocked" ? "unblock" : "ban"
          } this user? `}
          onConfirm={() => confirm(record?.userData?._id)}
          okText="Yes"
          cancelText="No"
        >
          {record?.userData?.status === "blocked" ? (
            <button className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">
              unblock
            </button>
          ) : (
            <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
              Ban
            </button>
          )}
        </Popconfirm>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className=" h-[40vh] flex justify-center items-center">
        <Spin size="large"></Spin>
      </div>
    );
  }

  return (
    <div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={getallPersonalTrainerData?.data?.data || []}
      />
      <div className="mt-6">
        {getallPersonalTrainerData?.data?.data?.length !== 0 && (
          <Pagination
            current={getallPersonalTrainerData?.data?.meta?.page}
            pageSize={getallPersonalTrainerData?.data?.meta?.limit}
            total={getallPersonalTrainerData?.data?.meta?.total}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default PersonalTrainersTable;
