import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/elevator.gltf");
  const group = useRef();
  return (
    <group
      {...props}
      ref={group}
      dispose={null}
      position={[2, 2, 0]}
      scale={[0.05, 0.05, 0.05]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node1.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node2.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node3.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node4.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node5.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node6.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node7.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node8.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node9.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node10.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node11.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node12.geometry}
        material={materials.mat0}
      />
    </group>
  );
}

useGLTF.preload("/models/elevator.gltf");
