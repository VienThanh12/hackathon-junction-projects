import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const ref = useRef();

  // This hook rotates the box continuously
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Rotate the box on the y-axis
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;
