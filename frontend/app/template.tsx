"use client";
import React, { useEffect } from "react";
import { animatePageIn } from "./animations";
import { useGenerationStore } from "./context";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);
  const { darkMode } = useGenerationStore();

  return (
    <div className="flex-grow ">
      <div
        className={`upRightCircle ${
          darkMode ? "bleuGradient" : "beigGradient"
        }`}
      ></div>
      <div
        className={`centerLeftCircle ${
          darkMode ? "bleuGradient" : "beigGradient"
        }`}
      ></div>
      <div className={`bottomCircle `}></div>
      <div
        id="transition-element"
        className={`w-screen h-screen ${
          darkMode ? "bg-[#102125]" : "bg-[#8C8C73]"
        }  z-10 fixed top-0 left-0`}
      ></div>
      {children}
    </div>
  );
};

export default Template;
