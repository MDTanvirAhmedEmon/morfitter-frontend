import { getBaseUrl } from "@/config/envConfig";
import { useGetAllNewUsersQuery } from "@/redux/features/admin/newUserApi";
import { Avatar, Table } from "antd";

const NewUsers = () => {
  const { data: getAllNewUsersData } = useGetAllNewUsersQuery();
  console.log(getAllNewUsersData?.data);

  // Define columns for the table
  const columns = [
    {
      title: "Name",
      dataIndex: "userInfo",
      key: "name",
      render: (userInfo) =>
        userInfo ? (
          <a>
            {userInfo.firstName} {userInfo.lastName}
          </a>
        ) : (
          "N/A"
        ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "userInfo",
      key: "address",
      render: (userInfo) => (userInfo?.address ? userInfo.address : "N/A"),
    },
    {
      title: "Contact No",
      dataIndex: "userInfo",
      key: "contactNo",
      render: (userInfo) => (userInfo?.contactNo ? userInfo.contactNo : "N/A"),
    },
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
  ];

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
