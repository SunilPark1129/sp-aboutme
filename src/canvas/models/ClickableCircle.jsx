import { Text } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import moveCamera from "../../utilities/moveCamera";
import { useThree } from "@react-three/fiber";

function ClickableCircle({ isLeft, topic, getTopic, orbitRef }) {
  const [hasHovered, setHasHovered] = useState(false);
  const { camera } = useThree();

  useEffect(() => {
    document.body.style.cursor = hasHovered ? "pointer" : "auto";
  }, [hasHovered]);

  if (!orbitRef) return;

  function clickHandler() {
    getTopic(topic);
    moveCamera({ camera, orbitRef, topic });
  }

  function pointerEnterHandler() {
    setHasHovered(true);
  }
  function pointerLeaveHandler() {
    setHasHovered(false);
  }
  return (
    <mesh
      onClick={clickHandler}
      onPointerEnter={pointerEnterHandler}
      onPointerLeave={pointerLeaveHandler}
      position-y={topic === "Hobby" ? 4 : 3}
      position={isLeft ? [1, 0, 0] : [0, 0, 1]}
    >
      <sphereGeometry args={[0.4]} />
      <meshBasicMaterial color={"#fff"} />
      <Text
        fontSize={0.7}
        position-y={1}
        rotation-y={isLeft ? THREE.MathUtils.degToRad(90) : 0}
        color={"#ffffff"}
      >
        {hasHovered ? topic.toUpperCase() : ""}
      </Text>
    </mesh>
  );
}

export default ClickableCircle;
