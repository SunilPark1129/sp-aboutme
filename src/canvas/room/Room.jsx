import { MeshReflectorMaterial, Text, useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Room() {
  const texturesRoom = useTexture({
    map: "./image/room/Concrete_017_basecolor.jpg",
    roughnessMap: "./image/room/Concrete_017_roughness.jpg",
    normalMap: "./image/room/Concrete_017_normal.jpg",
    displacementMap: "./image/room/Concrete_017_height.png",
    aoMap: "./image/room/Concrete_017_ambientOcclusion.jpg",
  });
  return (
    <>
      <group position-y={-5}>
        {/* wall */}
        <mesh
          position-x={-10.9}
          position-y={6.5}
          rotation-y={(Math.PI * 90) / 180}
          receiveShadow
        >
          {/* <boxGeometry args={[1, 12, 24, 1, 255, 255]} /> */}
          <planeGeometry args={[24, 12]} />
          <meshStandardMaterial
            color={"#999999"}
            map={texturesRoom.map}
            roughnessMap={texturesRoom.roughnessMap}
            roughnessMap-colorSpace={THREE.NoColorSpace}
            normalMap={texturesRoom.normalMap}
            normalMap-colorSpace={THREE.NoColorSpace}
            normalScale={5}
            displacementMap={texturesRoom.displacementMap}
            displacementMap-colorSpace={THREE.NoColorSpace}
            displacementScale={0.2}
            displacementBias={-0.2}
            aoMap={texturesRoom.aoMap}
          />
        </mesh>
        <mesh position-x={-11.5} position-y={6.5}>
          <boxGeometry args={[1, 12, 24, 1, 255, 255]} />
          <meshStandardMaterial color={"#000"} />
        </mesh>

        {/* wall */}
        <mesh position-z={-10.9} position-y={6.5} receiveShadow>
          <planeGeometry args={[24, 12]} />
          <meshStandardMaterial
            color={"#999999"}
            map={texturesRoom.map}
            roughnessMap={texturesRoom.roughnessMap}
            roughnessMap-colorSpace={THREE.NoColorSpace}
            normalMap={texturesRoom.normalMap}
            normalMap-colorSpace={THREE.NoColorSpace}
            normalScale={5}
            displacementMap={texturesRoom.displacementMap}
            displacementMap-colorSpace={THREE.NoColorSpace}
            displacementScale={0.2}
            displacementBias={-0.2}
            aoMap={texturesRoom.aoMap}
          />
        </mesh>
        <mesh
          position-z={-11.5}
          position-y={6.5}
          rotation-y={(Math.PI * 90) / 180}
        >
          <boxGeometry args={[1, 12, 24, 1, 255, 255]} />
          <meshStandardMaterial color={"#000"} />
        </mesh>

        {/* floor */}
        <mesh rotation-x={(Math.PI * -90) / 180} position-y={0.5} receiveShadow>
          <planeGeometry args={[24, 24]} />
          <MeshReflectorMaterial
            blur={[0, 0]}
            mixBlur={0.5}
            mixStrength={1.5}
            mixContrast={0.8}
            resolution={2048}
            mirror={0.2}
            depthScale={0.8}
            minDepthThreshold={0.3}
            maxDepthThreshold={0.3}
            depthToBlurRatioBias={0.5}
            distortion={1}
            color={"#a5a5a5"}
            map={texturesRoom.map}
            roughnessMap={texturesRoom.roughnessMap}
            roughnessMap-colorSpace={THREE.NoColorSpace}
            normalMap={texturesRoom.normalMap}
            normalMap-colorSpace={THREE.NoColorSpace}
            normalScale={0.1}
            displacementMap={texturesRoom.displacementMap}
            displacementMap-colorSpace={THREE.NoColorSpace}
            aoMap={texturesRoom.aoMap}
            debug={1}
            reflectorOffset={0.1}
          />
        </mesh>

        <mesh position-y={-0.02}>
          <boxGeometry args={[24, 1, 24]} />
          <meshStandardMaterial color={"#000"} />
        </mesh>

        {/* ceiling */}
        <mesh position-y={13} position-x={-6} position-z={-6}>
          <boxGeometry args={[12, 1, 12]} />
          <meshStandardMaterial color={"#080808"} />
        </mesh>
        <mesh position-y={13} position-x={-9} position-z={3}>
          <boxGeometry args={[6, 1, 6]} />
          <meshStandardMaterial color={"#080808"} />
        </mesh>
        <mesh position-y={13} position-x={3} position-z={-9}>
          <boxGeometry args={[6, 1, 6]} />
          <meshStandardMaterial color={"#080808"} />
        </mesh>

        <mesh>
          <Text
            fontSize={0.4}
            position={[12.1, 0, -10]}
            rotation-y={THREE.MathUtils.degToRad(90)}
          >
            dev. - Sunil Park
          </Text>
        </mesh>
      </group>
    </>
  );
}

export default Room;
