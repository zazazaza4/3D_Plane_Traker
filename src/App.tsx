import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { IMarker } from "./@types";
import { ControlPanel } from "./components";

function App() {
  const [activeMarkerId, setActiveMarkerId] = useState<string>("me");

  const markers: IMarker[] = [
    {
      id: "me",
      lat: 0,
      log: 0,
    },
  ];
  const activeMarker: IMarker | undefined = markers.find(
    (marker) => marker.id === activeMarkerId
  );

  return (
    <>
      <div className="title">
        <h1>3D Nearby Plane Traker</h1>
      </div>
      <Canvas
        style={{
          height: "calc(100vh - 170px)",
          width: "100vw",
        }}
      >
        <Stars />
      </Canvas>
      <div className="controls">
        <ControlPanel
          markers={markers}
          activeMarkerId={activeMarkerId}
          setActiveMarkerId={setActiveMarkerId}
        />
      </div>
    </>
  );
}

export default App;
