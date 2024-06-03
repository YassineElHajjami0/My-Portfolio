"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import { useGenerationStore } from "../context";
import "./blogs.css";
interface blogInterface {
  id: string;
  link: string;
  name: string;
  readTime: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<blogInterface[]>([]);
  const { darkMode, setDarkMode } = useGenerationStore();
  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    const data: blogInterface[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...(doc.data() as blogInterface) });
    });
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="blogSection py-[20px]  ">
      <div className="blogLineContainer">
        {blogs.map((blog, index) => {
          return (
            <div className="blogLine p-4  " key={index}>
              <Link target="_blank" href={blog.link} key={index}>
                <h2 className="text-white mb-1 blogName"> {blog.name}</h2>
                <p
                  className={`${
                    darkMode ? "text-[#d0d3d384] " : "text-[#e0ddcd]"
                  } `}
                >
                  {blog.readTime}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
