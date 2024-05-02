import { create } from "zustand";

interface GenerationState {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  darkMode: false,
  setDarkMode: (darkMode: boolean) => set({ darkMode }),
}));
