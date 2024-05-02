import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Model />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Experience;
