import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("models/setup.glb");
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
        castShadow
        receiveShadow
        geometry={nodes.Spule.geometry}
        material={materials["Material.013"]}
        position={[2.589, 2.233, -2.299]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Material.039"]}
        position={[2.272, 2.72, -2.54]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.103, -0.099, -0.043]}
      />
      <group
        position={[2.44, 2.728, -2.52]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.354, -0.208, -0.14]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_1.geometry}
          material={materials["Material.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_2.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_3.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.014"]}
        position={[2.599, 2.231, -2.544]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.16, -0.359, -0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.013"]}
        position={[2.586, 2.66, -2.268]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.039"]}
        position={[2.272, 2.591, -2.54]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.103, -0.099, -0.043]}
      />
      <group
        position={[2.44, 2.598, -2.52]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.354, -0.208, -0.14]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_1.geometry}
          material={materials["Material.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_2.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_3.geometry}
          material={materials["Material.044"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Lot.001"]}
        position={[2.56, 2.213, -2.658]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Lot.001"]}
        position={[2.56, 2.213, -2.658]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials["Material.035"]}
        position={[2.468, 2.627, -2.061]}
        scale={-0.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials["Material.009"]}
        position={[2.356, 2.982, -2.343]}
        scale={[-0.279, -0.636, -0.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials["Material.008"]}
        position={[2.119, 2.995, -2.362]}
        scale={[-0.016, -0.501, -0.516]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.012"]}
        position={[2.355, 2.06, -2.373]}
        rotation={[0, 0, Math.PI]}
        scale={[-0.172, -0.596, -0.435]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials["Material.012"]}
        position={[2.354, 2.91, -2.373]}
        scale={[-0.172, -0.596, -0.435]}
      />
      <group position={[2.42, 2.506, -2.325]} scale={[-0.279, -0.636, -0.537]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_2.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mainboard.geometry}
        material={materials["Material.015"]}
        position={[2.608, 2.486, -2.567]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kühlkörper2.geometry}
        material={materials["Lot.001"]}
        position={[2.605, 2.66, -2.394]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.16}
      />
      <group
        position={[2.605, 2.761, -2.417]}
        rotation={[1.572, 0.001, -1.561]}
        scale={[0.017, 0.001, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={materials.Lot}
        />
      </group>
      <group
        position={[2.356, 2.081, -2.106]}
        rotation={[0, -1.571, 0]}
        scale={[-0.066, -0.079, -0.074]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["bash colour"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[2.356, 2.081, -2.654]}
        rotation={[0, -1.571, 0]}
        scale={[-0.066, -0.079, -0.074]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["bash colour"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[2.356, 2.081, -2.381]}
        rotation={[0, -1.571, 0]}
        scale={[-0.066, -0.079, -0.074]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["bash colour"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[2.352, 2.889, -2.106]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.066, -0.079, -0.074]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["bash colour"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[2.352, 2.889, -2.654]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.066, -0.079, -0.074]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["bash colour"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[2.352, 2.889, -2.381]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.066, -0.079, -0.074]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["bash colour"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[2.605, 2.572, -2.619]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.013}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089_2.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089_3.geometry}
          material={materials.Lot}
        />
      </group>
      <group
        position={[2.605, 2.661, -2.619]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.013}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group
        position={[2.605, 2.611, -2.619]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.013}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group
        position={[2.605, 2.764, -2.619]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.013}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube082.geometry}
        material={materials["bash colour"]}
        position={[2.356, 2.081, -2.106]}
        rotation={[0, -1.571, 0]}
        scale={[-0.066, -0.079, -0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube088.geometry}
        material={materials["bash colour"]}
        position={[2.356, 2.081, -2.654]}
        rotation={[0, -1.571, 0]}
        scale={[-0.066, -0.079, -0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105.geometry}
        material={materials["bash colour"]}
        position={[2.356, 2.081, -2.381]}
        rotation={[0, -1.571, 0]}
        scale={[-0.066, -0.079, -0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108.geometry}
        material={materials["bash colour"]}
        position={[2.352, 2.889, -2.106]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.066, -0.079, -0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111.geometry}
        material={materials["bash colour"]}
        position={[2.352, 2.889, -2.654]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.066, -0.079, -0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112.geometry}
        material={materials["bash colour"]}
        position={[2.352, 2.889, -2.381]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.066, -0.079, -0.074]}
      />
      <group
        position={[2.605, 2.713, -2.619]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.013}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_2.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_3.geometry}
          material={materials.Lot}
        />
      </group>
      <group
        position={[2.605, 2.816, -2.619]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.013}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080_2.geometry}
          material={materials["Material.024"]}
        />
      </group>
      <group
        position={[2.528, 2.353, -2.397]}
        rotation={[-Math.PI / 2, -1.571, 0]}
        scale={[-0.238, -0.289, -0.289]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "Corsair-Vengeance-RGB-PRO-Kit-de-M-morie-Enthousiaste-16Go-2x8G_1"
            ].geometry
          }
          material={
            materials[
              "Corsair-Vengeance-RGB-PRO-Kit-de-M-morie-Enthousiaste-16Go-2x8G"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "Corsair-Vengeance-RGB-PRO-Kit-de-M-morie-Enthousiaste-16Go-2x8G_2"
            ].geometry
          }
          material={materials["corsair vengeance rgb pro"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "Corsair-Vengeance-RGB-PRO-Kit-de-M-morie-Enthousiaste-16Go-2x8G_3"
            ].geometry
          }
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "Corsair-Vengeance-RGB-PRO-Kit-de-M-morie-Enthousiaste-16Go-2x8G_4"
            ].geometry
          }
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "Corsair-Vengeance-RGB-PRO-Kit-de-M-morie-Enthousiaste-16Go-2x8G_5"
            ].geometry
          }
          material={materials["Material.029"]}
        />
      </group>
      <group
        position={[2.609, 2.291, -1.805]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.012}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials["Material.008"]}
        position={[2.45, 2.141, -2.482]}
        rotation={[-1.549, -0.007, -0.3]}
        scale={[-0.024, -0.017, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle029.geometry}
        material={materials["Material.008"]}
        position={[2.462, 2.298, -2.513]}
        scale={[-0.024, -0.004, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={nodes.Circle027.material}
        position={[2.537, 2.335, -2.498]}
        rotation={[0, 0, Math.PI / 2]}
        scale={-0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle026.geometry}
        material={nodes.Circle026.material}
        position={[2.537, 2.335, -2.439]}
        rotation={[0, 0, Math.PI / 2]}
        scale={-0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle024.geometry}
        material={nodes.Circle024.material}
        position={[2.259, 2.584, -2.439]}
        rotation={[0, 0, -Math.PI]}
        scale={-0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials["Material.008"]}
        position={[2.259, 2.697, -2.513]}
        scale={[-0.024, -0.003, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={nodes.Circle021.material}
        position={[2.259, 2.712, -2.439]}
        rotation={[0, 0, -Math.PI]}
        scale={-0.024}
      />
      <group
        position={[2.527, 2.334, -2.544]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.1, -0.148, -0.1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle017_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle017_2.geometry}
          material={materials["Material.046"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={nodes.Circle017.material}
        position={[2.259, 2.593, -2.439]}
        rotation={[0, 0, -Math.PI]}
        scale={-0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={nodes.Circle015.material}
        position={[2.259, 2.724, -2.439]}
        rotation={[0, 0, -Math.PI]}
        scale={-0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={materials["Material.008"]}
        position={[2.267, 2.763, -2.519]}
        rotation={[0, -1.432, Math.PI / 2]}
        scale={[-0.024, -0.012, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials["Material.008"]}
        position={[2.32, 2.256, -2.026]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.023, -0.003, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={materials["Material.008"]}
        position={[2.274, 2.256, -1.953]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-0.024, 0, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials["Material.008"]}
        position={[2.274, 2.892, -1.913]}
        scale={[-0.024, -0.019, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle010.geometry}
        material={nodes.Circle010.material}
        position={[2.373, 2.67, -1.959]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={-0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={nodes.Circle009.material}
        position={[2.468, 2.313, -2.024]}
        scale={-0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials["Material.034"]}
        position={[2.468, 2.326, -2.061]}
        scale={[-0.077, -0.003, -0.077]}
      />
      <group
        position={[2.603, 2.678, -2.826]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.16}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials.Lot}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_2.geometry}
          material={materials["Material.027"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials["Material.008"]}
        position={[2.468, 2.627, -2.061]}
        scale={-0.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.Lot}
        position={[2.603, 2.367, -2.806]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials["Material.008"]}
        position={[2.436, 2.892, -1.913]}
        scale={[-0.024, -0.026, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[2.274, 2.058, -1.912]}
        rotation={[0, 0, Math.PI]}
        scale={[-0.032, -0.035, -0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[2.435, 2.912, -1.912]}
        scale={[-0.032, -0.035, -0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt007.geometry}
        material={nodes.Bolt007.material}
        position={[2.593, 2.411, -2.709]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={-0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt006.geometry}
        material={nodes.Bolt006.material}
        position={[2.593, 2.161, -2.716]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={-0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt005.geometry}
        material={nodes.Bolt005.material}
        position={[2.593, 2.144, -2.671]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={-0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt004.geometry}
        material={nodes.Bolt004.material}
        position={[2.593, 2.151, -2.479]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={-0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve009.geometry}
        material={materials["Material.047"]}
        position={[2.273, 2.049, -1.921]}
        rotation={[0, -0.368, Math.PI / 2]}
        scale={[-0.079, -0.081, -0.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve008.geometry}
        material={materials["Material.047"]}
        position={[2.459, 2.219, -2.505]}
        rotation={[-Math.PI, 0.391, Math.PI / 2]}
        scale={[-0.079, -0.081, -0.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve007.geometry}
        material={materials["Material.047"]}
        position={[2.541, 2.326, -2.513]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.079, -0.081, -0.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve005.geometry}
        material={materials["Material.047"]}
        position={[2.329, 2.683, -2.093]}
        rotation={[0, 0.175, Math.PI / 2]}
        scale={[-0.079, -0.081, -0.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve004.geometry}
        material={materials["Material.047"]}
        position={[2.273, 2.755, -2.494]}
        rotation={[-Math.PI / 2, 0, 1.744]}
        scale={[-0.079, -0.081, -0.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve003.geometry}
        material={materials["Material.047"]}
        position={[2.337, 2.752, -2.085]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[-0.079, -0.081, -0.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve002.geometry}
        material={materials["Material.047"]}
        position={[2.282, 2.256, -1.946]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.079, -0.081, -0.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials["Material.047"]}
        position={[2.274, 2.336, -1.92]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.079, -0.081, -0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials["Material.047"]}
        position={[2.459, 2.336, -2.026]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={-0.079}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text080.geometry}
        material={materials.text}
        position={[0.918, 2.05, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text079.geometry}
        material={materials.text}
        position={[0.228, 2.048, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text078.geometry}
        material={materials.text}
        position={[0.306, 2.048, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text077.geometry}
        material={materials.text}
        position={[0.381, 2.047, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text076.geometry}
        material={materials.text}
        position={[0.459, 2.049, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text075.geometry}
        material={materials.text}
        position={[0.539, 2.049, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text074.geometry}
        material={materials.text}
        position={[0.616, 2.048, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text073.geometry}
        material={materials.text}
        position={[0.691, 2.048, -1.989]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text072.geometry}
        material={materials.text}
        position={[0.749, 2.03, -1.944]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text071.geometry}
        material={materials.text}
        position={[1.07, 2.052, -1.942]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text070.geometry}
        material={materials.text}
        position={[0.185, 2.062, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text069.geometry}
        material={materials.text}
        position={[0.268, 2.063, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text068.geometry}
        material={materials.text}
        position={[0.345, 2.062, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text067.geometry}
        material={materials.text}
        position={[0.254, 2.063, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text066.geometry}
        material={materials.text}
        position={[0.496, 2.063, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text065.geometry}
        material={materials.text}
        position={[0.577, 2.062, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text064.geometry}
        material={materials.text}
        position={[0.655, 2.062, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text063.geometry}
        material={materials.text}
        position={[0.733, 2.064, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text062.geometry}
        material={materials.text}
        position={[0.812, 2.064, -2.066]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text061.geometry}
        material={materials.text}
        position={[0.87, 2.034, -2.024]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text060.geometry}
        material={materials.text}
        position={[0.946, 2.063, -2.182]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text059.geometry}
        material={materials.text}
        position={[1.32, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text058.geometry}
        material={materials.text}
        position={[1.022, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text057.geometry}
        material={materials.text}
        position={[0.94, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text056.geometry}
        material={materials.text}
        position={[0.868, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text055.geometry}
        material={materials.text}
        position={[0.789, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text054.geometry}
        material={materials.text}
        position={[0.548, 2.062, -1.978]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text053.geometry}
        material={materials.text}
        position={[0.635, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text052.geometry}
        material={materials.text}
        position={[0.559, 2.078, -2.142]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text051.geometry}
        material={materials.text}
        position={[0.482, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text050.geometry}
        material={materials.text}
        position={[0.405, 2.078, -2.142]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text049.geometry}
        material={materials.text}
        position={[0.327, 2.078, -2.141]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text048.geometry}
        material={materials.text}
        position={[0.253, 2.078, -2.137]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text047.geometry}
        material={materials.text}
        position={[0.176, 2.077, -2.137]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text046.geometry}
        material={materials.text}
        position={[0.259, 2.035, -1.909]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text041.geometry}
        material={materials.text}
        position={[0.839, 2.035, -1.909]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text040.geometry}
        material={materials.text}
        position={[0.94, 2.033, -1.91]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text039.geometry}
        material={materials.text}
        position={[1.13, 2.034, -1.91]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text038.geometry}
        material={materials.text}
        position={[1.065, 2.048, -1.986]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text037.geometry}
        material={materials.text}
        position={[1.085, 2.063, -2.065]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text034.geometry}
        material={materials.text}
        position={[1.247, 2.078, -2.14]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text032.geometry}
        material={materials.text}
        position={[1.317, 2.095, -2.216]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text031.geometry}
        material={materials.text}
        position={[1.251, 2.092, -2.217]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text029.geometry}
        material={materials.text}
        position={[1.238, 2.114, -2.316]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text028.geometry}
        material={materials.text}
        position={[0.985, 2.094, -2.211]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text027.geometry}
        material={materials.text}
        position={[1.137, 2.052, -2.171]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text026.geometry}
        material={materials.text}
        position={[0.828, 2.093, -2.211]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text025.geometry}
        material={materials.text}
        position={[0.751, 2.092, -2.212]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text024.geometry}
        material={materials.text}
        position={[0.679, 2.093, -2.211]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text023.geometry}
        material={materials.text}
        position={[1.318, 2.114, -2.316]}
        rotation={[0.141, 0, 0]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text022.geometry}
        material={materials.text}
        position={[1.149, 2.117, -2.328]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text021.geometry}
        material={materials.text}
        position={[1.066, 2.117, -2.328]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text020.geometry}
        material={materials.text}
        position={[0.99, 2.116, -2.324]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text019.geometry}
        material={materials.text}
        position={[0.913, 2.116, -2.326]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text018.geometry}
        material={materials.text}
        position={[0.798, 2.116, -2.324]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text017.geometry}
        material={materials.text}
        position={[0.711, 2.117, -2.327]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text016.geometry}
        material={materials.text}
        position={[0.642, 2.116, -2.322]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text015.geometry}
        material={materials.text}
        position={[0.564, 2.115, -2.322]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text014.geometry}
        material={materials.text}
        position={[0.441, 2.117, -2.326]}
        rotation={[0.141, 0, 0.07]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text013.geometry}
        material={materials.text}
        position={[0.371, 2.116, -2.324]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text012.geometry}
        material={materials.text}
        position={[0.291, 2.116, -2.328]}
        rotation={[0.141, 0, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text011.geometry}
        material={materials.text}
        position={[0.607, 2.052, -2.284]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text007.geometry}
        material={materials.text}
        position={[0.135, 2.093, -2.212]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006.geometry}
        material={materials.text}
        position={[0.209, 2.092, -2.212]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials.text}
        position={[0.284, 2.093, -2.212]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials.text}
        position={[0.362, 2.101, -2.21]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials.text}
        position={[0.438, 2.101, -2.21]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.text}
        position={[0.517, 2.092, -2.212]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials.text}
        position={[0.595, 2.093, -2.212]}
        rotation={[0.141, 0, 0]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials.text}
        position={[0.531, 2.092, -2.217]}
        rotation={[0.141, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials.text}
        position={[0.159, 2.037, -1.91]}
        rotation={[0.141, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.text}
        position={[1.317, 2.09, -2.19]}
        rotation={[-3.001, 1.543, -Math.PI]}
        scale={0.186}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.text}
        position={[1.002, 2.042, -1.939]}
        rotation={[-Math.PI, 1.543, -Math.PI]}
        scale={0.186}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.text}
        position={[0.936, 2.059, -1.989]}
        rotation={[0.141, -1.543, 0]}
        scale={0.186}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.text}
        position={[0.371, 2.033, -1.742]}
        scale={[0.03, 0.017, 0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.text}
        position={[1.037, 2.035, -1.908]}
        rotation={[0.141, 0, 0]}
        scale={[0.012, 0.017, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.text}
        position={[1.246, 2.054, -1.912]}
        rotation={[0.141, Math.PI / 2, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube176.geometry}
        material={materials["Material.001"]}
        position={[0.558, 2.02, -1.902]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube175.geometry}
        material={materials["Material.001"]}
        position={[1.132, 2.02, -1.902]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube174.geometry}
        material={materials["Material.001"]}
        position={[1.034, 2.02, -1.902]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube173.geometry}
        material={materials["Material.001"]}
        position={[0.935, 2.02, -1.902]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube172.geometry}
        material={materials["Material.001"]}
        position={[0.837, 2.02, -1.902]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube171.geometry}
        material={materials["Material.001"]}
        position={[0.265, 2.02, -1.902]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube170.geometry}
        material={materials["Material.001"]}
        position={[0.159, 2.02, -1.902]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube169.geometry}
        material={materials["Material.001"]}
        position={[0.925, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube168.geometry}
        material={materials["Material.001"]}
        position={[0.847, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube167.geometry}
        material={materials["Material.001"]}
        position={[0.77, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube166.geometry}
        material={materials["Material.001"]}
        position={[0.692, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube165.geometry}
        material={materials["Material.001"]}
        position={[0.614, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube164.geometry}
        material={materials["Material.001"]}
        position={[0.536, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube163.geometry}
        material={materials["Material.001"]}
        position={[0.459, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube162.geometry}
        material={materials["Material.001"]}
        position={[0.381, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube161.geometry}
        material={materials["Material.001"]}
        position={[0.304, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube160.geometry}
        material={materials["Material.001"]}
        position={[0.226, 2.036, -1.979]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube157.geometry}
        material={materials["Material.001"]}
        position={[0.965, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube156.geometry}
        material={materials["Material.001"]}
        position={[0.887, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube155.geometry}
        material={materials["Material.001"]}
        position={[0.809, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube154.geometry}
        material={materials["Material.001"]}
        position={[0.732, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube153.geometry}
        material={materials["Material.001"]}
        position={[0.654, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube152.geometry}
        material={materials["Material.001"]}
        position={[0.576, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube151.geometry}
        material={materials["Material.001"]}
        position={[0.498, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube150.geometry}
        material={materials["Material.001"]}
        position={[0.421, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube149.geometry}
        material={materials["Material.001"]}
        position={[0.344, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube148.geometry}
        material={materials["Material.001"]}
        position={[0.266, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube147.geometry}
        material={materials["Material.001"]}
        position={[0.188, 2.05, -2.054]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube145.geometry}
        material={materials["Material.001"]}
        position={[1.022, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube144.geometry}
        material={materials["Material.001"]}
        position={[0.945, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube143.geometry}
        material={materials["Material.001"]}
        position={[0.867, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube142.geometry}
        material={materials["Material.001"]}
        position={[0.789, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={materials["Material.001"]}
        position={[0.712, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube140.geometry}
        material={materials["Material.001"]}
        position={[0.634, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube139.geometry}
        material={materials["Material.001"]}
        position={[0.556, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube138.geometry}
        material={materials["Material.001"]}
        position={[0.478, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube137.geometry}
        material={materials["Material.001"]}
        position={[0.401, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube136.geometry}
        material={materials["Material.001"]}
        position={[0.323, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube135.geometry}
        material={materials["Material.001"]}
        position={[0.246, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube134.geometry}
        material={materials["Material.001"]}
        position={[0.168, 2.064, -2.127]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube132.geometry}
        material={materials["Material.001"]}
        position={[1.069, 2.035, -1.977]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube131.geometry}
        material={materials["Material.001"]}
        position={[1.09, 2.05, -2.053]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube130.geometry}
        material={materials["Material.001"]}
        position={[1.12, 2.065, -2.129]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube129.geometry}
        material={materials["Material.001"]}
        position={[1.103, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube128.geometry}
        material={materials["Material.001"]}
        position={[0.983, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube127.geometry}
        material={materials["Material.001"]}
        position={[0.906, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube126.geometry}
        material={materials["Material.001"]}
        position={[0.828, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={materials["Material.001"]}
        position={[0.75, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube124.geometry}
        material={materials["Material.001"]}
        position={[0.673, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube123.geometry}
        material={materials["Material.001"]}
        position={[0.595, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube122.geometry}
        material={materials["Material.001"]}
        position={[0.517, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube121.geometry}
        material={materials["Material.001"]}
        position={[0.439, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube120.geometry}
        material={materials["Material.001"]}
        position={[0.362, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube119.geometry}
        material={materials["Material.001"]}
        position={[0.285, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube118.geometry}
        material={materials["Material.001"]}
        position={[0.207, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube117.geometry}
        material={materials["Material.001"]}
        position={[0.129, 2.079, -2.203]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113.geometry}
        material={materials["Material.001"]}
        position={[1.247, 2.02, -1.901]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110.geometry}
        material={materials["Material.001"]}
        position={[1.325, 2.065, -2.128]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109.geometry}
        material={materials["Material.001"]}
        position={[1.247, 2.065, -2.128]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={materials["Material.001"]}
        position={[1.325, 2.079, -2.204]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={materials["Material.001"]}
        position={[1.247, 2.079, -2.204]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube104.geometry}
        material={materials["Material.001"]}
        position={[1.325, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube103.geometry}
        material={materials["Material.001"]}
        position={[1.247, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube102.geometry}
        material={materials["Material.001"]}
        position={[1.141, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101.geometry}
        material={materials["Material.001"]}
        position={[1.064, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube100.geometry}
        material={materials["Material.001"]}
        position={[0.986, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube099.geometry}
        material={materials["Material.001"]}
        position={[0.908, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube098.geometry}
        material={materials["Material.001"]}
        position={[0.791, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097.geometry}
        material={materials["Material.001"]}
        position={[0.713, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096.geometry}
        material={materials["Material.001"]}
        position={[0.635, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube095.geometry}
        material={materials["Material.001"]}
        position={[0.558, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube094.geometry}
        material={materials["Material.001"]}
        position={[0.442, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093.geometry}
        material={materials["Material.001"]}
        position={[0.365, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube092.geometry}
        material={materials["Material.001"]}
        position={[0.287, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube091.geometry}
        material={materials["Material.001"]}
        position={[0.209, 2.1, -2.308]}
        rotation={[0.193, 0, 0]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube090.geometry}
        material={materials["gloss black"]}
        position={[0.498, 2.006, -1.896]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube089.geometry}
        material={materials.cyan}
        position={[1.132, 2.006, -1.896]}
        rotation={[0.195, 0, 0]}
        scale={[0.513, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube087.geometry}
        material={materials.cyan}
        position={[1.037, 2.006, -1.896]}
        rotation={[0.195, 0, 0]}
        scale={[0.513, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube086.geometry}
        material={materials.cyan}
        position={[0.937, 2.006, -1.896]}
        rotation={[0.195, 0, 0]}
        scale={[0.513, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube085.geometry}
        material={materials.cyan}
        position={[0.84, 2.006, -1.896]}
        rotation={[0.195, 0, 0]}
        scale={[0.513, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube084.geometry}
        material={materials.cyan}
        position={[0.259, 2.006, -1.896]}
        rotation={[0.195, 0, 0]}
        scale={[0.513, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube083.geometry}
        material={materials.cyan}
        position={[0.159, 2.006, -1.896]}
        rotation={[0.195, 0, 0]}
        scale={[0.513, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube081.geometry}
        material={materials["gloss black"]}
        position={[0.926, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube080.geometry}
        material={materials["gloss black"]}
        position={[0.849, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube079.geometry}
        material={materials["gloss black"]}
        position={[0.771, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube078.geometry}
        material={materials["gloss black"]}
        position={[0.694, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube077.geometry}
        material={materials["gloss black"]}
        position={[0.616, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube076.geometry}
        material={materials["gloss black"]}
        position={[0.538, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube075.geometry}
        material={materials["gloss black"]}
        position={[0.46, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube074.geometry}
        material={materials["gloss black"]}
        position={[0.383, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube073.geometry}
        material={materials["gloss black"]}
        position={[0.305, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube072.geometry}
        material={materials["gloss black"]}
        position={[0.228, 2.044, -1.975]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube071.geometry}
        material={materials.cyan}
        position={[0.1, 2.019, -1.973]}
        rotation={[0.195, 0, 0]}
        scale={[0.937, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube070.geometry}
        material={materials.cyan}
        position={[1.073, 2.019, -1.971]}
        rotation={[0.195, 0, 0]}
        scale={[1.141, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube069.geometry}
        material={materials.cyan}
        position={[1.093, 2.034, -2.049]}
        rotation={[0.196, 0, 0]}
        scale={[0.931, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube068.geometry}
        material={materials["gloss black"]}
        position={[0.965, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube067.geometry}
        material={materials["gloss black"]}
        position={[0.888, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube066.geometry}
        material={materials["gloss black"]}
        position={[0.81, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube065.geometry}
        material={materials["gloss black"]}
        position={[0.732, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064.geometry}
        material={materials["gloss black"]}
        position={[0.655, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube063.geometry}
        material={materials["gloss black"]}
        position={[0.577, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={materials["gloss black"]}
        position={[0.499, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials["gloss black"]}
        position={[0.422, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube060.geometry}
        material={materials["gloss black"]}
        position={[0.344, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={materials["gloss black"]}
        position={[0.266, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={materials["gloss black"]}
        position={[0.189, 2.058, -2.051]}
        rotation={[0.196, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials.cyan}
        position={[0.082, 2.034, -2.049]}
        rotation={[0.195, 0, 0]}
        scale={[0.729, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube055.geometry}
        material={materials.cyan}
        position={[1.121, 2.049, -2.125]}
        rotation={[0.204, 0, 0]}
        scale={[0.624, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={materials["gloss black"]}
        position={[1.025, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={materials["gloss black"]}
        position={[0.945, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={materials["gloss black"]}
        position={[0.868, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={materials["gloss black"]}
        position={[0.79, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={materials["gloss black"]}
        position={[0.712, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials["gloss black"]}
        position={[0.635, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials["gloss black"]}
        position={[0.557, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials["gloss black"]}
        position={[0.479, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials["gloss black"]}
        position={[0.402, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials["gloss black"]}
        position={[0.324, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials["gloss black"]}
        position={[0.246, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials["gloss black"]}
        position={[0.169, 2.073, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials.cyan}
        position={[1.102, 2.064, -2.199]}
        rotation={[0.192, 0, 0]}
        scale={[0.822, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials["gloss black"]}
        position={[0.984, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials["gloss black"]}
        position={[0.907, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials["gloss black"]}
        position={[0.829, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials["gloss black"]}
        position={[0.751, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials["gloss black"]}
        position={[0.674, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials["gloss black"]}
        position={[0.596, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["gloss black"]}
        position={[0.518, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials["gloss black"]}
        position={[0.441, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials["gloss black"]}
        position={[0.363, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials["gloss black"]}
        position={[0.285, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["gloss black"]}
        position={[0.208, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials["gloss black"]}
        position={[0.13, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials["gloss black"]}
        position={[1.248, 2.029, -1.898]}
        rotation={[0.195, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials["gloss black"]}
        position={[1.325, 2.074, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["gloss black"]}
        position={[1.248, 2.074, -2.127]}
        rotation={[0.204, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["gloss black"]}
        position={[1.325, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["gloss black"]}
        position={[1.248, 2.088, -2.202]}
        rotation={[0.192, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["gloss black"]}
        position={[1.325, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["gloss black"]}
        position={[1.248, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["gloss black"]}
        position={[1.142, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["gloss black"]}
        position={[1.064, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["gloss black"]}
        position={[0.986, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["gloss black"]}
        position={[0.909, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["gloss black"]}
        position={[0.792, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["gloss black"]}
        position={[0.714, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["gloss black"]}
        position={[0.636, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["gloss black"]}
        position={[0.559, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["gloss black"]}
        position={[0.443, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["gloss black"]}
        position={[0.365, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials["gloss black"]}
        position={[0.288, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials["gloss black"]}
        position={[0.21, 2.11, -2.307]}
        rotation={[0.185, 0, 0]}
        scale={[0.4, 0.367, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials.black}
        position={[0.69, 2.042, -2.106]}
        rotation={[0.215, 0, 0]}
        scale={[0.33, 0.092, 0.355]}
      />
      <group position={[0.847, 1.928, -2.755]} scale={2.279}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Acrilico001.geometry}
          material={materials.Acrilico}
          position={[-0.059, 0.319, -0.06]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Acrilico002.geometry}
          material={materials.Acrilico_led}
          position={[-0.059, 0.319, -0.06]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Acrilico003.geometry}
          material={materials.Acrilico}
          position={[-0.059, 0.319, -0.06]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[-0.059, 0.309, 0.013]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.Black_piano}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corpo_fechamento.geometry}
          material={materials.Black_piano}
          position={[-0.059, 0.309, 0.013]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Suporte_base.geometry}
          material={materials.Black_piano}
          position={[-0.059, 0.234, -0.14]}
          rotation={[0.089, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Suporte_corpo.geometry}
          material={materials.Black_piano}
          position={[-0.059, 0.32, -0.099]}
          rotation={[0.108, -0.002, 0]}
        />
        <group position={[-0.059, 0.309, 0.013]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.Tela_desl}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.Tela_borda}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials.Material}
        position={[1.598, 1.966, -2.225]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={[0.05, 0.052, 0.052]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116.geometry}
        material={materials["Material.020"]}
        position={[1.531, 2.005, -2.26]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={0.02}
      />
      <group
        position={[1.597, 1.977, -2.26]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={0.053}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials["mouse body"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials["put normal here"]}
        />
      </group>
      <group position={[-0.376, 2.147, -2.65]} scale={0.191}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Material.028"]}
        />
      </group>
      <group
        position={[0.788, 0.413, -0.836]}
        rotation={[Math.PI, -0.868, Math.PI]}
        scale={0.554}
      >
        <group
          position={[0.08, 2.471, 0.905]}
          rotation={[0, 0.998, Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle008_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle008_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[1.064, 2.471, 0.037]}
          rotation={[Math.PI, 1.119, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[0.487, 2.471, -1.148]}
          rotation={[Math.PI, 0.453, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle013_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle013_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[-0.781, 2.471, -0.963]}
          rotation={[-Math.PI, -0.75, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle014_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle014_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[-1.049, 2.471, 0.283]}
          rotation={[0, -1.172, Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle018_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle018_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.032"]}
          position={[0.51, 3.859, -0.727]}
          rotation={[0.061, -0.821, 0.044]}
          scale={0.312}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube178.geometry}
          material={materials.Plastic}
          position={[0.599, 1.502, 0.544]}
          rotation={[0, -0.551, 0]}
          scale={0.04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube179.geometry}
          material={materials.Plastic}
          position={[-0.168, 2.214, -0.072]}
          rotation={[0, -0.822, 0]}
          scale={0.166}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube180.geometry}
          material={materials.Metallic}
          position={[-0.168, 0.549, -0.072]}
          rotation={[0, -0.822, 0]}
          scale={0.57}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube181.geometry}
          material={materials.Plastic}
          position={[-0.168, 1.22, -0.072]}
          rotation={[0, -0.822, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube182.geometry}
          material={materials["Material.033"]}
          position={[0.213, 2.089, -0.426]}
          rotation={[-0.295, -0.8, -0.214]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube183.geometry}
          material={materials.Plastic}
          position={[-0.168, 2.214, -0.072]}
          rotation={[0, -0.822, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube184.geometry}
          material={materials.Plastic}
          position={[0.913, 3.713, -0.653]}
          rotation={[-0.039, -0.822, -0.029]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Plastic}
          position={[-0.051, 0.738, -0.181]}
          rotation={[0, -0.822, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Plastic}
          position={[-0.321, 1.105, 0.07]}
          rotation={[-0.471, -0.764, -0.339]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.Belt}
          position={[0.304, 2.214, 0.435]}
          rotation={[Math.PI / 2, 0, 0.822]}
          scale={0.996}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials.Belt}
          position={[-0.168, 2.214, -0.072]}
          rotation={[Math.PI / 2, 0, 0.822]}
          scale={0.996}
        />
        <group
          position={[-0.168, 2.214, -0.072]}
          rotation={[Math.PI / 2, 0, 0.822]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029.geometry}
            material={materials.Leather}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_1.geometry}
            material={materials["Leather.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_2.geometry}
            material={materials["Leather.002"]}
          />
        </group>
        <group
          position={[-0.168, 2.214, -0.072]}
          rotation={[0, -0.822, 0]}
          scale={[1, 1, 0.845]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.Leather}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.Plastic}
            position={[-0.329, 1.272, -1.252]}
            rotation={[-0.196, 0.026, -0.02]}
            scale={0.977}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube146.geometry}
            material={materials.Plastic}
            position={[-0.329, 1.272, -1.252]}
            rotation={[-0.196, 0.026, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube158.geometry}
            material={materials.Plastic}
            position={[0.363, 1.275, -1.25]}
            rotation={[-0.196, 0.026, -0.02]}
            scale={0.977}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube159.geometry}
            material={materials.Plastic}
            position={[0.363, 1.275, -1.25]}
            rotation={[-0.196, 0.026, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube177.geometry}
            material={materials["Metallic.001"]}
            position={[0.003, 1.595, -1.295]}
            rotation={[0, 0.023, 0]}
            scale={0.009}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube185.geometry}
            material={materials.Plastic}
            position={[0.016, 0.581, 0.432]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube186.geometry}
            material={materials.Plastic}
            position={[0, 0.038, 0.432]}
            scale={0.058}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube187.geometry}
            material={materials.Plastic}
            position={[0, 0.051, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle002.geometry}
            material={materials.Plastic}
            position={[0, 0.205, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025.geometry}
            material={materials.Belt}
            position={[0.009, 1.646, -1.177]}
            rotation={[Math.PI / 2, 0, 0.051]}
            scale={0.03}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026.geometry}
            material={materials.Belt}
            position={[0.304, 1.528, 0.025]}
            rotation={[Math.PI / 2, 0, 0.051]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pen_low001.geometry}
        material={materials["Material.031"]}
        position={[-0.726, 1.985, -1.98]}
        rotation={[0, 0.225, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.C_low001.geometry}
        material={materials["Material.019"]}
        position={[-0.425, 1.962, -1.824]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube188.geometry}
        material={materials["Material.040"]}
        position={[-0.427, 1.986, -1.828]}
        scale={[-0.221, -0.015, -0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
        position={[1.081, 1.916, -2.223]}
        rotation={[Math.PI, 0, 0.003]}
        scale={[-1.977, -0.038, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.004"]}
        position={[-0.566, 1.183, -2.242]}
        scale={[0.053, 0.732, 0.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.006"]}
        position={[2.736, 1.214, -2.242]}
        scale={[0.053, 0.788, 0.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.003"]}
        position={[2.701, 1.26, -2.242]}
        scale={[0.053, 0.684, 0.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.005"]}
        position={[6.004, 1.214, -2.242]}
        scale={[0.053, 0.788, 0.102]}
      />
    </group>
  );
}

useGLTF.preload("models/setup.glb");
