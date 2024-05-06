"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { MeshProps, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { AxesHelper, TextureLoader } from "three";
import Setup from "./Setup";
import { useGenerationStore } from "./context";

const Avatar = () => {
  const { darkMode } = useGenerationStore();
  const ref: any = useRef();
  const zarbia = new TextureLoader().load("images/zarbia3.png");
  const width = window.innerWidth;
  let fov = 25;
  if (width <= 425) {
    fov = 35;
  }

  return (
    <Canvas
      ref={ref}
      // className="absolute"
      className={`bg-gradient-to-b h-4 ${
        darkMode
          ? "from-[#3B7D8B] to-[#102125]"
          : " from-lightOne to-darkerOne "
      }`}
      camera={{
        position: [1, 2.3, 9],
        fov: fov,
      }}
      style={{
        backgroundColor: "linear-gradient(to right, #C9CAC0 , #6A6A52)",
        zIndex: 2,
      }}
    >
      {/* <color attach="background" args={["rgba(0, 0, 0, 0)"]} /> */}
      {/* <OrbitControls /> */}
      {/* <axesHelper args={[5]} /> {/* Pass size of the axes */}
      {/* <gridHelper args={[10, 10]} />  */}
      <group position-y={-0.2} rotation-y={-0.1}>
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={1}
          resolution={256}
          color="#000000"
        />
        <Model />
        <Setup /> <directionalLight position={[10, 8, 20]} intensity={4} />
        <ambientLight intensity={1} />
        <mesh scale={[0.7, 0.85, 0.7]} rotation-y={0.9}>
          {/* <boxGeometry /> */}

          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          scale={[2, 3, 3]}
          rotation-x={-Math.PI / 2}
          rotation-z={-0.8}
          position-y={-0.001}
        >
          <planeGeometry />
          <meshBasicMaterial map={zarbia} transparent={true} />
        </mesh>
      </group>
    </Canvas>
  );
};

export default Avatar;
