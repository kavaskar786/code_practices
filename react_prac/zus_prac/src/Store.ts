import { create } from "zustand";

interface counterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = create<counterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
