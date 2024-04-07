import { useCallback, useEffect, useRef, useState } from "react";
import CanvasScreen from "./canvas/CanvasScreen";
import ScreenUI from "./screen/ScreenUI";

function App() {
  const [hasClickedMesh, setHasClickedMesh] = useState(null);
  const [item, setItem] = useState(null);
  const [camera, setCamera] = useState(null);

  //
  function getTopic(x) {
    setHasClickedMesh(x);
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
        hasClickedMesh={hasClickedMesh}
        setHasClickedMesh={setHasClickedMesh}
        camera={camera}
      />
    </div>
  );
}

export default App;
