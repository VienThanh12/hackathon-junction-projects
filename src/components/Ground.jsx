import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/final-ground-junc.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.004']}
        position={[-0.249, -4.822, -2.358]}
        rotation={[0, 0, -Math.PI]}
        scale={[-6.884, 13.497, 5.955]}
      />
    </group>
  )
}

useGLTF.preload('/final-ground-junc.gltf')
