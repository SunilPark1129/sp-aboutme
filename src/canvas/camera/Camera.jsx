import { OrbitControls } from "@react-three/drei";
import React from "react";

function Camera() {
  return (
    <>
      <OrbitControls />

      <mesh></mesh>
    </>
  );
}

export default Camera;
