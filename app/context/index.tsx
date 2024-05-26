"use client";
import { create } from "zustand";

interface GenerationState {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const returnTheThem = () => {
  if (window) {
    if (!localStorage.getItem("yassineTheme")) {
      localStorage.setItem("yassineTheme", "dark");
      return true;
    }
    return localStorage.getItem("yassineTheme")?.toString() == "dark"
      ? true
      : false;
  }
  return true;
};

export const useGenerationStore = create<GenerationState>()((set) => ({
  darkMode: returnTheThem(),
  setDarkMode: (darkMode: boolean) => {
    set({ darkMode });

    localStorage.setItem(
      "yassineTheme",
      `${
        localStorage.getItem("yassineTheme")?.toString() == "dark"
          ? "light"
          : "dark"
      }`
    );
  },
}));
