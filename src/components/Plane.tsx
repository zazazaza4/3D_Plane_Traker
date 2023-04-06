/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 plane.gltf
Author: Omar_Mohamed (https://sketchfab.com/Omar_Mohamed)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/airplane-628232dd846249f6a89ed3fb2e1cd4f5
Title: Airplane
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_Material001_0: THREE.Mesh;
    Cylinder_Material002_0: THREE.Mesh;
    Cylinder001_Material003_0: THREE.Mesh;
    Cylinder_Material003_0: THREE.Mesh;
    Cylinder_Material004_0: THREE.Mesh;
    Cylinder001_Material005_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export function Plane(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/plane.gltf") as GLTFResult;

  return (
    <group
      scale={0.01}
      position={[0, 0, 4]}
      rotation={[Math.PI / 2, 0, 0]}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="cbdb2b201266454e947bf115439508aefbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cylinder" position={[0, 0, 0]} scale={1}>
                  <group name="Cylinder001" position={[0, 0, 1.8]} scale={0.3}>
                    <mesh
                      name="Cylinder001_Material005_0"
                      geometry={nodes.Cylinder001_Material005_0.geometry}
                      material={materials["Material.005"]}
                    />
                    <mesh
                      name="Cylinder001_Material003_0"
                      geometry={nodes.Cylinder001_Material003_0.geometry}
                      material={materials["Material.003"]}
                    />
                  </group>
                  <mesh
                    name="Cylinder_Material003_0"
                    geometry={nodes.Cylinder_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                  <mesh
                    name="Cylinder_Material001_0"
                    geometry={nodes.Cylinder_Material001_0.geometry}
                    material={materials["Material.001"]}
                  />
                  <mesh
                    name="Cylinder_Material002_0"
                    geometry={nodes.Cylinder_Material002_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Cylinder_Material004_0"
                    geometry={nodes.Cylinder_Material004_0.geometry}
                    material={materials["Material.004"]}
                  />
                </group>
                <group
                  name="Point"
                  position={[487.22, 868.26, 779]}
                  scale={100}
                >
                  <group name="Object_13" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_14" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/plane.gltf");