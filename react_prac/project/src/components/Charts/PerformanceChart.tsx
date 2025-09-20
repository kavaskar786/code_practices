import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

interface PerformanceData {
  date: string;
  stars: number;
  destruction: number;
  attacks: number;
}

interface PerformanceChartProps {
  data: PerformanceData[];
  title?: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ 
  data, 
  title = 'Performance Trend' 
}) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-3 shadow-xl">
          <p className="text-gray-300 mb-2">{`Date: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}${entry.name === 'Destruction' ? '%' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="date" 
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
          />
          <YAxis stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="stars"
            stroke="#FFD700"
            strokeWidth={3}
            name="Stars"
            dot={{ fill: '#FFD700', r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="destruction"
            stroke="#4A90E2"
            strokeWidth={3}
            name="Destruction"
            dot={{ fill: '#4A90E2', r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="attacks"
            stroke="#E74C3C"
            strokeWidth={3}
            name="Attacks"
            dot={{ fill: '#E74C3C', r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;