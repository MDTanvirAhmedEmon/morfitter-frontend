/* eslint-disable react/prop-types */
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  
  const BarCharts = () => {
    const data = [
      { month: "Jan", totalParticipations: 4000 },
      { month: "Feb", totalParticipations: 3000 },
      { month: "Mar", totalParticipations: 2000 },
      { month: "Apr", totalParticipations: 2780 },
      { month: "May", totalParticipations: 1890 },
      { month: "Jun", totalParticipations: 2390 },
      { month: "Jul", totalParticipations: 3490 },
      { month: "Aug", totalParticipations: 3490 },
      { month: "Sept", totalParticipations: 1340 },
      { month: "Oct", totalParticipations: 1740 },
      { month: "Nov", totalParticipations: 5740 },
      { month: "Dec", totalParticipations: 4740 },
    ];
  
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        const { month, totalParticipations } = payload[0].payload;
        return (
          <div className="custom-tooltip bg-white py-3 px-2 rounded border">
            <p className="label">{`Month: ${month}`}</p>
            <p className="label">{`Participant: ${totalParticipations}`}</p>
          </div>
        );
      }
      return null;
    };
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis tickLine={false} dataKey="month" />
          <YAxis
            tickLine={false}
            domain={[0, Math.max(...data.map((item) => item.totalParticipations)) + 1000]} // Adjust domain to fit data
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            barSize={30}
            radius={[5, 5, 0, 0]}
            dataKey="totalParticipations"
            fill="#0ba593"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default BarCharts;
  