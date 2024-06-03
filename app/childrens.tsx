"use client";
import React, { useEffect, useState, Suspense } from "react";
import Nav from "./nav/Nav";
import Link from "next/link";
import { FaMedium } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useGenerationStore } from "./context";
import "./globals.css";
import { delay } from "framer-motion";

const Childrens = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, setDarkMode } = useGenerationStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }, []);


  return (
    <>
      {loading && (
        <div
          className={`LogoHolder ${darkMode ? "bg-[#000]" : "bg-[#8D8D6D]"}`}
        >
          <svg
            id="logo"
            width="1188"
            height="1224"
            viewBox="0 0 1188 1224"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M211.575 411.444C176.322 386.559 186.518 232.582 211.575 136.671C214.168 115.934 268.604 87.4194 307.487 66.6818C346.086 46.0955 355.01 59.7693 354.146 69.274C350.69 77.9147 340.148 102.973 325.632 134.079C311.116 165.185 299.71 198.884 307.487 219.621C355.183 302.572 418.951 211.845 426.728 172.962C429.32 166.049 434.504 143.411 434.504 87.4194C434.504 31.428 458.698 14.8379 468.203 14.8379C469.067 14.838 482.201 13.2829 527.823 7.06159C573.446 0.840315 579.667 23.4788 577.075 35.5758L543.377 455.511C533.008 624.004 647.065 670.664 660.026 564.384C672.987 458.104 735.199 -18.8606 973.682 154.817C1164.47 293.758 1068.73 449.463 997.011 509.948C929.614 554.015 753.345 618.82 753.345 655.111C753.345 981.779 934.798 870.263 1025.53 655.111C1098.11 482.989 1181.06 564.384 1181.06 655.111C1178.46 724.236 1142.17 896.704 1017.75 1033.57C862.217 1204.66 750.753 1072.45 641.88 818.419C554.782 615.191 515.727 733.741 507.086 818.419C505.358 870.263 502.938 999.355 507.086 1100.97C511.233 1202.58 474.251 1221.07 455.242 1217.62C345.506 1202.06 105.295 1102.52 22.3451 828.788C-81.3428 486.618 341.185 665.48 367.107 675.848C393.029 686.217 437.097 351.824 398.214 401.075C359.331 450.327 255.643 442.55 211.575 411.444Z"
              stroke="white"
              strokeWidth="12"
            />
            <path
              d="M859.62 302.572C830.588 327.457 819.873 397.619 818.145 429.59C816.604 458.104 963.291 416.542 963.308 338.863C963.313 319.1 895.911 271.465 859.62 302.572Z"
              stroke="white"
              strokeWidth="12"
            />
            <path
              d="M250.152 809.538C143.059 755.991 190.656 856.639 227.841 913.657C384.02 1121.89 376.583 958.279 376.583 935.968C376.583 913.657 384.02 876.471 250.152 809.538Z"
              stroke="white"
              strokeWidth="12"
            />
          </svg>
        </div>
      )}
      <div
        className={`customContainer w-screen overflow-hidden relative  h-full flex flex-col justify-between items-center `}
      >
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
        <footer className="customFooter z-[4]">
          <div
            className={`text-center iconsHolder 
            flex gap-1 text-2xl text-white
              bg-[#bec9cc6d] hover:bg-[#a0a3a439]"
               border-[0.5px] border-white border-solid rounded-lg mb-4
            duration-300`}
          >
            <Link
              href="https://medium.com/@yassineelhajjamidev"
              target="_blank"
            >
              <FaMedium
                className={`icon
                  hover:text-[#cacbcb] transition duration-100`}
              />
            </Link>
            <Link href="https://github.com/YassineElHajjami0" target="_blank">
              <AiFillGithub
                className={`icon
                 hover:text-[#cacbcb] transition duration-100`}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yassine-el-hajjami-281446295/"
              target="_blank"
            >
              <FaLinkedinIn
                className={`icon
                  hover:text-[#cacbcb] transition duration-100`}
              />
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Childrens;
