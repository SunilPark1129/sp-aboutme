import React, { useRef } from "react";
import Desktop from "./Desktop";
import Art from "./Art";
import WorldMap from "./WorldMap";
import Animal from "./Animal";
import Room from "../room/Room";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap/gsap-core";

function Models({ groupRef, ...props }) {
  let yRot = 1;
  // let xPos = 30;

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
