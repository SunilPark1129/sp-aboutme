import { useCallback, useEffect, useRef, useState } from "react";
import CanvasScreen from "./canvas/CanvasScreen";
import ScreenUI from "./screen/ScreenUI";
import BackgroundUI from "./screen/BackgroundUI";

function App() {
  const [meshTopic, setMeshTopic] = useState(null);
  const [item, setItem] = useState(null);
  const [camera, setCamera] = useState(null);

  function getTopic(x) {
    setMeshTopic(x);
  }

  function getCamera(cam, orb) {
    setCamera([cam, orb]);
  }

  const CallbackCanvas = useCallback(() => {
    return <CanvasScreen getTopic={getTopic} getCamera={getCamera} />;
  }, [item]);

  return (
    <div className="main">
      <CallbackCanvas />
      <ScreenUI
        meshTopic={meshTopic}
        setMeshTopic={setMeshTopic}
        camera={camera}
      />
      <BackgroundUI />
    </div>
  );
}

export default App;
