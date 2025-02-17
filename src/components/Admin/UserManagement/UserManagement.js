import { useGetallUserManagementQuery } from "@/redux/features/admin/userManagement/userManagementApi";
import { Avatar, message, Pagination, Popconfirm, Table } from "antd";
import { useState } from "react";

const AllUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getallUserManagementData, isLoading } =
    useGetallUserManagementQuery({ page: currentPage });

  // console.log(getallUserManagementData?.data);

  const confirm = (id) => {
    message.success(`User with ID ${id} banned successfully`);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "userData",
      key: "image",
      render: (userData) =>
        userData?.profileImageUrl ? (
          <Avatar
            size={40}
            src={`${getBaseUrl()}${userData?.profileImageUrl}`}
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
      render: (userData) => userData?.email || "N/A",
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "User Status",
      dataIndex: "userData",
      key: "status",
      render: (userData) => (
        <button
          className={`cursor-default px-2 py-1 rounded-md ${
            userData?.status === "in-progress"
              ? "bg-green-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {userData?.status || "N/A"}
        </button>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title="Ban This User"
          description="Are you sure you want to ban this user?"
          onConfirm={() => confirm(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
            Ban
          </button>
        </Popconfirm>
      ),
    },
  ];

  if (isLoading) {
    return <p>Loading trainers...</p>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={getallUserManagementData?.data?.data || []}
      />
      <div className="mt-5 flex justify-end ">
        {getallUserManagementData?.data?.data?.length !== 0 && (
          <Pagination
            current={getallUserManagementData?.data?.meta?.page}
            pageSize={getallUserManagementData?.data?.meta?.limit}
            total={getallUserManagementData?.data?.meta?.total}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default AllUsers;
