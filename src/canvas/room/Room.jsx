import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Room() {
  const texturesWall = useTexture({
    map: "./image/wall/Wood_Wall_003_basecolor.jpg",
    roughnessMap: "./image/wall/Wood_Wall_003_roughness.jpg",
    normalMap: "./image/wall/Wood_Wall_003_normal.jpg",
    displacementMap: "./image/wall/Wood_Wall_003_height.png",
    aoMap: "./image/wall/Wood_Wall_003_ambientOcclusion.jpg",
  });
  const texturesFloor = useTexture({
    map: "./image/floor/Wood_Herringbone_Tiles_001_basecolor.jpg",
    roughnessMap: "./image/floor/Wood_Herringbone_Tiles_001_roughness.jpg",
    normalMap: "./image/floor/Wood_Herringbone_Tiles_001_normal.jpg",
    displacementMap: "./image/floor/Wood_Herringbone_Tiles_001_height.png",
    aoMap: "./image/floor/Wood_Herringbone_Tiles_001_ambientOcclusion.jpg",
  });

  return (
    <>
      <group position-y={-5}>
        <mesh position-x={-11.5} position-y={6.5} receiveShadow>
          <boxGeometry args={[1, 12, 24]} />
          <meshStandardMaterial
            map={texturesWall.map}
            side={THREE.DoubleSide}
            roughnessMap={texturesWall.roughnessMap}
            roughnessMap-colorSpace={THREE.NoColorSpace}
            normalMap={texturesWall.normalMap}
            normalMap-colorSpace={THREE.NoColorSpace}
            normalScale={1}
            displacementMap={texturesWall.displacementMap}
            displacementMap-colorSpace={THREE.NoColorSpace}
            displacementScale={0}
            displacementBias={-0}
            aoMap={texturesWall.aoMap}
          />
        </mesh>

        <mesh position-z={-11.5} position-y={6.5} receiveShadow>
          <boxGeometry args={[24, 12, 1]} />
          <meshStandardMaterial
            map={texturesWall.map}
            side={THREE.DoubleSide}
            roughnessMap={texturesWall.roughnessMap}
            roughnessMap-colorSpace={THREE.NoColorSpace}
            normalMap={texturesWall.normalMap}
            normalMap-colorSpace={THREE.NoColorSpace}
            normalScale={1}
            displacementMap={texturesWall.displacementMap}
            displacementMap-colorSpace={THREE.NoColorSpace}
            displacementScale={0}
            displacementBias={-0}
            aoMap={texturesWall.aoMap}
          />
        </mesh>

        <mesh receiveShadow>
          <boxGeometry args={[24, 1, 24]} />
          <meshStandardMaterial
            map={texturesFloor.map}
            side={THREE.DoubleSide}
            roughnessMap={texturesFloor.roughnessMap}
            roughnessMap-colorSpace={THREE.NoColorSpace}
            normalMap={texturesFloor.normalMap}
            normalMap-colorSpace={THREE.NoColorSpace}
            normalScale={1}
            displacementMap={texturesFloor.displacementMap}
            displacementMap-colorSpace={THREE.NoColorSpace}
            displacementScale={0}
            displacementBias={-0}
            aoMap={texturesFloor.aoMap}
          />
        </mesh>

        <mesh position-y={13} position-x={-6} position-z={-6}>
          <boxGeometry args={[12, 1, 12]} />
          <meshStandardMaterial color={"#464646"} />
        </mesh>
        <mesh position-y={13} position-x={-9} position-z={3}>
          <boxGeometry args={[6, 1, 6]} />
          <meshStandardMaterial color={"#464646"} />
        </mesh>
        <mesh position-y={13} position-x={3} position-z={-9}>
          <boxGeometry args={[6, 1, 6]} />
          <meshStandardMaterial color={"#464646"} />
        </mesh>
      </group>
    </>
  );
}

export default Room;