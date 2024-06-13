import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Stack1', level: 0 },
  { name: 'Stack2', level: 0 },
  { name: 'Stack3', level: 0 },
  { name: 'Stack4', level: 0 },
];

const processedData = data.map(item => ({
  ...item,
  empty: 100 - item.level,
}));

const AbilityBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={processedData}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        barSize={10}
      >
        <XAxis type="number" hide />
        <YAxis 
          dataKey="name" 
          type="category"
          axisLine={false}
          tickLine={false}
          />
        <Tooltip />
        <Bar dataKey="level" stackId="a" fill="#CCC3BC" />
        <Bar dataKey="empty" stackId="a" fill="#e0e0e0" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AbilityBarChart;
