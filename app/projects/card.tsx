"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useGenerationStore } from "../context";
import { Tilt } from "react-tilt";

interface projectInterface {
  done: boolean;
  name: string;
  description: string;
  image: string;
  tools: string[];
  code: string;
  thereIsDemo: boolean;
  demo: string;
}

const Card = ({
  project,
  index,
}: {
  project: projectInterface;
  index: number;
}) => {
  const { darkMode } = useGenerationStore();
  const [showdetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`cardContainer  ${
        index === 0 && "col-span-2"
      } cursor-pointer h-[270px] relative rounded-xl overflow-hidden`}
      onClick={() => setShowDetails(!showdetails)}
    >
      {/* <Image
        className="projectImage rounded-lg"
        src={project.image}
        width={400}
        height={200}
        alt={project.name.toUpperCase()}
      /> */}
      <div
        className={`darkLayout  z-0 absolute w-full h-full ba bg-gradient-to-tr ${
          darkMode
            ? "from-[#000000] to-transparent"
            : "from-[#191911fd] to-transparent"
        } ${showdetails && "blurLayout"}`}
      ></div>
      <div
        className={`infoContainer flex flex-col h-[100%] absolute bottom-0 p-2 rounded-br-xl rounded-bl-xl transition-all 
        duration-300  
        ${showdetails ? "showAllInfo" : "showProjectName"}`}
      >
        <h2 className="projectHeader flex items-center gap-2 text-white text-2xl mb-2 pb-2 ">
          {project.name}
          <span>
            <MdOutlineDoubleArrow
              className={`${showdetails ? "iconDown" : "iconUp"} `}
            />
          </span>
        </h2>
        <p className={` ${darkMode ? "text-[#e8e8e8df]" : "text-[#efefef] "}`}>
          {project.description}
        </p>
        <div className="tools flex gap-2 flex-wrap text-white py-1">
          {project.tools.map((tool) => (
            <span
              className={`p-1 rounded-md ${
                darkMode ? "bg-[#e2e6e75d]" : "bg-[#c2c2aac8]"
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
        <div className=" flex-grow  items-end flex  justify-center gap-3 text-white p-2">
          {project.thereIsDemo && (
            <Link
              href={project.demo}
              className={` transition-all duration-300 p-2 rounded-xl ${
                darkMode
                  ? "bg-[#e6e6e62f] hover:bg-[#e6e6e647]"
                  : "bg-[#949473] hover:bg-[#aeae88]"
              }  `}
            >
              Demo
            </Link>
          )}
          <Link
            href={project.code}
            className={` transition-all duration-300 p-2 rounded-xl ${
              darkMode
                ? "bg-[#e6e6e62f] hover:bg-[#e6e6e647]"
                : "bg-[#949473] hover:bg-[#aeae88]"
            }  `}
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
