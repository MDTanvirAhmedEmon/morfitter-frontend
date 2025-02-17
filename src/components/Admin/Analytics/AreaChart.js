/* eslint-disable react/prop-types */
import { useGetAllUsersQuery } from "@/redux/features/admin/analytic/userApi";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaCharts = () => {
  // Static data for the chart
  const revenueData = [
    { month: "Jan", netRevenue: 1200 },
    { month: "Feb", netRevenue: 1500 },
    { month: "Mar", netRevenue: 800 },
    { month: "Apr", netRevenue: 1600 },
    { month: "May", netRevenue: 2000 },
    { month: "Jun", netRevenue: 1700 },
    { month: "Jul", netRevenue: 2200 },
    { month: "Aug", netRevenue: 1900 },
    { month: "Sept", netRevenue: 2100 },
    { month: "Oct", netRevenue: 2300 },
    { month: "Nov", netRevenue: 2500 },
    { month: "Dec", netRevenue: 2800 },
  ];

  const { data: getAllUsersData, isLoading } = useGetAllUsersQuery();

  const UserData = getAllUsersData?.data || [];

  // Custom Tooltip for the chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { month, user } = payload[0].payload;
      return (
        <div className="custom-tooltip bg-white py-3 px-2 rounded border">
          <p className="label">{`Month: ${month}`}</p>
          <p className="label">{`User: $${user}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={UserData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ba593" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0ba593" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis tickLine={false} dataKey="month" />
        <YAxis tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="user"
          stroke="#0ba593"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
