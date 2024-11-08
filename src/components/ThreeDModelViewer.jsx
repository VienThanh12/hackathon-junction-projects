import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box"; // Import your 3D component (e.g., Box)

const ThreeDModelViewer = () => {
  return (
    <div style={{ height: "80vh", background: "#f0f0f0" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 15]} intensity={1} />
        <OrbitControls />
        <Box />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
