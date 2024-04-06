import React, { useRef } from "react";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";

RectAreaLightUniformsLib.init();

function Lights() {
  const light = useRef();
  useHelper(light, RectAreaLightHelper);

  return (
    <>
      <ambientLight intensity={0.2} />

      <rectAreaLight
        ref={light}
        color="#ffffff"
        intensity={5}
        width={2}
        height={5}
        position={[0, 6.5, 0]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      />
    </>
  );
}

export default Lights;
