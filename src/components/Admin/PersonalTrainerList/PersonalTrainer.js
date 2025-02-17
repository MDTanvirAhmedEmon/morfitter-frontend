import { getBaseUrl } from "@/config/envConfig";
import { useGetallPersonalTrainerQuery } from "@/redux/features/admin/allPersonalTrainer/allPersonalTrainerApi";
import { Avatar, Popconfirm, Table } from "antd";

const PersonalTrainersTable = () => {
  const { data: getallPersonalTrainerData, isLoading } =
    useGetallPersonalTrainerQuery();
  console.log(getallPersonalTrainerData?.data);

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
      title: "Qualification",
      dataIndex: "qualification",
      key: "qualification",
      render: (qualification) => qualification?.join(", ") || "N/A",
    },
    {
      title: "User Status",
      dataIndex: "userData",
      key: "status",
      render: (userData) => (
        <button
          className={`cursor-default px-2 py-1 rounded-md ${
            userData?.status === "active"
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
          onConfirm={() => confirmBan(record._id)}
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

  const confirm = (id) => {
    message.success(`User with ID ${id} banned successfully`);
  };

  if (isLoading) {
    return <p>Loading trainers...</p>;
  }

  return (
    <div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={getallPersonalTrainerData?.data?.data || []}
      />
    </div>
  );
};

export default PersonalTrainersTable;
