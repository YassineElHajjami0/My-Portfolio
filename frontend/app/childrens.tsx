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
    <div className="container h-full flex flex-col justify-between items-center">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
      <footer>
        <div
          className="text-center p-2 px-4
             flex gap-3 text-2xl text-white bg-[#b1b2a87e] border-[0.5px] border-white border-solid rounded-lg mb-4
             hover:bg-[#AEAE9D] duration-300"
        >
          <Link href="https://twitter.com/yassine_el01">
            <FaXTwitter className="text-shadow-lg hover:text-[#8C8C73] transition duration-300" />
          </Link>
          <Link href="https://github.com/YassineElHajjami0">
            <AiFillGithub className="text-shadow-lg hover:text-[#8C8C73] transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/yassine-el-hajjami-281446295/">
            <FaLinkedinIn className="text-shadow-lg hover:text-[#8C8C73] transition duration-300" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Childrens;
