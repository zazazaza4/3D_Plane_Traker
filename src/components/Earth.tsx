/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 earth.gltf
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Plane } from "./Plane";
import { useSpring, a } from "@react-spring/three";
import { IMarker } from "../@types";
import { LON_OFFSET } from "../consts";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

interface EarthProps {
  marker: IMarker;
}

export function Earth({ marker }: EarthProps) {
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const { nodes, materials } = useGLTF("/earth.gltf") as GLTFResult;

  const { lat, lon } = marker;

  const latRot = (lat * Math.PI) / 180;
  const lonRot = -((lon * Math.PI) / 180) + LON_OFFSET;

  const { scale, markerPosition, rotation } = useSpring({
    scale: isZoom ? 4 : 2,
    markerPosition: isZoom ? [0, 0, 4.5] : [0, 0, 2.5],
    rotation: [latRot, lonRot, 0],
  });

  return (
    <>
      <a.group
        scale={scale}
        rotation={rotation as any}
        dispose={null}
        onClick={() => {
          setIsZoom((prev) => !prev);
        }}
      >
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
          scale={1.13}
        />
      </a.group>
      {marker.type === "plane" ? (
        <Plane id={"ab41ee"} position={markerPosition} />
      ) : (
        <a.mesh position={markerPosition as any}>
          <sphereGeometry args={[0.01]} />
          <meshStandardMaterial color="orange" />
        </a.mesh>
      )}
    </>
  );
}

useGLTF.preload("/earth.gltf");
