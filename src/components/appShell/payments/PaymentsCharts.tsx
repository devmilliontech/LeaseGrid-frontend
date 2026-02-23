import { 
          Pie,
          PieChart,
          type PieLabelRenderProps,
          ResponsiveContainer,
          Cell,
          AreaChart,
          CartesianGrid,
          XAxis,
          YAxis,
          Tooltip,
          Area
       } from 'recharts';


// Transaction Volume Trend

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






// #region Sample data
const data = [
     { name: 'Group A', value: 100 },
     { name: 'Group B', value: 100 },
     { name: 'Group C', value: 600 },
     { name: 'Group D', value: 200 },
];

// #endregion
const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
     if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
          return null;
     }
     const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
     const ncx = Number(cx);
     const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
     const ncy = Number(cy);
     const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

     return (
          <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
               {`${((percent ?? 1) * 100).toFixed(0)}%`}
          </text>
     );
};

export default function PieChartWithCustomizedLabel({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
     return (
          <div style={{ width: '350px', maxWidth: '500px', margin: '0 auto' }}>
               <ResponsiveContainer width="100%" aspect={1}>
                    <PieChart>
                         <Pie
                              data={data}
                              labelLine={false}
                              label={renderCustomizedLabel}
                              fill="#8884d8"
                              dataKey="value"
                              isAnimationActive={isAnimationActive}
                         >
                              {data.map((_, index) => (
                                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                         </Pie>
                    </PieChart>
               </ResponsiveContainer>
          </div>
     );
}
