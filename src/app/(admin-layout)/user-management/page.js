"use client";

import AllUsers from "@/components/Admin/UserManagement/UserManagement";
import { useState } from "react";

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div>
      <div className="p-5 flex flex-col md:flex-row md:justify-between md:items-center mb-5">
        <h1 className="text-3xl font-bold mb-5">Manage Users</h1>
        <div>
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-[#0ba593] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
            />
          </div>
        </div>
      </div>
      <AllUsers searchQuery={searchQuery} />
    </div>
  );
};

export default UserManagement;
