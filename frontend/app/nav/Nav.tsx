"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { div, overlay } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import { before } from "node:test";
import "./nav.css";
import { FaBowlingBall } from "react-icons/fa";

import TransitionLink from "@/app/components/transitionLink";
const Nav = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: any;
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`w-full p-5 text-white text-lg font-medium z-[5] ${
        darkMode && "dark"
      } `}
    >
      <nav className="flex justify-between items-center w-full font-medium text-[#ffffff] text-shadow">
        <ul className="flex items-center ulOfSwitcher">
          <li className="switcherContainer">
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
          <li className="relative w-[128px] gap-5 link Projects">
            <TransitionLink href="/projects" label="" />
          </li>
        </ul>
        <Link
          href={"/"}
          className="flex-grow flex justify-center transition-all duration-300"
        >
          {/* <TransitionLink href="/" label="" /> */}
          <Image
            className="transition-all duration-300"
            src={darkMode ? `/images/darkLogo.png` : `/images/Logo.png`}
            alt="LOGO"
            width={50}
            height={50}
          />
        </Link>
        <ul className="flex  items-center gap-5 blogsContactContainer">
          <li className="w-[90px] link Blogs">
            <TransitionLink href="/blogs" label="" />
          </li>
          <li className="w-[100px] link Contact">
            <TransitionLink href="/contact" label="" />
          </li>
        </ul>
        <button
          className={`Burger hidden ${showMenu ? "h-[23px]" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span
            className={`w-[100%] transition-all  ${
              showMenu && !darkMode ? "bg-[#6A6A52]" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-[100%] transition-all duration-300 ${
              showMenu ? "w-[50%]  " : "bg-white"
            }   ${!darkMode && showMenu ? "bg-[#6A6A52]" : "bg-white"}`}
          ></span>
        </button>
        <div
          className={`customMenu transition-all duration-500 ${
            darkMode ? "bg-[#3d72835e]" : "bg-[#f5f5dc7e]"
          } ${
            showMenu
              ? "right-0 doAnimationIn "
              : "right-[-100%] doAnimationOut "
          }`}
        >
          <ul
            className={`w-[100%] menuLinksContainer mt-[150px] pl-[50px] text-xl transition-all duration-300 ${
              darkMode ? "text-white" : "text-[#6A6A52]"
            } `}
          >
            <li
              className={`mb-3  ${
                showMenu && darkMode
                  ? "hover:text-[#22464f]"
                  : "hover:text-[#9f9f8f]"
              } ${showMenu && "showLi"}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <TransitionLink href="/projects" label="Projects" />
            </li>
            <li
              className={`mb-3  ${
                showMenu && darkMode
                  ? "hover:text-[#22464f]"
                  : "hover:text-[#9f9f8f]"
              } ${showMenu && "showLi"}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <TransitionLink href="/blogs" label="Blogs" />
            </li>
            <li
              className={`mb-3  ${
                showMenu && darkMode
                  ? "hover:text-[#22464f]"
                  : "hover:text-[#9f9f8f]"
              } ${showMenu && "showLi"}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <TransitionLink href="/contact" label="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
