import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import Table from "./Table";

function Desktop() {
  const texturesDesktopImg = new THREE.TextureLoader().load(
    "./image/desktop/vscodeimage.png"
  );

  return (
    <>
      <group position={[-8, 0, -2]}>
        {/* desktop */}
        <mesh position-y={0.7} receiveShadow castShadow>
          <mesh rotation-z={0.1} position-y={0.2} receiveShadow castShadow>
            <boxGeometry args={[0.2, 2, 3.4]} />
            <meshStandardMaterial
              color={"#e9cfcf"}
              roughness={0.2}
              metalness={0.8}
            />
            <mesh
              rotation-y={Math.PI / 2}
              position-x={0.105}
              receiveShadow
              castShadow
            >
              <planeGeometry args={[3.2, 1.8]} />
              <meshBasicMaterial map={texturesDesktopImg} color={"#f3d5bc"} />
            </mesh>
          </mesh>

          <mesh position-x={-0.3} position-y={-0.5} receiveShadow castShadow>
            <boxGeometry args={[0.2, 2, 0.5]} />
            <meshStandardMaterial
              color={"#e9cfcf"}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          <mesh position-x={-0.2} position-y={-0} receiveShadow castShadow>
            <boxGeometry args={[0.3, 0.5, 0.3]} />
            <meshStandardMaterial
              color={"#e9cfcf"}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          <mesh receiveShadow castShadow position-x={-0.3} position-y={-1.5}>
            <boxGeometry args={[0.6, 0.1, 2]} />
            <meshStandardMaterial
              color={"#e9cfcf"}
              roughness={0.2}
              metalness={0.8}
              side={THREE.DoubleSide}
            />
          </mesh>
        </mesh>

        <Table pos={[0, -1, 0]} rot={[0, 0, 0]} />
      </group>
    </>
  );
}

export default Desktop;
