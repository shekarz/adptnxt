import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { AiOutlineInfoCircle } from "react-icons/ai";

const data = [
 { name: "Group A", value: 378 },
 { name: "Group B", value: 300 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
 cx,
 cy,
 midAngle,
 innerRadius,
 outerRadius,
 percent,
 index,
}) => {
 const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
 const x = cx + radius * Math.cos(-midAngle * RADIAN);
 const y = cy + radius * Math.sin(-midAngle * RADIAN);

 return (
  <text
   x={x}
   y={y}
   fill="white"
   textAnchor={x > cx ? "start" : "end"}
   dominantBaseline="central"
  >
   {`${(percent * 100).toFixed(1)}%`}
  </text>
 );
};

const PiechartComponent = () => {
 return (
  <>
   <div className="mb-10 font-semibold">
    Portion of Sales <AiOutlineInfoCircle size={20} className="inline-block" />
   </div>
   <div className="flex flex-col items-center">
    <div className="relative">
     <PieChart
      width={window.innerWidth > 768 ? 300 : 200}
      height={window.innerWidth > 768 ? 300 : 200}
     >
      <Pie
       data={data}
       cx={window.innerWidth > 768 ? 150 : 100}
       cy={window.innerWidth > 768 ? 150 : 100}
       labelLine={false}
       label={renderCustomizedLabel}
       fill="#8884d8"
       dataKey="value"
      >
       <Cell fill="#fa5573" />
       <Cell fill="#5ee3f2" />
      </Pie>
     </PieChart>
     <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
      <p className="font-light text-sm">Total</p>
      <p className="font-semibold text-lg">2659</p>
     </div>
    </div>
    <div className="flex mt-2 gap-5">
     <div className="flex items-center gap-1">
      <span className="inline-block w-4 h-4 rounded-full bg-[#fa5573]"></span>
      <span className="text-sm font-semibold text-gray-600">
       WooCommerce Store
      </span>
     </div>
     <div className="flex items-center gap-1">
      <span className="inline-block w-4 h-4 rounded-full bg-[#5ee3f2]"></span>
      <span className="text-sm font-semibold text-gray-600">Shopify Store</span>
     </div>
    </div>
   </div>
  </>
 );
};

export default PiechartComponent;
