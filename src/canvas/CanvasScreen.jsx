import React, { memo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Camera from "./camera/Camera";
import Room from "./room/Room";
import Lights from "./light/Lightes";
import Models from "./models/Models";
import { resetPosition } from "../assets/cameraPositionData";

function CanvasScreen(props) {
  const orbitRef = useRef();
  return (
    <Canvas
      shadows
      camera={{
        position: [
          resetPosition.camera.x,
          resetPosition.camera.y,
          resetPosition.camera.z,
        ],
      }}
    >
      <Camera orbitRef={orbitRef} getCamera={props.getCamera} />
      <Lights />
      <Room />
      <Models {...props} orbitRef={orbitRef} />
    </Canvas>
  );
}

export default memo(CanvasScreen);
