import React from "react";
import Desktop from "./Desktop";
import Art from "./Art";
import WorldMap from "./WorldMap";
import Animal from "./Animal";
import { useFrame } from "@react-three/fiber";

function Models({ groupRef, ...props }) {
  let yRot = 1;
  // let xPos = 30;

  // init animation when mounted
  useFrame(() => {
    // y Rotation animation
    if (yRot > 0) {
      yRot -= 0.01;
      groupRef.current.rotation.y = -yRot;
    }
    // x Position animation
    // if (xPos > 0) {
    //   xPos -= 0.3;
    //   groupRef.current.position.x = -xPos;
    // }
  });

  return (
    <>
      <Desktop topic={"Skill"} {...props} />
      <Art topic={"Hobby"} {...props} />
      <WorldMap topic={"Country"} {...props} />
      <Animal topic={"Me"} {...props} />
    </>
  );
}

export default Models;
