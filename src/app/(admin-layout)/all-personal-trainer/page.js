"use client"
import PersonalTrainersTable from "@/components/Admin/PersonalTrainerList/PersonalTrainer";
import React from "react";

const AllPersonalTrainer = () => {
  return (
    <div>
      <div className="p-5 flex flex-col md:flex-row md:justify-between md:items-center mb-5">
        <h1 className="text-3xl font-bold mb-5">Personal Trainers</h1>
        <div>
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#0ba593] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
            />
          </div>
        </div>
      </div>
      <PersonalTrainersTable />
    </div>
  );
};

export default AllPersonalTrainer;
