import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = 3001;
const JWT_SECRET = 'your-super-secret-jwt-key-change-in-production';

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Mock database (in production, use MongoDB)
const users = [];
const players = [];
const clans = [];
const wars = [];

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, username, playerTag, clanTag } = req.body;

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      id: Date.now().toString(),
      email,
      username,
      password: hashedPassword,
      role: 'player',
      playerTag: playerTag || null,
      clanTag: clanTag || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    users.push(user);

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Remove password from response
    const { password: _, ...userResponse } = user;

    res.status(201).json({
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Remove password from response
    const { password: _, ...userResponse } = user;

    res.json({
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

app.get('/api/auth/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const { password: _, ...userResponse } = user;
  res.json(userResponse);
});

// Player Routes
app.get('/api/players/:playerTag', authenticateToken, async (req, res) => {
  try {
    const { playerTag } = req.params;
    
    // In a real app, this would call the Clash of Clans API
    // For demo purposes, return mock data
    const mockPlayer = {
      tag: playerTag,
      name: "Pro Player",
      townHallLevel: 15,
      expLevel: 180,
      trophies: 3247,
      bestTrophies: 3456,
      warStars: 142,
      attackWins: 1234,
      defenseWins: 567,
      clan: {
        tag: "#CLAN123",
        name: "Elite Warriors",
        role: "Elder"
      },
      league: {
        id: 29000022,
        name: "Champion League III",
        iconUrls: {
          small: "https://api-assets.clashofclans.com/leagues/72/JmmTbspV86xBigM7OP5_SjsEDPuE7oXjZC9aOy8xO3s.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/JmmTbspV86xBigM7OP5_SjsEDPuE7oXjZC9aOy8xO3s.png",
          medium: "https://api-assets.clashofclans.com/leagues/288/JmmTbspV86xBigM7OP5_SjsEDPuE7oXjZC9aOy8xO3s.png"
        }
      },
      achievements: [],
      troops: [],
      heroes: [],
      spells: []
    };

    res.json(mockPlayer);
  } catch (error) {
    console.error('Player fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch player data' });
  }
});

// Clan Routes
app.get('/api/clans/:clanTag', authenticateToken, async (req, res) => {
  try {
    const { clanTag } = req.params;
    
    // Mock clan data
    const mockClan = {
      tag: clanTag,
      name: "Elite Warriors",
      type: "open",
      description: "Welcome to Elite Warriors! We are a competitive war clan.",
      location: {
        id: 32000000,
        name: "International",
        isCountry: false
      },
      badgeUrls: {
        small: "https://api-assets.clashofclans.com/badges/70/8YOaopgCiHJE7NTNUwmwdLOHRYU6g7k8bNOFj4VTOsU.png",
        large: "https://api-assets.clashofclans.com/badges/512/8YOaopgCiHJE7NTNUwmwdLOHRYU6g7k8bNOFj4VTOsU.png",
        medium: "https://api-assets.clashofclans.com/badges/200/8YOaopgCiHJE7NTNUwmwdLOHRYU6g7k8bNOFj4VTOsU.png"
      },
      clanLevel: 18,
      clanPoints: 45234,
      clanVersusPoints: 23456,
      requiredTrophies: 2800,
      warFrequency: "always",
      warWinStreak: 7,
      warWins: 234,
      warLosses: 45,
      isWarLogPublic: true,
      members: 48,
      memberList: []
    };

    res.json(mockClan);
  } catch (error) {
    console.error('Clan fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch clan data' });
  }
});

// War Routes
app.get('/api/clans/:clanTag/currentwar', authenticateToken, async (req, res) => {
  try {
    const { clanTag } = req.params;
    
    // Mock current war data
    const mockWar = {
      state: "inWar",
      teamSize: 30,
      startTime: "20241201T120000.000Z",
      endTime: "20241202T120000.000Z",
      clan: {
        tag: clanTag,
        name: "Elite Warriors",
        badgeUrls: {
          small: "https://api-assets.clashofclans.com/badges/70/8YOaopgCiHJE7NTNUwmwdLOHRYU6g7k8bNOFj4VTOsU.png",
          large: "https://api-assets.clashofclans.com/badges/512/8YOaopgCiHJE7NTNUwmwdLOHRYU6g7k8bNOFj4VTOsU.png",
          medium: "https://api-assets.clashofclans.com/badges/200/8YOaopgCiHJE7NTNUwmwdLOHRYU6g7k8bNOFj4VTOsU.png"
        },
        clanLevel: 18,
        attacks: 45,
        stars: 85,
        destructionPercentage: 78.5,
        members: []
      },
      opponent: {
        tag: "#OPPONENT",
        name: "Dragon Warriors",
        badgeUrls: {
          small: "https://api-assets.clashofclans.com/badges/70/another-badge.png",
          large: "https://api-assets.clashofclans.com/badges/512/another-badge.png",
          medium: "https://api-assets.clashofclans.com/badges/200/another-badge.png"
        },
        clanLevel: 17,
        attacks: 42,
        stars: 78,
        destructionPercentage: 72.3,
        members: []
      }
    };

    res.json(mockWar);
  } catch (error) {
    console.error('War fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch war data' });
  }
});

// Performance metrics
app.get('/api/clans/:clanTag/performance', authenticateToken, async (req, res) => {
  try {
    const mockMetrics = {
      totalWars: 279,
      warWins: 234,
      warLosses: 45,
      warTies: 0,
      winRate: 83.9,
      averageStars: 28.5,
      averageDestruction: 85.2,
      perfectWars: 23,
      recentPerformance: [
        { date: '2024-01-01', stars: 25, destruction: 85, attacks: 30 },
        { date: '2024-01-02', stars: 28, destruction: 88, attacks: 32 },
        { date: '2024-01-03', stars: 30, destruction: 92, attacks: 33 },
        { date: '2024-01-04', stars: 27, destruction: 86, attacks: 31 },
        { date: '2024-01-05', stars: 32, destruction: 94, attacks: 35 },
        { date: '2024-01-06', stars: 29, destruction: 89, attacks: 33 },
        { date: '2024-01-07', stars: 31, destruction: 91, attacks: 34 },
      ]
    };

    res.json(mockMetrics);
  } catch (error) {
    console.error('Performance metrics error:', error);
    res.status(500).json({ message: 'Failed to fetch performance metrics' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 CoC Analytics Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/health`);
});

export default app;