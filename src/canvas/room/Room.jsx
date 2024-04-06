import React from "react";

function Room() {
  return (
    <>
      <group position-y={-5}>
        <mesh position-x={-11.5} position-y={6.5}>
          <boxGeometry args={[1, 12, 24]} />
          <meshStandardMaterial color={"#f0d0b4"} />
        </mesh>
        <mesh position-z={-11.5} position-y={6.5}>
          <boxGeometry args={[24, 12, 1]} />
          <meshStandardMaterial color={"#f0d0b4"} />
        </mesh>
        <mesh>
          <boxGeometry args={[24, 1, 24]} />
          <meshStandardMaterial color={"#f0d0b4"} />
        </mesh>
        <mesh position-y={13} position-x={-6} position-z={-6}>
          <boxGeometry args={[12, 1, 12]} />
          <meshStandardMaterial color={"#f0d0b4"} />
        </mesh>
        <mesh position-y={13} position-x={-9} position-z={3}>
          <boxGeometry args={[6, 1, 6]} />
          <meshStandardMaterial color={"#f0d0b4"} />
        </mesh>
        <mesh position-y={13} position-x={3} position-z={-9}>
          <boxGeometry args={[6, 1, 6]} />
          <meshStandardMaterial color={"#f0d0b4"} />
        </mesh>
      </group>
    </>
  );
}

export default Room;
