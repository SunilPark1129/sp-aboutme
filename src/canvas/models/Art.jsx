import React from "react";
import * as THREE from "three";

function Art() {
  const texturesPainting = new THREE.TextureLoader().load(
    "./image/art/PearlEarring.jpg"
  );

  return (
    <>
      <group
        rotation-z={THREE.MathUtils.degToRad(10)}
        position-y={-0.1}
        position-x={-7}
        position-z={5}
      >
        {/* canvas */}
        <mesh position-x={0.15} position-y={-0.02} castShadow receiveShadow>
          <boxGeometry args={[0.2, 3.86, 3]} />
          <meshStandardMaterial />
          <mesh position-x={0.105} rotation-y={THREE.MathUtils.degToRad(90)}>
            <planeGeometry args={[3, 3.86]} />
            <meshBasicMaterial map={texturesPainting} color={"#cfcfcf"} />
          </mesh>
        </mesh>

        {/* center body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.1, 6, 0.2]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>

        {/* holder */}
        <mesh position-y={2} position-x={0.2} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.15, 0.5]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>
        <mesh position-y={-2} position-x={0.2} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.1, 2.3]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>
        <mesh position-y={0.5} position-x={-0.1} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.2, 1.5]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>
        <mesh position-y={-2.89} position-x={-0.1} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.2, 2.5]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>

        {/* screw */}
        <mesh
          position-y={2.2}
          position-x={0.1}
          rotation-x={THREE.MathUtils.degToRad(90)}
          rotation-z={THREE.MathUtils.degToRad(90)}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[0.1, 0.1, 0.1, 7]} />
          <meshStandardMaterial
            color={"#646464"}
            roughness={0.8}
            metalness={0}
          />
        </mesh>
        <mesh
          position-y={-2.18}
          position-x={0.1}
          rotation-x={THREE.MathUtils.degToRad(90)}
          rotation-z={THREE.MathUtils.degToRad(90)}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[0.1, 0.1, 0.1, 7]} />
          <meshStandardMaterial
            color={"#646464"}
            roughness={0.8}
            metalness={0}
            castShadow
            receiveShadow
          />
        </mesh>

        {/* side legs */}
        <mesh
          position-z={1}
          position-y={-1.5}
          rotation-x={(Math.PI + 10) * 180}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.1, 6, 0.2]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>
        <mesh
          position-z={-1}
          position-y={-1.5}
          rotation-x={(Math.PI - 10) * 180}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.1, 6, 0.2]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>

        <mesh
          position-z={0}
          position-y={-1.6}
          position-x={-2.2}
          rotation-z={(Math.PI + 60) * 180}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.1, 6, 0.2]} />
          <meshStandardMaterial color={"#f3d5bc"} roughness={1} />
        </mesh>
      </group>
    </>
  );
}

export default Art;
