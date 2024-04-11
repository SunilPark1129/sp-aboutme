import React from "react";
import Desktop from "./Desktop";
import Art from "./Art";
import WorldMap from "./WorldMap";
import Animal from "./Animal";
import { useFrame } from "@react-three/fiber";

function Models({ groupRef, ...props }) {
  let yRot = 1;

  // init animation when mounted
  useFrame(() => {
    if (yRot > 0) {
      yRot -= 0.01;
      groupRef.current.rotation.y = -yRot;
    }
  });

  return (
    <>
      <Desktop topic={"Me"} {...props} />
      <Art topic={"Hobby"} {...props} />
      <WorldMap topic={"Country"} {...props} />
      <Animal topic={"Skill"} {...props} />
    </>
  );
}

export default Models;
