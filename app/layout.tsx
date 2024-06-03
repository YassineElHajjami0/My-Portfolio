"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import React, { useState } from "react";
import Childrens from "./childrens";
import { motion, AnimatePresence } from "framer-motion";
import { useGenerationStore } from "./context";
import tree1 from "../public/images/tree1.jpg";
import tree2 from "../public/images/tree2.jpg";
import { AuroraBackground } from "./backgroundAnimation";

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
  const { darkMode, setDarkMode } = useGenerationStore();

  return (
    <html lang="en">
      <head></head>
      <body
        className={`w-screen h-screen overflow-hidden ${
          poppins.className
        } bg-gradient-to-b ${
          darkMode
            ? "from-[#3B7D8B] to-[#102125]"
            : " from-lightOne to-darkerOne "
        }`}
        // className={`w-screen h-screen overflow-hidden poppins.className ${
        //   darkMode ? "darkBackground" : "lightBackground"
        // }`}
      >
        <AuroraBackground children={<Childrens children={children} />} />
      </body>
    </html>
  );
}
