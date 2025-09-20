import React, { useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';
import { useGameStore } from '../stores/gameStore';
import { Trophy, Star, Target, Users, Crown, Shield, Swords } from 'lucide-react';
import StatCard from '../components/UI/StatCard';
import PerformanceChart from '../components/Charts/PerformanceChart';
import WarResultsChart from '../components/Charts/WarResultsChart';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const { 
    currentPlayer, 
    currentClan, 
    performanceMetrics, 
    isLoading,
    setLoading 
  } = useGameStore();

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // Mock data for demonstration
  const mockPerformanceData = [
    { date: '2024-01-01', stars: 25, destruction: 85, attacks: 30 },
    { date: '2024-01-02', stars: 28, destruction: 88, attacks: 32 },
    { date: '2024-01-03', stars: 30, destruction: 92, attacks: 33 },
    { date: '2024-01-04', stars: 27, destruction: 86, attacks: 31 },
    { date: '2024-01-05', stars: 32, destruction: 94, attacks: 35 },
    { date: '2024-01-06', stars: 29, destruction: 89, attacks: 33 },
    { date: '2024-01-07', stars: 31, destruction: 91, attacks: 34 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user?.username}!
          </h1>
          <p className="text-gray-400 mt-2">
            Here's your Clash of Clans performance overview
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Role</p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400 capitalize">
            {user?.role?.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Trophies"
          value="3,247"
          icon={Trophy}
          change={{ value: 5.2, type: 'increase' }}
          color="primary"
          glow
        />
        <StatCard
          title="War Stars"
          value="142"
          icon={Star}
          change={{ value: 2.1, type: 'increase' }}
          color="warning"
        />
        <StatCard
          title="Attack Wins"
          value="89"
          icon={Target}
          change={{ value: 8.7, type: 'increase' }}
          color="success"
        />
        <StatCard
          title="Clan Rank"
          value="#12"
          icon={Crown}
          change={{ value: 1.5, type: 'decrease' }}
          color="clan"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PerformanceChart 
          data={mockPerformanceData}
          title="Performance Trend (Last 7 Days)"
        />
        <WarResultsChart
          wins={45}
          losses={12}
          ties={3}
          title="War Results Overview"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 card-hover cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-clan-500/10 rounded-lg">
              <Users className="h-8 w-8 text-clan-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">View Clan</h3>
              <p className="text-gray-400">Check clan members and statistics</p>
            </div>
          </div>
        </div>

        <div className="card p-6 card-hover cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-war-500/10 rounded-lg">
              <Swords className="h-8 w-8 text-war-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Current War</h3>
              <p className="text-gray-400">Monitor ongoing war progress</p>
            </div>
          </div>
        </div>

        <div className="card p-6 card-hover cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary-500/10 rounded-lg">
              <Shield className="h-8 w-8 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Player Stats</h3>
              <p className="text-gray-400">Detailed player analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Won war against "Dragon Warriors"', time: '2 hours ago', type: 'success' },
            { action: 'Promoted to Elder in clan', time: '1 day ago', type: 'info' },
            { action: 'Reached 3000 trophies milestone', time: '3 days ago', type: 'achievement' },
            { action: 'Completed season challenges', time: '5 days ago', type: 'success' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-dark-700/50">
              <div className={`w-3 h-3 rounded-full ${
                activity.type === 'success' ? 'bg-green-400' :
                activity.type === 'info' ? 'bg-blue-400' :
                'bg-yellow-400'
              }`} />
              <div className="flex-1">
                <p className="text-white">{activity.action}</p>
                <p className="text-gray-400 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;