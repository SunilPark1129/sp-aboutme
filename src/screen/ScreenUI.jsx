import gsap from "gsap/gsap-core";
import React, { useEffect, useState } from "react";
import { resetPosition } from "../assets/cameraPositionData";

function ScreenUI({ meshTopic, setMeshTopic, camera }) {
  function clickHandler() {
    setMeshTopic(false);
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
    <div className={`screen ${meshTopic && "screen--active"}`}>
      {meshTopic && (
        <div className="content">
          <header className="screen__header">
            <h1>{meshTopic}</h1>
            <button onClick={clickHandler} title="return">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
              </svg>
            </button>
          </header>
          <div className="screen_body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              tempore aspernatur unde iste delectus omnis doloribus similique
              quibusdam labore? Molestias?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit voluptate iure, quas distinctio ducimus quidem quo
              praesentium quibusdam perspiciatis exercitationem dolores
              molestias, vitae magni corporis pariatur inventore aut veniam
              nobis?
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScreenUI;
