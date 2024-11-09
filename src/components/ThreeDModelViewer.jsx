import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { Model as Elevator } from "./Elevator";
import Box from "./Box";
import { useLoader } from "@react-three/fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

function Model() {
  // Load the .ply file
  const geometry = useLoader(PLYLoader, "/models/Axle shaft.ply");

  return (
    <mesh
      geometry={geometry}
      scale={[0.05, 0.05, 0.05]}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 2, 0]} // Rotate by 90 degrees on y-axis
    >
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

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
        case "W":
          elevatorRef.current.position.y += moveSpeed;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          elevatorRef.current.position.y -= moveSpeed;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          elevatorRef.current.position.x -= moveSpeed;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          elevatorRef.current.position.x += moveSpeed;
          break;
        case "q": // Move up
        case "Q":
          elevatorRef.current.position.z += moveSpeed;
          break;
        case "e": // Move down
        case "E":
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
      <Elevator />
    </mesh>
  );
};

const ThreeDModelViewer = ({
  openElevator,
  setOpenElevator,
  file,
  setFile,
  scale,
  setScale,
  okFile,
}) => {
  const [model, setModel] = useState(null);

  // Use effect to handle file state update
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setModel(url);
    } else setModel(false);
  }, [file, model]);

  const ModelViewer = ({ model }) => {
    const { scene } = useGLTF(model);
    return <primitive object={scene} scale={scale} />;
  };

  const MovableObject = () => {
    const object = useRef();

    // Define movement speed
    const moveSpeed = 1;

    // Listen for key presses to control movement
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (!object.current) return;

        switch (event.key) {
          case "ArrowUp":
          case "w":
          case "W":
            object.current.position.y += moveSpeed;
            break;
          case "ArrowDown":
          case "s":
          case "S":
            object.current.position.y -= moveSpeed;
            break;
          case "ArrowLeft":
          case "a":
          case "A":
            object.current.position.x -= moveSpeed;
            break;
          case "ArrowRight":
          case "d":
          case "D":
            object.current.position.x += moveSpeed;
            break;
          case "q": // Move up
          case "Q":
            object.current.position.z += moveSpeed;
            break;
          case "e": // Move down
          case "E":
            object.current.position.z -= moveSpeed;
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
      <mesh ref={object}>
        <ModelViewer model={model} />
      </mesh>
    );
  };

  return (
    <div style={{ height: "80vh", background: "#f0f0f0" }}>
      <Canvas camera={{ position: [0, 0, 40], fov: 50 }}>
        <Environment preset="sunset" />
        {openElevator && (
          <MovableElevator
            openElevator={openElevator}
            setOpenElevator={setOpenElevator}
          />
        )}

        <OrbitControls />
        <Model />
        {model && okFile && <MovableObject />}
        <ContactShadows opacity={0.7} />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
