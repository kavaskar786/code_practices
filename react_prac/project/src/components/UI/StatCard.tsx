import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Card from './Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  color?: 'primary' | 'clan' | 'war' | 'success' | 'warning' | 'error';
  glow?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  color = 'primary',
  glow = false
}) => {
  const colorClasses = {
    primary: 'text-primary-400 bg-primary-500/10',
    clan: 'text-clan-400 bg-clan-500/10',
    war: 'text-war-400 bg-war-500/10',
    success: 'text-green-400 bg-green-500/10',
    warning: 'text-yellow-400 bg-yellow-500/10',
    error: 'text-red-400 bg-red-500/10',
  };

  return (
    <Card hover glow={glow} className="animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {change && (
            <div className={`flex items-center text-sm mt-1 ${
              change.type === 'increase' ? 'text-green-400' : 'text-red-400'
            }`}>
              <span>{change.type === 'increase' ? '↗' : '↘'}</span>
              <span className="ml-1">{Math.abs(change.value)}%</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;