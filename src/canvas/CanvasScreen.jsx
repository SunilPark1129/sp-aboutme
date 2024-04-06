import React from "react";
import { Canvas } from "@react-three/fiber";
import Camera from "./camera/Camera";
import Room from "./room/Room";
import Lights from "./light/Lightes";

function CanvasScreen() {
  return (
    <Canvas shadows camera={{ position: [10, 5, 10] }}>
      <Camera />
      <Lights />
      <Room />
    </Canvas>
  );
}

export default CanvasScreen;
