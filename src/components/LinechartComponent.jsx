import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 CartesianGrid,
 Tooltip,
 Legend,
} from "recharts";

import { AiOutlineInfoCircle } from "react-icons/ai";

const data = [
 {
  name: "6/30/2024 - 7/6/2024",
  sales: 1404,
  orders: 4,
 },
 {
  name: "7/7/2024 - 7/13/2024",
  sales: 800,
  orders: 2,
 },
 {
  name: "7/21/2024 - 7/27/2024",
  sales: 500,
  orders: 2,
 },
];

const CustomTooltip = ({ active, payload, label }) => {
 if (active && payload && payload.length) {
  const currentData = payload[0].payload;
  const sales = currentData.sales;
  const orders = currentData.orders;
  return (
   <div className="">
    <p className="text-gray-500 text-sm">{`${label}`}</p>
    <p className="text-gray-500 text-sm">
     <span className="w-2 h-2 rounded-full mx-2 bg-orange-400 inline-block"></span>
     {`Orders - ${orders}`}
    </p>
    <p className="text-gray-500 text-sm">
     <span className="w-2 h-2 rounded-full mx-2 bg-[#1fa1de] inline-block"></span>
     {`Sales - ${sales}`}
    </p>
    <p className="text-gray-500 text-sm">
     <span className="w-2 h-2 rounded-full mx-2 bg-zinc-950 inline-block"></span>
     {`Avg Order Value - ${(sales / orders).toFixed(2)}`}
    </p>
   </div>
  );
 }

 return null;
};

const LinechartComponent = () => {
 const formatYAxis = (tick) => {
  return `${tick / 1000}k`;
 };
 return (
  <>
   <div className="mb-10 font-semibold">
    Sales vs Orders <AiOutlineInfoCircle size={20} className="inline-block" />
   </div>
   <LineChart
    width={window.innerWidth > 768 ? 800 : 400}
    height={window.innerWidth > 768 ? 400 : 250}
    data={data}
    margin={{
     top: 5,
     right: 30,
     left: 20,
     bottom: 5,
    }}
   >
    <CartesianGrid strokeDasharray="3 3" />

    <XAxis dataKey="name" />
    <YAxis yAxisId="left" tickFormatter={formatYAxis} />
    <YAxis yAxisId="right" orientation="right" />
    <Tooltip content={<CustomTooltip />} />
    <Legend verticalAlign="top" align="center" />
    <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#f08126" />
    <Line
     yAxisId="left"
     type="monotone"
     dataKey="sales"
     stroke="#1fa1de"
     activeDot={{ r: 8 }}
    />
   </LineChart>
  </>
 );
};

export default LinechartComponent;
