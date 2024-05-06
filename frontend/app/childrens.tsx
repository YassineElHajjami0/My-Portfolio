"use client";
import React from "react";
import Nav from "./nav/Nav";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useGenerationStore } from "./context";

const Childrens = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, setDarkMode } = useGenerationStore();

  return (
    <div
      className={`customContainer w-screen overflow-hidden relative  h-full flex flex-col justify-between items-center `}
    >
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
      <footer
        className="z-[4]
      "
      >
        <div
          className={`text-center iconsHolder p-2 px-4
             flex gap-3 text-2xl text-white ${
               darkMode
                 ? "bg-[#a4c0c96d] hover:bg-[#9dabae39]"
                 : "bg-[#b1b2a87e] hover:bg-[#aeae9d3a]"
             }  border-[0.5px] border-white border-solid rounded-lg mb-4
              duration-300`}
        >
          <Link href="https://twitter.com/yassine_el01">
            <FaXTwitter
              className={`icon  ${
                darkMode
                  ? "hover:text-[#73858c] transition duration-100"
                  : "hover:text-[#d1d1c7] transition duration-100"
              }`}
            />
          </Link>
          <Link href="https://github.com/YassineElHajjami0">
            <AiFillGithub
              className={` icon ${
                darkMode
                  ? "hover:text-[#73858c] transition duration-100"
                  : "hover:text-[#d1d1c7] transition duration-100"
              }`}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/yassine-el-hajjami-281446295/">
            <FaLinkedinIn
              className={`icon ${
                darkMode
                  ? "hover:text-[#73858c] transition duration-100"
                  : "hover:text-[#d1d1c7] transition duration-100"
              }`}
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Childrens;
