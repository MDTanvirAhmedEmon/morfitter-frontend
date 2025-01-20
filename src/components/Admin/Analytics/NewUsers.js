import { Avatar, Table } from "antd";

const NewUsers = () => {
  // Define columns for the table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <a>
          {name.firstName} {name.middleName || ""} {name.lastName}
        </a>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => address || "N/A",
    },
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
      render: (skills) => (skills.length ? skills.join(", ") : "N/A"),
    },
    {
      title: "Image",
      key: "profileImage",
      render: (_, record) => <Avatar size={40} src={record?.profileImage} />,
    },
  ];

  // Static data for the table
  const data = [
    {
      key: "1",
      name: { firstName: "John", middleName: "D.", lastName: "Doe" },
      email: "john.doe@example.com",
      address: "123 Main St, Springfield",
      skills: ["JavaScript", "React", "Node.js"],
      profileImage: "https://avatar.iran.liara.run/public/31",
    },
    {
      key: "2",
      name: { firstName: "Jane", middleName: "", lastName: "Smith" },
      email: "jane.smith@example.com",
      address: "456 Oak Ave, Metropolis",
      skills: ["Python", "Django"],
      profileImage: "https://avatar.iran.liara.run/public/45",
    },
    {
      key: "3",
      name: { firstName: "Mike", middleName: "A.", lastName: "Brown" },
      email: "mike.brown@example.com",
      address: "",
      skills: [],
      profileImage: "https://avatar.iran.liara.run/public/36",
    },
    {
      key: "4",
      name: { firstName: "Emily", middleName: "C.", lastName: "Clark" },
      email: "emily.clark@example.com",
      address: "789 Elm St, Gotham",
      skills: ["Java", "Spring Boot"],
      profileImage: "https://avatar.iran.liara.run/public/19",
    },
    {
      key: "5",
      name: { firstName: "Sophia", middleName: "", lastName: "Williams" },
      email: "sophia.williams@example.com",
      address: "321 Pine Rd, Star City",
      skills: ["C#", ".NET"],
      profileImage: "https://avatar.iran.liara.run/public/17",
    },
  ];

  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};

export default NewUsers;
