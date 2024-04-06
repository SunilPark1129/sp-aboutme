import React, { useRef } from "react";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";

RectAreaLightUniformsLib.init();

function Lights() {
  const light1 = useRef();
  useHelper(light1, RectAreaLightHelper);

  const light2 = useRef();
  useHelper(light2, RectAreaLightHelper);

  return (
    <>
      <ambientLight intensity={0.2} />

      <rectAreaLight
        ref={light1}
        color="#ffffff"
        intensity={5}
        width={2}
        height={8}
        position={[-8, 7.45, 0]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      />

      <rectAreaLight
        ref={light2}
        color="#ffffff"
        intensity={5}
        width={8}
        height={2}
        position={[0, 7.45, -8]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      />
    </>
  );
}

export default Lights;
