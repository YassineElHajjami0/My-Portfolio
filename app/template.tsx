"use client";
import React, { useEffect, useState } from "react";
import { animatePageIn } from "./animations";
import { useGenerationStore } from "./context";
{
  /* <div
  className={`upRightCircle ${
    darkMode ? "bleuGradient" : "beigGradient"
  }`}
></div>
<div
  className={`centerLeftCircle ${
    darkMode ? "bleuGradient" : "beigGradient"
  }`}
></div> */
}
{
  /* <div className={`bottomCircle `}></div> */
}

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);
  const { darkMode } = useGenerationStore();
  const [positionCursor, setPositionCursor] = useState({ x: "", y: "" });
  const handleMouseMove = (e: MouseEvent) => {
    console.log(positionCursor);
    setPositionCursor({
      x: (e.clientX + 5).toString().concat("px"),
      y: (e.clientY - 5).toString().concat("px"),
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex-grow">
      <div
        className="followCursor z-10 "
        style={{
          left: positionCursor.x,
          top: positionCursor.y,
          backgroundColor: "white",
        }}
      ></div>
      <div
        id="transition-element"
        className={`w-screen h-screen ${
          darkMode ? "bg-[#0d0d0d]" : "bg-[#acab91]"
        }  z-10 fixed top-0 left-0`}
      ></div>
      {children}
    </div>
  );
};

export default Template;
