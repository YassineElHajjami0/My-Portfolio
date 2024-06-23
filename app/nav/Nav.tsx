"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { div, overlay } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import { before } from "node:test";
import "./nav.css";
import { FaBowlingBall } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
      className={`customNav w-full p-5 text-white text-lg font-medium z-[5] ${
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
          {/* <Image
            className="transition-all duration-300"
            src={darkMode ? `/images/darkLogo.png` : `/images/Logo.png`}
            alt="LOGO"
            width={50}
            height={50}
          /> */}
          <svg
            id={darkMode ? "darkLogo" : "lightLogo"}
            width="1188"
            height="1224"
            viewBox="0 0 1188 1224"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M211.575 411.444C176.322 386.559 186.518 232.582 211.575 136.671C214.168 115.934 268.604 87.4194 307.487 66.6818C346.086 46.0955 355.01 59.7693 354.146 69.274C350.69 77.9147 340.148 102.973 325.632 134.079C311.116 165.185 299.71 198.884 307.487 219.621C355.183 302.572 418.951 211.845 426.728 172.962C429.32 166.049 434.504 143.411 434.504 87.4194C434.504 31.428 458.698 14.8379 468.203 14.8379C469.067 14.838 482.201 13.2829 527.823 7.06159C573.446 0.840315 579.667 23.4788 577.075 35.5758L543.377 455.511C533.008 624.004 647.065 670.664 660.026 564.384C672.987 458.104 735.199 -18.8606 973.682 154.817C1164.47 293.758 1068.73 449.463 997.011 509.948C929.614 554.015 753.345 618.82 753.345 655.111C753.345 981.779 934.798 870.263 1025.53 655.111C1098.11 482.989 1181.06 564.384 1181.06 655.111C1178.46 724.236 1142.17 896.704 1017.75 1033.57C862.217 1204.66 750.753 1072.45 641.88 818.419C554.782 615.191 515.727 733.741 507.086 818.419C505.358 870.263 502.938 999.355 507.086 1100.97C511.233 1202.58 474.251 1221.07 455.242 1217.62C345.506 1202.06 105.295 1102.52 22.3451 828.788C-81.3428 486.618 341.185 665.48 367.107 675.848C393.029 686.217 437.097 351.824 398.214 401.075C359.331 450.327 255.643 442.55 211.575 411.444Z"
              stroke="white"
              strokeWidth="27"
            />
            <path
              d="M859.62 302.572C830.588 327.457 819.873 397.619 818.145 429.59C816.604 458.104 963.291 416.542 963.308 338.863C963.313 319.1 895.911 271.465 859.62 302.572Z"
              stroke="white"
              strokeWidth="27"
            />
            <path
              d="M250.152 809.538C143.059 755.991 190.656 856.639 227.841 913.657C384.02 1121.89 376.583 958.279 376.583 935.968C376.583 913.657 384.02 876.471 250.152 809.538Z"
              stroke="white"
              strokeWidth="27"
            />
          </svg>
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
          className={`customMenu relative flex-col justify-between h-full transition-all duration-500 ${
            darkMode ? "bg-[#000000ae]" : "bg-[#f5f5dc7e]"
          } ${
            showMenu
              ? "right-0 doAnimationIn "
              : "right-[-100%] doAnimationOut "
          }`}
        >
          <ul
            className={`w-[100%] menuLinksContainer mt-[150px] pl-[50px] text-xl transition-all duration-300 text-[#ececec]
             `}
          >
            <li
              className={`mb-3  ${
                showMenu && darkMode
                  ? "hover:text-[#ffffff]"
                  : "hover:text-[#9f9f8f]"
              } ${showMenu && "showLi"}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <TransitionLink href="/projects" label="Projects" />
            </li>
            <li
              className={`mb-3  ${
                showMenu && darkMode
                  ? "hover:text-[#ffffff]"
                  : "hover:text-[#9f9f8f]"
              } ${showMenu && "showLi"}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <TransitionLink href="/blogs" label="Blogs" />
            </li>
            <li
              className={`mb-3  ${
                showMenu && darkMode
                  ? "hover:text-[#ffffff]"
                  : "hover:text-[#9f9f8f]"
              } ${showMenu && "showLi"}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <TransitionLink href="/contact" label="Contact" />
            </li>
          </ul>

          <ul className="absolute flex-col  w-[100%] gap-3 bottom-[12%] ml-10 ">
            <li className="w-[fit-content] ">
              <Link
                className="cursor-pointer flex items-center gap-2"
                target="_blank"
                href={"https://medium.com/@yassineelhajjamidev"}
              >
                <FaMedium />
                Medium
              </Link>
            </li>
            <li className="w-[fit-content]  ">
              <Link
                className="cursor-pointer flex items-center gap-2"
                target="_blank"
                href={
                  "https://www.linkedin.com/in/yassine-el-hajjami-281446295/"
                }
              >
                <FaLinkedinIn />
                Linkedin
              </Link>
            </li>
            <li className="w-[fit-content] ">
              <Link
                className="cursor-pointer flex items-center gap-2"
                target="_blank"
                href={"https://github.com/YassineElHajjami0"}
              >
                <AiFillGithub />
                Github
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
