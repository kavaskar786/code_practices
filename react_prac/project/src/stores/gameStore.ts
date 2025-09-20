import { create } from 'zustand';
import type { Player, Clan, War, WarHistory, PerformanceMetrics } from '../types';

interface GameState {
  currentPlayer: Player | null;
  currentClan: Clan | null;
  currentWar: War | null;
  warHistory: WarHistory[];
  performanceMetrics: PerformanceMetrics | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setCurrentPlayer: (player: Player | null) => void;
  setCurrentClan: (clan: Clan | null) => void;
  setCurrentWar: (war: War | null) => void;
  setWarHistory: (history: WarHistory[]) => void;
  setPerformanceMetrics: (metrics: PerformanceMetrics | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearAll: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentPlayer: null,
  currentClan: null,
  currentWar: null,
  warHistory: [],
  performanceMetrics: null,
  isLoading: false,
  error: null,

  setCurrentPlayer: (player) => set({ currentPlayer: player }),
  setCurrentClan: (clan) => set({ currentClan: clan }),
  setCurrentWar: (war) => set({ currentWar: war }),
  setWarHistory: (history) => set({ warHistory: history }),
  setPerformanceMetrics: (metrics) => set({ performanceMetrics: metrics }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearAll: () =>
    set({
      currentPlayer: null,
      currentClan: null,
      currentWar: null,
      warHistory: [],
      performanceMetrics: null,
      error: null,
    }),
}));