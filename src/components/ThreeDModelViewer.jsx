import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Model as Elevator } from "./Elevator";
import Box from "./Box";
import { useLoader } from "@react-three/fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

function Model() {
  // Load the .ply file
  const geometry = useLoader(PLYLoader, "/models/final-lego2-mesh.ply");

  return (
    <mesh geometry={geometry} scale={[20, 20, 20]} position={[-10, -10, 0]} rotation={[30, 0, 0]}>
        <meshStandardMaterial vertexColors={true} />
      </mesh>

  );
}

const MovableElevator = () => {
  const elevatorRef = useRef();

  // Define movement speed
  const moveSpeed = 1;
  const rotateSpeed = 0.1;
  const scaleSpeed = 0.1;

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
        case "r": // Rotate around X-axis (clockwise)
            elevatorRef.current.rotation.x += rotateSpeed;
            break;
        case "f": // Rotate around X-axis (counterclockwise)
            elevatorRef.current.rotation.x -= rotateSpeed;
            break;
        case "t": // Rotate around Y-axis (clockwise)
            elevatorRef.current.rotation.y += rotateSpeed;
            break;
        case "g": // Rotate around Y-axis (counterclockwise)
            elevatorRef.current.rotation.y -= rotateSpeed;
            break;
        case "y": // Rotate around Z-axis (clockwise)
            elevatorRef.current.rotation.z += rotateSpeed;
            break;
        case "h": // Rotate around Z-axis (counterclockwise)
            elevatorRef.current.rotation.z -= rotateSpeed;
            break;
        case "i": // Increase scale on X-axis
            elevatorRef.current.scale.x += scaleSpeed;
            break;
        case "k": // Decrease scale on X-axis
            elevatorRef.current.scale.x = Math.max(0.1, elevatorRef.current.scale.x - scaleSpeed);
            break;
        case "o": // Increase scale on Y-axis
            elevatorRef.current.scale.y += scaleSpeed;
            break;
        case "l": // Decrease scale on Y-axis
            elevatorRef.current.scale.y = Math.max(0.1, elevatorRef.current.scale.y - scaleSpeed);
            break;
        case "u": // Increase scale on Z-axis
            elevatorRef.current.scale.z += scaleSpeed;
            break;
        case "j": // Decrease scale on Z-axis
            elevatorRef.current.scale.z = Math.max(0.1, elevatorRef.current.scale.z - scaleSpeed);
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

const ThreeDModelViewer = ({ openElevator, setOpenElevator, file, setFile }) => {
  const [model, setModel] = useState(null);

  // Use effect to handle file state update
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setModel(url);
      setFile(null);
    }
  }, [file, setFile]);

  const ModelViewer = ({ model }) => {
    const { scene } = useGLTF(model);
    return <primitive object={scene} scale={1} />;
  };

  return (
    <div style={{ height: "80vh", background: "#f0f0f0" }}>
    <Canvas camera={{ position: [0, 0, 20] }}>
        <Environment preset="sunset" />
        
        {/* Ambient light for base illumination */}
        <ambientLight intensity={0.5} />

        {/* Directional light for strong light and shadow effects */}
        <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />

        {/* Point light for focused lighting and to enhance color visibility */}
        <pointLight position={[-10, -10, 10]} intensity={0.7} />

        {openElevator && (
            <MovableElevator
                openElevator={openElevator}
                setOpenElevator={setOpenElevator}
            />
        )}
        
        <OrbitControls />
        <Model />
        {model && <ModelViewer model={model} />}
        <ContactShadows opacity={0.7} />
    </Canvas>
</div>

  );
};

export default ThreeDModelViewer;
