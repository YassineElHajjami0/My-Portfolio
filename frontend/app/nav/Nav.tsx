"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { div, overlay } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import { before } from "node:test";
import "./nav.css";
import { FaBowlingBall } from "react-icons/fa";
const Nav = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: any;
}) => {
  return (
    <div
      className={`w-full p-5 text-white text-lg font-medium ${
        darkMode && "dark"
      } `}
    >
      <nav className="flex justify-between items-center w-full font-medium text-[#ffffff] text-shadow">
        <ul className="flex   items-center">
          <li>
            <div
              className="cursor-pointer w-[50px] h-[27px] rounded-3xl border-2 border-white p-[3px]"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <FaBowlingBall
                className={`ball ${
                  darkMode ? "animate-toRight" : "animate-toLeft"
                }`}
              />
            </div>
          </li>
          <li className="relative w-[100%] gap-5">
            <Link href="/projects" className="link Projects"></Link>
          </li>
        </ul>
        <Link
          href={"/"}
          className="flex-grow flex justify-center transition-all duration-300"
        >
          <Image
            className="transition-all duration-300"
            src={darkMode ? `/images/darkLogo.png` : `/images/Logo.png`}
            alt="LOGO"
            width={50}
            height={50}
          />
        </Link>
        <ul className="flex  items-center gap-5">
          <li>
            <Link href={"/blogs"} className="link Blogs"></Link>
          </li>
          <li>
            <Link href={"/contact"} className="link Contact"></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
