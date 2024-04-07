import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";

function Camera({ orbitRef, getCamera }) {
  const { camera } = useThree();
  useEffect(() => {
    getCamera(camera, orbitRef);
  }, []);
  return (
    <>
      <OrbitControls ref={orbitRef} />

      <mesh></mesh>
    </>
  );
}

export default Camera;
