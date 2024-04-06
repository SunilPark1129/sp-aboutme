import { OrbitControls } from "@react-three/drei";
import React from "react";

function Camera() {
  return (
    <>
      <OrbitControls />
      <axesHelper scale={10} />

      <mesh></mesh>
    </>
  );
}

export default Camera;
