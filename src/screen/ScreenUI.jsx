import gsap from "gsap/gsap-core";
import React from "react";
import { resetPosition } from "../assets/cameraPositionData";

function ScreenUI({ hasClickedMesh, setHasClickedMesh, camera }) {
  function clickHandler() {
    setHasClickedMesh(false);
    gsap.timeline().to(camera[0].position, {
      ...resetPosition.camera,
    });

    gsap.timeline().to(camera[1].current.target, {
      ...resetPosition.orbit,
    });

    camera[1].current.enableRotate = true;
    camera[1].current.enablePan = true;
    camera[1].current.enableZoom = true;
  }
  return (
    <div className="screen">
      {hasClickedMesh && <button onClick={clickHandler}>RESET</button>}
    </div>
  );
}

export default ScreenUI;
