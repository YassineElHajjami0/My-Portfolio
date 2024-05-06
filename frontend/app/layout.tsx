"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "@next/font/google";
import React, { useState } from "react";
import Childrens from "./childrens";
import { motion, AnimatePresence } from "framer-motion";
import { useGenerationStore } from "./context";

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
  const key = typeof window !== "undefined" ? window.location.pathname : null;
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
      >
        <Childrens children={children} />
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
