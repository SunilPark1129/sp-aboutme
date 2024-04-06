import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Desktop() {
  const texturesWood = useTexture({
    map: "./image/model_wood/Wood_025_basecolor.jpg",
    roughnessMap: "./image/model_wood/Wood_025_roughness.jpg",
    normalMap: "./image/model_wood/Wood_025_normal.jpg",
    displacementMap: "./image/model_wood/Wood_025_height.png",
    aoMap: "./image/model_wood/Wood_025_ambientOcclusion.jpg",
  });

  const texturesDesktopImg = new THREE.TextureLoader().load(
    "./image/desktop/vscodeimage.png"
  );

  return (
    <>
      <group position={[-8, 0, -4]}>
        {/* desktop */}
        <mesh position-y={0.7} receiveShadow castShadow>
          <mesh rotation-z={0.1} position-y={0.2} receiveShadow castShadow>
            <boxGeometry args={[0.2, 2, 3.4]} />
            <meshStandardMaterial
              color={"#535353"}
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
              color={"#535353"}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          <mesh position-x={-0.2} position-y={-0} receiveShadow castShadow>
            <boxGeometry args={[0.3, 0.5, 0.3]} />
            <meshStandardMaterial
              color={"#535353"}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          <mesh receiveShadow castShadow position-x={-0.3} position-y={-1.5}>
            <boxGeometry args={[0.6, 0.1, 2]} />
            <meshStandardMaterial
              color={"#535353"}
              roughness={0.2}
              metalness={0.8}
              side={THREE.DoubleSide}
            />
          </mesh>
        </mesh>

        {/* table */}
        <mesh position-y={-1} receiveShadow castShadow>
          <boxGeometry args={[4, 0.3, 6]} />
          <meshStandardMaterial
            color={"#6d6e6d"}
            map={texturesWood.map}
            side={THREE.DoubleSide}
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
      </group>
    </>
  );
}

export default Desktop;
