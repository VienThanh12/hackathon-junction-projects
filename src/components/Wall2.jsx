import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/final-wall-junc2.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.003']}
        position={[-0.249, -4.822, -2.358]}
        rotation={[0, 0, -Math.PI]}
        scale={[-4.629, 13.497, 2.951]}
      />
    </group>
  )
}

useGLTF.preload('/final-wall-junc2.gltf')
