import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Environment } from "@react-three/drei";
import { Model as Elevator } from "./Elevator";
import Box from "./Box";

const MovableElevator = () => {
  const elevatorRef = useRef();

  // Define movement speed
  const moveSpeed = 1;

  // Listen for key presses to control movement
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!elevatorRef.current) return;

      switch (event.key) {
        case "ArrowUp":
        case "w":
          elevatorRef.current.position.y += moveSpeed;
          break;
        case "ArrowDown":
        case "s":
          elevatorRef.current.position.y -= moveSpeed;
          break;
        case "ArrowLeft":
        case "a":
          elevatorRef.current.position.x -= moveSpeed;
          break;
        case "ArrowRight":
        case "d":
          elevatorRef.current.position.x += moveSpeed;
          break;
        case "q": // Move up
          elevatorRef.current.position.z += moveSpeed;
          break;
        case "e": // Move down
          elevatorRef.current.position.z -= moveSpeed;
          break;
        default:
          break;
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <mesh ref={elevatorRef}>
      <Elevator />;
    </mesh>
  );
};

const ThreeDModelViewer = ({ openElevator, setOpenElevator }) => {
  console.log(openElevator);
  return (
    <div style={{ height: "80vh", background: "#f0f0f0" }}>
      <Canvas
        camera={{
          position: [0, 0, 20],
        }}
      >
        <Environment preset="sunset" />
        {openElevator && (
          <MovableElevator
            openElevator={openElevator}
            setOpenElevator={setOpenElevator}
          />
        )}
        <OrbitControls />

        <ContactShadows opacity={0.7} />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
