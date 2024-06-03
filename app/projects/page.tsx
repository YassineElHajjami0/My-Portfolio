"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  getDocs,
  collection,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";
import "./projects.css";
import Card from "./card";
import { time } from "node:console";

interface projectInterface {
  done: boolean;
  name: string;
  description: string;
  image: string;
  tools: string[];
  code: string;
  thereIsDemo: boolean;
  demo: string;
  time: Timestamp;
}

const Projects = () => {
  const [projects, setProjects] = useState<projectInterface[]>([]);

  const fetchBlogs = async () => {
    const quer = query(collection(db, "Projects"), orderBy("time"));
    const querySnapshot = await getDocs(quer);
    const data: projectInterface[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...(doc.data() as projectInterface) });
    });
    data.sort();
    setProjects(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="projectSection py-[20px] grid gap-5  w-[700px] ">
      {projects.map((project, index) => {
        return <Card project={project} key={index} index={index} />;
      })}
      <div className="mouseAnimation">
        <span></span>
      </div>
    </div>
  );
};

export default Projects;
