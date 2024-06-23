"use client";
import Image from "next/image";
import Avatar from "./Avatar";
import { useGenerationStore } from "./context";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FlipAnimation } from "./flipAnimation";
import { useEffect, useState } from "react";
import { AuroraBackground } from "./backgroundAnimation";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  const { darkMode } = useGenerationStore();
  const [showName, setShowName] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowName(true);
    }, 1500);
  }, []);

  return (
    <main className="flex-grow items-end ">
      <div
        style={{ zIndex: -1 }}
        className={`absolute w-full min-h-[100%] top-0 left-0   bg-gray-500`}
      >
        <AuroraBackground children={<Avatar />} />
      </div>
      <div className="text-center  flex-grow absolute l-[50%] translate-x-[-50%] bottom-0">
        {showName && (
          <>
            <FlipAnimation
              words={["YASSINE"]}
              className={`showIt block text-center text-9xl  font-extrabold text-shadow-lg firstName ${
                jakarta.className
              }  text-transparent
        bg-clip-text bg-gradient-to-r from-[#f4f4d5] via-[#e0e1d5] to-[#f4f4d5] ${
          darkMode && "showShadow bg-white"
        }`}
            />
            <FlipAnimation
              words={["EL'HAJJAMI"]}
              className={`showIt text-5xl font-extrabold lastName ${
                jakarta.className
              }  text-transparent
        bg-clip-text bg-gradient-to-r from-[#f4f4d5] via-[#e0e1d5] to-[#f4f4d5] ${
          darkMode && "text-white bg-white"
        }`}
            />
          </>
        )}

        <p
          className={`showIt whatIcanDo text-2xl py-2 pb-28 tracking-wide ${
            darkMode ? "text-[#d6d7d7c9]" : "text-[#eaeaea]"
          }`}
        >
          Passionate
          <span
            className={`frontend ${
              darkMode ? "text-[#e4e5e5]" : "text-[#DDDDD5]"
            }  font-semibold px-2`}
          >
            FRONT-END
          </span>
          Developer Skilled in Turning <br /> Ideas
          <span className="text-[#E8E8E3]"> into</span> Reality
        </p>
      </div>
    </main>
  );
}
