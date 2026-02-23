import React from "react";
import {
     BarChart,
     Bar,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     ResponsiveContainer,
     Area,
     AreaChart,
     LineChart,
     Line,
} from "recharts";

// #region JobsChart
interface JobsChartProps {
     data: any[];
}

export const JobsChart: React.FC<JobsChartProps> = ({ data }) => {
     return (
          <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                         dataKey="name"
                         axisLine={false}
                         tickLine={false}
                         tick={{ fill: '#64748b', fontSize: 12 }}
                         dy={10}
                    />
                    <YAxis
                         axisLine={false}
                         tickLine={false}
                         tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <Tooltip
                         cursor={{ fill: '#f1f5f9' }}
                         contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} />
               </BarChart>
          </ResponsiveContainer>
     );
};
// #endregion
interface RentChartProps {
     data: any[];
}

export const RentChart: React.FC<RentChartProps> = ({ data }) => {
     const getColor = (value: number) => {
               if (value < 50) {
                    return "#d42d2dff";
               } else if (value < 150) {
                    return "#d5e21dff";
               } else if (value < 350) {
                    return "#2dd4b8ff";
               }else{
                    return "#2dd4bf"; // Default color
               }
                
          }
     return (
          <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                         <linearGradient id="colorRent" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.2} />
                              <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                         </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                         dataKey="name"
                         axisLine={false}
                         tickLine={false}
                         tick={{ fill: '#64748b', fontSize: 12 }}
                         dy={10}
                    />
                    <YAxis
                         axisLine={false}
                         tickLine={false}
                         tick={{ fill: '#64748b', fontSize: 12 }}
                         tickFormatter={(value) => `${value}k`}
                    />
                    <Tooltip
                         contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    {(() => {
                         const lastValue = data && data.length > 0 ? data[data.length - 1].value : 0;
                         return (
                              <Area
                                   type="monotone"
                                   dataKey="value"
                                   stroke={getColor(lastValue)}
                                   strokeWidth={3}
                                   fillOpacity={1}
                                   fill="url(#colorRent)"
                              />
                         );
                    })()}
               </AreaChart>
          </ResponsiveContainer>
     );
};

// #endregion

interface SupportChartProps {
     data: any[];
}

export const SupportChart: React.FC<SupportChartProps> = ({ data }) => {
     return (
          <ResponsiveContainer width="100%" height="100%">
               <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                         dataKey="name"
                         axisLine={false}
                         tickLine={false}
                         tick={{ fill: '#64748b', fontSize: 12 }}
                         dy={10}
                    />
                    <YAxis
                         axisLine={false}
                         tickLine={false}
                         tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <Tooltip
                         contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line
                         type="monotone"
                         dataKey="value"
                         stroke="#8b5cf6"
                         strokeWidth={3}
                         dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4, stroke: '#fff' }}
                         activeDot={{ r: 6, strokeWidth: 0 }}
                    />
               </LineChart>
          </ResponsiveContainer>
     );
};
