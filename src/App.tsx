import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { ICords, IMarker } from "./@types";
import { ControlPanel, Earth } from "./components";
import { useGeolocation } from "./hooks";

function App() {
  const userLocation: null | ICords = useGeolocation();
  const [activeMarkerId, setActiveMarkerId] = useState<string>("aa01be");

  const markers: IMarker[] = userLocation
    ? [
        {
          id: "me",
          type: "human",
          ...userLocation,
        },
        {
          id: "aa01be",
          lat: 50.00156,
          lon: 36.231537,
          type: "plane",
        },
      ]
    : [
        {
          id: "aa01be",
          lat: 50.00156,
          lon: 36.231537,
          type: "plane",
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
        <pointLight position={[10, 5, 10]} />
        <Stars />
        <Earth marker={activeMarker!} />
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
