import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import Table from "./Table";
import ClickableCircle from "./ClickableCircle";
function Animal(props) {
  const fish1 = useRef();
  const fish2 = useRef();
  const fish3 = useRef();

  const radius = 0.5;
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const theta = time * 1.2;
    const theta2 = time * 0.8;
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    const x2 = radius * Math.cos(theta + 1);
    const y2 = radius * Math.sin(theta + 1);
    const x3 = radius * Math.cos(theta + 1);
    const y3 = 0.8 * Math.sin(theta2 - 0.5);

    fish1.current.position.set(x, y, y);
    fish2.current.position.set(x2, x3, y2);
    fish3.current.position.set(x3, y3, y3);

    fish1.current.rotation.z = theta;
    fish2.current.rotation.z = theta;
    fish3.current.rotation.z = theta;
  });
  return (
    <>
      <group position-x={-1} position-z={-9}>
        <ClickableCircle isLeft={false} {...props} />
        <group position-y={0.25}>
          {/* glass */}
          <mesh receiveShadow castShadow>
            <boxGeometry args={[4.1, 2.1, 2.1]} />
            <meshPhysicalMaterial
              metalness={0}
              roughness={1}
              envMapIntensity={0.5}
              clearcoat={1}
              transparent={true}
              transmission={0.95}
              opacity={0.2}
              reflectivity={0.8}
              color={"#ffffff"}
            />
            {/* water */}
            <mesh>
              <boxGeometry args={[4, 2, 2]} />
              <MeshTransmissionMaterial
                transmissionSampler={true}
                backside={true}
                samples={10}
                resolution={2048}
                transmission={0.9}
                roughness={0}
                opacity={0.2}
                thickness={0.2}
                ior={1.3}
                chromaticAberration={0.1}
                distortion={0.8}
                distortionScale={0.5}
                temporalDistortion={0.8}
                clearcoat={1}
                attenuationDistance={1}
                attenuationColor={"#ffffff"}
                color={"#b2d4e2"}
                background={"#000"}
              />
            </mesh>
          </mesh>
          {/* sand */}
          <mesh position-y={-0.9} position-z={0.05}>
            <boxGeometry args={[3.8, 0.1, 1.8]} />
            <meshStandardMaterial color={"#ebe9a4"} />
          </mesh>
          {/* edge */}
          <mesh position-x={-2.05} position-z={1.05} position-y={0}>
            <boxGeometry args={[0.1, 2, 0.1]} />
            <meshStandardMaterial metalness={0.5} color={"#444444"} />
          </mesh>
          <mesh position-x={2.05} position-z={1.05} position-y={0}>
            <boxGeometry args={[0.1, 2, 0.1]} />
            <meshStandardMaterial metalness={0.5} color={"#444444"} />
          </mesh>
          <mesh position-x={2.05} position-z={-1.05} position-y={0}>
            <boxGeometry args={[0.1, 2, 0.1]} />
            <meshStandardMaterial metalness={0.5} color={"#444444"} />
          </mesh>
          <mesh position-x={-2.05} position-z={-1.05} position-y={0}>
            <boxGeometry args={[0.1, 2, 0.1]} />
            <meshStandardMaterial metalness={0.5} color={"#444444"} />
          </mesh>
          {/* floor */}
          <mesh position-y={-1.05}>
            <boxGeometry args={[4.2, 0.1, 2.2]} />
            <meshStandardMaterial metalness={0.5} color={"#444444"} />
          </mesh>
          {/* top */}
          <mesh position-y={1.05} position-x={-0.85}>
            <boxGeometry args={[2.5, 0.1, 2.2]} />
            <meshStandardMaterial
              metalness={0.5}
              color={"#444444"}
              transparent
              opacity={0.5}
            />
          </mesh>
          {/* fishes */}
          <mesh
            ref={fish1}
            rotation-x={THREE.MathUtils.degToRad(90)}
            rotation-z={THREE.MathUtils.degToRad(90)}
          >
            <coneGeometry args={[0.1, 0.3, 3]} />
            <meshStandardMaterial color={"#7eb5c5"} />
          </mesh>
          <mesh
            ref={fish2}
            position-x={0.5}
            position-y={0.5}
            position-z={0.5}
            rotation-x={THREE.MathUtils.degToRad(65)}
            rotation-z={THREE.MathUtils.degToRad(40)}
          >
            <coneGeometry args={[0.1, 0.3, 5]} />
            <meshStandardMaterial color={"#7fec7f"} />
          </mesh>
          <mesh
            ref={fish3}
            rotation-x={THREE.MathUtils.degToRad(90)}
            rotation-z={THREE.MathUtils.degToRad(90)}
          >
            <coneGeometry args={[0.1, 0.3, 4]} />
            <meshStandardMaterial color={"#e98383"} />
          </mesh>
        </group>
        <Table pos={[0, -1, 0]} rot={[0, THREE.MathUtils.degToRad(90), 0]} />
      </group>
    </>
  );
}

export default Animal;
