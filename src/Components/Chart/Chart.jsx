import { LineChart, Line, ResponsiveContainer , Tooltip } from "recharts";

const Chart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="35%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="sale" stroke="#f1fa8c" strokeWidth={2} />
        </LineChart>
       
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
