import { getBaseUrl } from "@/config/envConfig";
import { useGetAllNewUsersQuery } from "@/redux/features/admin/analytic/newUserApi";
import { Avatar, Spin, Table } from "antd";

const NewUsers = () => {
  const { data: getAllNewUsersData, isLoading } = useGetAllNewUsersQuery();
  console.log(getAllNewUsersData?.data);

  // Define columns for the table
  const columns = [
    {
      title: "Image",
      key: "profileImage",
      dataIndex: "userInfo",
      render: (userInfo) =>
        userInfo?.profileImageUrl ? (
          <Avatar
            size={40}
            src={`${getBaseUrl()}${userInfo?.profileImageUrl}`}
          />
        ) : (
          <Avatar size={40} src="https://avatar.iran.liara.run/public/43" />
        ),
    },
    {
      title: "Name",
      dataIndex: "userInfo",
      key: "name",
      render: (_, record) =>
        record?.userInfo ? (
          <a>
            {record?.userInfo.firstName} {record?.userInfo.lastName}
          </a>
        ) : (
          "N/A"
        ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (record?.email ? record?.email : "N/A"),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "address",
      render: (_, record) => (record?.role ? <p className=" capitalize">{record?.role}</p> : "N/A"),
    },
    {
      title: "Contact No",
      dataIndex: "userInfo",
      key: "contactNo",
      render: (_, record) => (record?.userInfo?.contactNo ? record.userInfo?.contactNo : "N/A"),
    },
  ];

  if (isLoading) {
    return <div className=" h-[40vh] flex justify-center items-center"><Spin size="large"></Spin></div>;
  }

  return (
    <div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={getAllNewUsersData?.data || []}
        rowKey="_id"
      />
    </div>
  );
};

export default NewUsers;
