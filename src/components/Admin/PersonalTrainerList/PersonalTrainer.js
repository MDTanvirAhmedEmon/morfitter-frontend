import { Avatar, Popconfirm, Table } from "antd";

const PersonalTrainersTable = () => {
    const users = [
      {
        key: "1",
        userId: { _id: "1" },
        profileImg: "https://avatar.iran.liara.run/public/31",
        name: { firstName: "John", lastName: "Doe" },
        email: "john.doe@example.com",
        skills: ["JavaScript", "React", "Node.js"],
        address: "123 Main St, Cityville",
        status: "active",
      },
      {
        key: "2",
        userId: { _id: "2" },
        profileImg: "https://avatar.iran.liara.run/public/45",
        name: { firstName: "Jane", lastName: "Smith" },
        email: "jane.smith@example.com",
        skills: ["Python", "Django", "Machine Learning"],
        address: "456 Elm St, Townsville",
        status: "inactive",
      },
      {
        key: "3",
        userId: { _id: "3" },
        profileImg: "https://avatar.iran.liara.run/public/36",
        name: { firstName: "Mike", lastName: "Johnson" },
        email: "mike.johnson@example.com",
        skills: ["HTML", "CSS", "Bootstrap"],
        address: "789 Oak St, Villagetown",
        status: "active",
      },
      {
          key: "4",
          userId: { _id: "2" },
          profileImg: "https://avatar.iran.liara.run/public/32",
          name: { firstName: "Jane", lastName: "Smith" },
          email: "jane.smith@example.com",
          skills: ["Python", "Django", "Machine Learning"],
          address: "456 Elm St, Townsville",
          status: "inactive",
        },
        {
          key: "5",
          userId: { _id: "3" },
          profileImg: "https://avatar.iran.liara.run/public/33",
          name: { firstName: "Mike", lastName: "Johnson" },
          email: "mike.johnson@example.com",
          skills: ["HTML", "CSS", "Bootstrap"],
          address: "789 Oak St, Villagetown",
          status: "active",
        },
        {
          key: "6",
          userId: { _id: "2" },
          profileImg: "https://avatar.iran.liara.run/public/34",
          name: { firstName: "Jane", lastName: "Smith" },
          email: "jane.smith@example.com",
          skills: ["Python", "Django", "Machine Learning"],
          address: "456 Elm St, Townsville",
          status: "inactive",
        },
        {
          key: "7",
          userId: { _id: "3" },
          profileImg: "https://avatar.iran.liara.run/public/35",
          name: { firstName: "Mike", lastName: "Johnson" },
          email: "mike.johnson@example.com",
          skills: ["HTML", "CSS", "Bootstrap"],
          address: "789 Oak St, Villagetown",
          status: "active",
        },
    ];
  
    const confirm = (id) => {
      message.success(`User with ID ${id} banned successfully`);
    };
  
    const columns = [
      {
        title: "Image",
        key: "image",
        render: (_, record) => (
          <Avatar size={40} className="shadow-md" src={record?.profileImg} />
        ),
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (_, record) => (
          <p>
            {record?.name?.firstName} {record?.name?.lastName}
          </p>
        ),
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Skills",
        dataIndex: "skills",
        key: "skills",
        render: (_, record) => (
          <>
            {record?.skills?.map((skill, index) => (
              <span key={index}>{skill}{index < record.skills.length - 1 ? ", " : ""}</span>
            ))}
          </>
        ),
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "User Status",
        key: "status",
        render: (_, record) => (
          <div className="flex gap-4">
            {record?.status === "active" ? (
              <button className="cursor-default bg-green-500 text-white px-2 py-1 rounded-md">
                Active User
              </button>
            ) : (
              <button className="cursor-default bg-red-500 text-white px-2 py-1 rounded-md">
                Banned
              </button>
            )}
          </div>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <div className="flex gap-4">
            <Popconfirm
              title="Ban This User"
              description="Are you sure to ban this user?"
              onConfirm={() => confirm(record?.userId?._id)}
              okText="Yes"
              cancelText="No"
            >
              <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                Ban
              </button>
            </Popconfirm>
          </div>
        ),
      },
    ];
  
    return (
      <div>
        <Table pagination={false} columns={columns} dataSource={users} />
      </div>
    );
  };
  
  export default PersonalTrainersTable;