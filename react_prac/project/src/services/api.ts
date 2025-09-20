import axios from 'axios';
import type { User, Player, Clan, War, WarHistory, PerformanceMetrics } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('coc-auth-storage');
  if (token) {
    const { state } = JSON.parse(token);
    if (state.token) {
      config.headers.Authorization = `Bearer ${state.token}`;
    }
  }
  return config;
});

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('coc-auth-storage');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  login: (email: string, password: string) =>
    api.post<{ user: User; token: string }>('/auth/login', { email, password }),
  
  register: (userData: { email: string; password: string; username: string; playerTag?: string; clanTag?: string }) =>
    api.post<{ user: User; token: string }>('/auth/register', userData),
  
  getProfile: () =>
    api.get<User>('/auth/profile'),
};

export const playerApi = {
  getPlayer: (playerTag: string) =>
    api.get<Player>(`/players/${encodeURIComponent(playerTag)}`),
  
  searchPlayers: (name: string) =>
    api.get<Player[]>(`/players/search?name=${encodeURIComponent(name)}`),
};

export const clanApi = {
  getClan: (clanTag: string) =>
    api.get<Clan>(`/clans/${encodeURIComponent(clanTag)}`),
  
  searchClans: (name: string) =>
    api.get<Clan[]>(`/clans/search?name=${encodeURIComponent(name)}`),
  
  getCurrentWar: (clanTag: string) =>
    api.get<War>(`/clans/${encodeURIComponent(clanTag)}/currentwar`),
  
  getWarHistory: (clanTag: string) =>
    api.get<WarHistory[]>(`/clans/${encodeURIComponent(clanTag)}/warhistory`),
  
  getPerformanceMetrics: (clanTag: string) =>
    api.get<PerformanceMetrics>(`/clans/${encodeURIComponent(clanTag)}/performance`),
};

export const analyticsApi = {
  getWarAnalytics: (warId: string) =>
    api.get(`/analytics/wars/${warId}`),
  
  getPlayerAnalytics: (playerTag: string) =>
    api.get(`/analytics/players/${encodeURIComponent(playerTag)}`),
  
  getClanAnalytics: (clanTag: string) =>
    api.get(`/analytics/clans/${encodeURIComponent(clanTag)}`),
};

export default api;