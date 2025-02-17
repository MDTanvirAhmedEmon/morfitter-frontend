"use client";

import AreaCharts from "@/components/Admin/Analytics/AreaChart";
import BarCharts from "@/components/Admin/Analytics/BarChart";
import NewUsers from "@/components/Admin/Analytics/NewUsers";

const Analytics = () => {
  return (
    <div className="p-5 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <h1 className="text-3xl font-bold mb-5">Trainers</h1>
          <BarCharts />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-5">Users</h1>
          <AreaCharts />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-3xl font-bold mb-5">New Users</h1>
        <NewUsers />
      </div>
    </div>
  );
};

export default Analytics;
