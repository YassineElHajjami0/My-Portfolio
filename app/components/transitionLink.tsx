"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { animatePageOut } from "../animations";

const TransitionLink = ({ href, label }: { href: string; label: string }) => {
  const router = useRouter();

  const handleClick = () => {
    const currentPath = new URL(window.location.href).pathname;
    if (currentPath !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button
      className="cursor-none absolute  w-[100%] h-[100%] z-[2] left-0 text-left"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
