import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Table({ pos, rot }) {
  const texturesWood = useTexture({
    map: "./image/wood/Wood_Crate_001_basecolor.jpg",
    roughnessMap: "./image/wood/Wood_Crate_001_roughness.jpg",
    normalMap: "./image/wood/Wood_Crate_001_normal.jpg",
    displacementMap: "./image/wood/Wood_Crate_001_height.png",
    aoMap: "./image/wood/Wood_Crate_001_ambientOcclusion.jpg",
  });

  return (
    <>
      {/* table */}
      <mesh position={pos} rotation={rot} receiveShadow castShadow>
        <boxGeometry args={[4, 0.3, 6]} />
        <meshStandardMaterial
          color={"#747474"}
          map={texturesWood.map}
          roughnessMap={texturesWood.roughnessMap}
          roughnessMap-colorSpace={THREE.NoColorSpace}
          normalMap={texturesWood.normalMap}
          normalMap-colorSpace={THREE.NoColorSpace}
          normalScale={5}
          displacementMap={texturesWood.displacementMap}
          displacementMap-colorSpace={THREE.NoColorSpace}
          displacementScale={0}
          displacementBias={0}
          aoMap={texturesWood.aoMap}
        />
        <mesh
          position-y={-2}
          position-x={-1.5}
          position-z={2.5}
          receiveShadow
          castShadow
        >
          <cylinderGeometry args={[0.1, 0.1, 4]} />
          <meshStandardMaterial
            color={"#1f1f1f"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
        <mesh
          position-y={-2}
          position-x={-1.5}
          position-z={-2.5}
          receiveShadow
          castShadow
        >
          <cylinderGeometry args={[0.1, 0.1, 4]} />
          <meshStandardMaterial
            color={"#1f1f1f"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
        <mesh
          position-y={-2}
          position-x={1.5}
          position-z={2.5}
          receiveShadow
          castShadow
        >
          <cylinderGeometry args={[0.1, 0.1, 4]} />
          <meshStandardMaterial
            color={"#1f1f1f"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
        <mesh
          position-y={-2}
          position-x={1.5}
          position-z={-2.5}
          receiveShadow
          castShadow
        >
          <cylinderGeometry args={[0.1, 0.1, 4]} />
          <meshStandardMaterial
            color={"#1f1f1f"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
      </mesh>
    </>
  );
}

export default Table;
