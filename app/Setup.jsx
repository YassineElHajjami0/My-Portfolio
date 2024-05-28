"use client";
import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { MeshBasicMaterial, TextureLoader } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("models/mysetup.glb");
  const textureScreen = new TextureLoader().load("images/glass.jpg");
  const zarbia = new TextureLoader().load("images/Screen3.png");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.5}
      position-y={-0.21}
      position-x={-0.1}
      position-z={0.7}
      rotation-y={0.8}
    >
      <mesh
        scale={[0.72, 1.3, 2]}
        rotation-x={-12.55}
        rotation-z={-1.58}
        position-y={2.65}
        position-x={0.71}
        position-z={-2.67}
      >
        <planeGeometry />
        <meshBasicMaterial map={zarbia} transparent={true} />
      </mesh>
      <group
        name="Sit001"
        position={[0.851, 1.689, -0.502]}
        rotation={[Math.PI, -0.037, Math.PI]}
        scale={1.944}
      >
        <mesh
          name="Cube002_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Body.001"]}
        />
        <mesh
          name="Cube002_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.Alimunium}
        />
        <mesh
          name="Cube002_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials.mkhdda}
        />
        <mesh
          name="Cube002_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials["reflective back"]}
        />
      </group>
      <group
        name="Keycap_Keycaps_0"
        position={[0.69, 2.052, -2.114]}
        rotation={[-1.377, 0, 0]}
        scale={0.019}
      >
        <mesh
          name="Keycap_Keycaps_0_1"
          castShadow
          receiveShadow
          geometry={nodes.Keycap_Keycaps_0_1.geometry}
          material={materials.Keycaps}
        />
        <mesh
          name="Keycap_Keycaps_0_2"
          castShadow
          receiveShadow
          geometry={nodes.Keycap_Keycaps_0_2.geometry}
          material={materials.Body}
        />
      </group>
      <group name="Circle004" position={[2.479, 2.515, -2.448]} scale={-0.073}>
        <mesh
          name="Circle010"
          castShadow
          receiveShadow
          geometry={nodes.Circle010.geometry}
          material={materials.Case}
        />
        <mesh
          name="Circle010_1"
          castShadow
          receiveShadow
          geometry={nodes.Circle010_1.geometry}
          material={materials.emission}
        />
        <mesh
          name="Circle010_2"
          castShadow
          receiveShadow
          geometry={nodes.Circle010_2.geometry}
          material={materials.Metallic}
        />
        <mesh
          name="Circle010_3"
          castShadow
          receiveShadow
          geometry={nodes.Circle010_3.geometry}
          material={materials.white}
        />
      </group>
      <mesh
        name="Acrilico002"
        castShadow
        receiveShadow
        geometry={nodes.Acrilico002.geometry}
        material={materials.Acrilico_led}
        position={[0.713, 2.655, -2.925]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.279}
      />
      <mesh
        name="Acrilico003"
        castShadow
        receiveShadow
        geometry={nodes.Acrilico003.geometry}
        material={materials.Acrilico}
        position={[0.713, 2.655, -2.921]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.279}
      />
      <mesh
        name="Corpo_fechamento"
        castShadow
        receiveShadow
        geometry={nodes.Corpo_fechamento.geometry}
        material={materials.Black_piano}
        position={[0.713, 2.655, -2.87]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.279}
      />
      <group
        name="Suporte_base"
        position={[0.713, 2.572, -2.852]}
        rotation={[0.089, 0, 0]}
        scale={2.279}
      >
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Screen}
        />
        <mesh
          name="Cylinder002_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.Body}
        />
      </group>
      <group
        name="Cube116"
        position={[1.592, 1.996, -2.272]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={0.02}
      >
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.gray}
        />
        <mesh
          name="Cube010_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials.black}
        />
      </group>
      <group name="Plants" position={[-0.365, 2.307, -2.685]} scale={0.191}>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.white}
        />
        <mesh
          name="Cylinder_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.028"]}
        />
      </group>
      <mesh
        name="Pen_low001"
        castShadow
        receiveShadow
        geometry={nodes.Pen_low001.geometry}
        material={materials.gray}
        position={[-0.725, 1.999, -1.95]}
        rotation={[0, 0.225, 0]}
      />
      <group name="C_low001" position={[-0.43, 1.987, -1.998]}>
        <mesh
          name="Circle020"
          castShadow
          receiveShadow
          geometry={nodes.Circle020.geometry}
          material={materials.gray}
        />
        <mesh
          name="Circle020_1"
          castShadow
          receiveShadow
          geometry={nodes.Circle020_1.geometry}
          material={materials.white}
        />
      </group>
      <group
        name="Cube002"
        position={[1.222, 1.244, -2.163]}
        rotation={[Math.PI, 0, 0.003]}
        scale={[-1.977, -0.038, -1]}
      >
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.desk}
        />
        <mesh
          name="Cube005_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.white}
        />
      </group>
      <group name="Circle001" position={[2.358, 2.076, -2.105]} scale={-0.073}>
        <mesh
          name="Circle001_1"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.Case}
        />
        <mesh
          name="Circle001_2"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.roughness}
        />
        <mesh
          name="Circle001_3"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.white}
        />
      </group>
      <group name="Circle002" position={[2.358, 2.076, -2.38]} scale={-0.073}>
        <mesh
          name="Circle001_1"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.Case}
        />
        <mesh
          name="Circle001_2"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.roughness}
        />
        <mesh
          name="Circle001_3"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.white}
        />
      </group>
      <group name="Circle003" position={[2.358, 2.076, -2.653]} scale={-0.073}>
        <mesh
          name="Circle001_1"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.Case}
        />
        <mesh
          name="Circle001_2"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.roughness}
        />
        <mesh
          name="Circle001_3"
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.white}
        />
      </group>
      <mesh
        name="Plane"
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[0.661, 1.96, -2.114]}
      />
      <mesh
        name="myscreen"
        castShadow
        receiveShadow
        geometry={nodes.myscreen.geometry}
        material={materials.Screen}
        position={[0.713, 2.572, -2.852]}
        rotation={[0.089, 0, 0]}
        scale={2.279}
      />
    </group>
  );
}

useGLTF.preload("models/mysetup.glb");
