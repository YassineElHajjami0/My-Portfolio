"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "@next/font/google";
import React, { useState } from "react";
import Childrens from "./childrens";

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
        <Childrens children={children} />{" "}
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
