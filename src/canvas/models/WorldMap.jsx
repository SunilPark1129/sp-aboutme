import React from "react";
import * as THREE from "three";

function WorldMap() {
  const texturesPainting = new THREE.TextureLoader().load(
    "./image/worldmap/worldmap.png"
  );
  return (
    <>
      <group position-x={6} position-z={-10.95} position-y={2}>
        <mesh>
          <planeGeometry args={[7, 3.4]} />
          <meshBasicMaterial map={texturesPainting} color={"#817a7a"} />
        </mesh>

        {/* pins */}
        {/* Korea */}
        <mesh position-z={0.08} position-x={2.5} position-y={0.7}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color={"#f84b4b"} />
        </mesh>
        {/* USA */}
        <mesh position-z={0.08} position-x={-1.5} position-y={0.7}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color={"#f84b4b"} />
        </mesh>
      </group>
    </>
  );
}

export default WorldMap;
