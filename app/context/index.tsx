"use client";
import { create } from "zustand";

interface GenerationState {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  darkMode: true,
  setDarkMode: (darkMode: boolean) => {
    set({ darkMode });
  },
}));
