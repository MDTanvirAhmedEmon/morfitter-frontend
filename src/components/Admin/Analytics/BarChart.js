import { useGetAllTrainersQuery } from "@/redux/features/admin/analytic/trainerApi";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarCharts = () => {
  const { data: getAllTrainersData, isLoading } = useGetAllTrainersQuery();

  const trainerData = getAllTrainersData?.data || [];

  const maxTrainerCount =
    trainerData.length > 0
      ? Math.max(...trainerData.map((item) => item.trainer), 100)
      : 100;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { month, trainer } = payload[0].payload;
      return (
        <div className="custom-tooltip bg-white py-3 px-2 rounded border">
          <p className="label">{`Month: ${month}`}</p>
          <p className="label">{`Trainers: ${trainer}`}</p>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return <p>Loading chart...</p>; // Handle loading state
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={trainerData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis tickLine={false} dataKey="month" />
        <YAxis tickLine={false} domain={[0, maxTrainerCount + 1]} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          barSize={30}
          radius={[5, 5, 0, 0]}
          dataKey="trainer"
          fill="#0ba593"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
