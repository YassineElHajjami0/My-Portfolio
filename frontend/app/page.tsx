"use client";
import Image from "next/image";
import Avatar from "./Avatar";
import { useGenerationStore } from "./context";

export default function Home() {
  const { darkMode } = useGenerationStore();

  return (
    <main className="flex grow items-end">
      <div
        style={{ zIndex: -1 }}
        className="absolute w-full h-[100%] top-0 left-0  bg-gray-500"
      >
        <Avatar />
      </div>
      <div className="text-center">
        <h1
          className="text-9xl font-extrabold text-shadow-lg"
          style={{
            fontFamily: "Beckan",
            backgroundImage: `${
              darkMode
                ? "url(/images/blueGlass1.png)"
                : "url('/images/glass.jpg')"
            }`,
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          YASSINE
        </h1>
        <h2
          className="text-5xl font-extrabold"
          style={{
            fontFamily: "Beckan",
            backgroundImage: `${
              darkMode
                ? "url(/images/blueGlass1.png)"
                : "url('/images/glass.jpg')"
            }`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          El&nbsp;&apos; HAJJAMI
        </h2>
        <p className="text-white text-2xl py-2 pb-16 tracking-wide">
          Passionate{" "}
          <span className="text-[#DDDDD5] font-semibold">FRONT-END</span>{" "}
          Developer Skilled in Turning <br /> Ideas{" "}
          <span className="text-[#E8E8E3]"> into</span> Reality
        </p>
      </div>
    </main>
  );
}
