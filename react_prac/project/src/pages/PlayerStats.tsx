import React, { useState } from 'react';
import { Search, Crown, Trophy, Star, Target, Shield, Zap, Award } from 'lucide-react';
import Card from '../components/UI/Card';
import StatCard from '../components/UI/StatCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const PlayerStats: React.FC = () => {
  const [playerTag, setPlayerTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerTag.trim()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Mock player data
  const mockPlayer = {
    name: "Pro Player",
    tag: "#ABCD1234",
    townHallLevel: 15,
    expLevel: 180,
    trophies: 3247,
    bestTrophies: 3456,
    warStars: 142,
    attackWins: 1234,
    defenseWins: 567,
    clan: {
      name: "Elite Warriors",
      tag: "#CLAN123",
      role: "Elder"
    },
    league: {
      name: "Champion League III"
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Player Statistics</h1>
          <p className="text-gray-400 mt-2">
            Search and analyze player performance data
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <Card className="p-6">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter player tag (e.g., #ABCD1234)"
              className="input-field w-full pl-10"
              value={playerTag}
              onChange={(e) => setPlayerTag(e.target.value)}
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button
            type="submit"
            className="btn-primary"
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner size="sm" /> : 'Search Player'}
          </button>
        </form>
      </Card>

      {/* Player Info Card */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center">
              <Crown className="h-10 w-10 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{mockPlayer.name}</h2>
              <p className="text-gray-400">{mockPlayer.tag}</p>
              <p className="text-sm text-primary-400">Town Hall {mockPlayer.townHallLevel}</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-400">{mockPlayer.expLevel}</p>
              <p className="text-sm text-gray-400">Experience Level</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-clan-400">{mockPlayer.trophies}</p>
              <p className="text-sm text-gray-400">Current Trophies</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-war-400">{mockPlayer.warStars}</p>
              <p className="text-sm text-gray-400">War Stars</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{mockPlayer.clan.role}</p>
              <p className="text-sm text-gray-400">Clan Role</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Current Trophies"
          value={mockPlayer.trophies.toLocaleString()}
          icon={Trophy}
          color="primary"
        />
        <StatCard
          title="Best Trophies"
          value={mockPlayer.bestTrophies.toLocaleString()}
          icon={Award}
          color="warning"
        />
        <StatCard
          title="Attack Wins"
          value={mockPlayer.attackWins.toLocaleString()}
          icon={Target}
          color="success"
        />
        <StatCard
          title="Defense Wins"
          value={mockPlayer.defenseWins.toLocaleString()}
          icon={Shield}
          color="clan"
        />
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Award className="h-6 w-6 text-primary-400 mr-2" />
            Key Achievements
          </h3>
          <div className="space-y-4">
            {[
              { name: "Gold Grab", progress: 2500000, target: 2500000, stars: 3 },
              { name: "Elixir Escapade", progress: 2100000, target: 2500000, stars: 2 },
              { name: "Heroic Heist", progress: 1800000, target: 2000000, stars: 2 },
              { name: "League All-Star", progress: 1000, target: 1000, stars: 3 },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">{achievement.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < achievement.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary-400 font-medium">
                    {achievement.progress.toLocaleString()}
                  </p>
                  <p className="text-gray-400 text-sm">
                    / {achievement.target.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Troops & Spells */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Zap className="h-6 w-6 text-war-400 mr-2" />
            Army Composition
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-3">Heroes</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Barbarian King", level: 75, maxLevel: 95 },
                  { name: "Archer Queen", level: 80, maxLevel: 95 },
                ].map((hero, index) => (
                  <div key={index} className="p-3 bg-dark-700/50 rounded-lg">
                    <p className="text-white font-medium">{hero.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary-400">Level {hero.level}</span>
                      <span className="text-gray-400 text-sm">Max {hero.maxLevel}</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2 mt-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${(hero.level / hero.maxLevel) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-3">Top Troops</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Dragon", level: 9 },
                  { name: "P.E.K.K.A", level: 8 },
                  { name: "Wizard", level: 10 },
                  { name: "Balloon", level: 8 },
                  { name: "Hog Rider", level: 11 },
                  { name: "Valkyrie", level: 7 },
                ].map((troop, index) => (
                  <div key={index} className="text-center p-3 bg-dark-700/50 rounded-lg">
                    <p className="text-white text-sm font-medium">{troop.name}</p>
                    <p className="text-primary-400 text-sm">Lvl {troop.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Clan Information */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Shield className="h-6 w-6 text-clan-400 mr-2" />
          Clan Information
        </h3>
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-clan-500/20 rounded-lg flex items-center justify-center">
            <Shield className="h-8 w-8 text-clan-400" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">{mockPlayer.clan.name}</h4>
            <p className="text-gray-400">{mockPlayer.clan.tag}</p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-clan-500/10 text-clan-400 mt-2">
              {mockPlayer.clan.role}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlayerStats;