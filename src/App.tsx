import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { ICords, IMarker } from "./@types";
import { ControlPanel, Earth } from "./components";
import { useGeolocation, usePlanes } from "./hooks";
import { DEFAULT_LOCATION } from "./consts";

function App() {
  const userLocation: ICords | null = useGeolocation();
  const [activeMarkerId, setActiveMarkerId] = useState<string>("me");
  const planes = usePlanes(userLocation || DEFAULT_LOCATION);

  const markers: IMarker[] = userLocation
    ? [
        {
          id: "me",
          type: "human",
          ...userLocation,
        },
        ...planes,
      ]
    : [...planes];
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
        <Earth marker={activeMarker || DEFAULT_LOCATION} />
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
