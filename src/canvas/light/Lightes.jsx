import React, { useRef } from "react";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

RectAreaLightUniformsLib.init();

function Lights() {
  const light1 = useRef();
  useHelper(light1, RectAreaLightHelper);

  const light2 = useRef();
  useHelper(light2, RectAreaLightHelper);

  const light3 = useRef();
  // useHelper(light3, THREE.PointLightHelper);

  const light4 = useRef();
  // useHelper(light4, THREE.PointLightHelper);

  // const { scene } = useThree();

  // const width = 10;
  // const height = 10;
  // const intensity = 1;
  // const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
  // rectLight.position.set(5, 10, 5);
  // rectLight.lookAt(0, 0, 0);
  // scene.add(rectLight);

  return (
    <>
      <ambientLight intensity={0.4} />

      <rectAreaLight
        ref={light1}
        color="#ffffff"
        intensity={3}
        width={2}
        height={8}
        position={[-8, 7.45, 0]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      />

      <rectAreaLight
        ref={light2}
        color="#ffffff"
        intensity={3}
        width={8}
        height={2}
        position={[0, 7.45, -8]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      />

      <pointLight
        ref={light3}
        castShadow
        color="#ffffff"
        intensity={50}
        position={[-8, 8, 0]}
        distance={100}
      />

      <pointLight
        ref={light4}
        castShadow
        color="#ffffff"
        intensity={50}
        position={[0, 8, -8]}
        distance={100}
      />
    </>
  );
}

export default Lights;
