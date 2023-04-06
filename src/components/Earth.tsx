/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 earth.gltf
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export function Earth(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/earth.gltf") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1.13}
      />
    </group>
  );
}

useGLTF.preload("/earth.gltf");