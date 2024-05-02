"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./nav/Nav";
import { Poppins } from "@next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

interface ChildProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialValue = storedDarkMode ? JSON.parse(storedDarkMode) : false;
  const [darkMode, setDarkMode] = useState<boolean>(initialValue);

  return (
    <html lang="en">
      <head></head>
      <body className={`w-screen h-screen ${poppins.className}`}>
        <div className="container h-full flex flex-col justify-between items-center">
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement<ChildProps>(
                child as React.ReactElement<ChildProps>,
                { darkMode, setDarkMode }
              );
            }
            return child;
          })}
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
      </body>
    </html>
  );
}

/* 
{`
  @font-face {
    font-family: 'Beckan';
    src: url('/Beckan.otf') format('opentype');
    /* Add any additional font properties or styles here 
  }
`}
*/
