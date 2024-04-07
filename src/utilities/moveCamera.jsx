import gsap from "gsap/gsap-core";
import { positionData } from "../assets/cameraPositionData";
function moveCamera({ camera, orbitRef, topic }) {
  gsap.timeline().to(camera.position, {
    ...positionData[topic].camera,
  });

  gsap.timeline().to(orbitRef.current.target, {
    ...positionData[topic].orbit,
  });

  // set cameara move limitation
  // orbitRef.current.minAzimuthAngle = -Math.PI / 4;
  // orbitRef.current.maxAzimuthAngle = Math.PI / 4;

  // disable camera move feature
  orbitRef.current.enableRotate = false;
  orbitRef.current.enablePan = false;
  orbitRef.current.enableZoom = false;
}

export default moveCamera;
