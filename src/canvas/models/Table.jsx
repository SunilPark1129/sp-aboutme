import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Table({ pos, rot }) {
  const texturesWood = useTexture({
    map: "./image/model_wood/Wood_025_basecolor.jpg",
    roughnessMap: "./image/model_wood/Wood_025_roughness.jpg",
    normalMap: "./image/model_wood/Wood_025_normal.jpg",
    displacementMap: "./image/model_wood/Wood_025_height.png",
    aoMap: "./image/model_wood/Wood_025_ambientOcclusion.jpg",
  });
  return (
    <>
      {/* table */}
      <mesh position={pos} rotation={rot} receiveShadow castShadow>
        <boxGeometry args={[4, 0.3, 6]} />
        <meshStandardMaterial
          color={"#424242"}
          map={texturesWood.map}
          roughnessMap={texturesWood.roughnessMap}
          roughnessMap-colorSpace={THREE.NoColorSpace}
          normalMap={texturesWood.normalMap}
          normalMap-colorSpace={THREE.NoColorSpace}
          normalScale={1}
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
            color={"#575757"}
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
            color={"#575757"}
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
            color={"#575757"}
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
            color={"#575757"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
      </mesh>
    </>
  );
}

export default Table;
