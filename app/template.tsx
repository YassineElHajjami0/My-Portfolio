"use client";
import React, { useEffect, useState } from "react";
import { animatePageIn } from "./animations";
import { useGenerationStore } from "./context";
import "./globals.css";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);
  const { darkMode } = useGenerationStore();

  return (
    <div className="">
      <div
        id="transition-element"
        className={` w-screen h-screen ${
          darkMode ? "bg-[#0d0d0d]" : "bg-[#acab91]"
        }  z-10 fixed top-0 left-0`}
      ></div>
      {children}
    </div>
  );
};

export default Template;
