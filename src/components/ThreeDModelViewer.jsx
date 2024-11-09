// ThreeDModelViewer.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { Model as Elevator } from "./Elevator";
import { Model as Wall1 } from "./Wall1";
import { Model as Wall2 } from "./Wall2";
import { useLoader } from "@react-three/fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import PopUpButton from "./PopUpButton"; 

function Model() {
  // Load the .ply file
  const geometry = useLoader(PLYLoader, "/models/final-lego2-mesh.ply");

  return (
    <mesh
      geometry={geometry}
      scale={[20, 20, 20]}
      position={[-10, -10, 0]}
      rotation={[30, 0, 0]}
    >
      <meshStandardMaterial vertexColors={true} />
    </mesh>
  );
}

const MovableElevator = () => {
  const elevatorRef = useRef();
  const moveSpeed = 1;
  const rotateSpeed = 0.1;
  const scaleSpeed = 0.1;

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
          elevatorRef.current.scale.x = Math.max(
            0.1,
            elevatorRef.current.scale.x - scaleSpeed
          );
          break;
        case "o": // Increase scale on Y-axis
          elevatorRef.current.scale.y += scaleSpeed;
          break;
        case "l": // Decrease scale on Y-axis
          elevatorRef.current.scale.y = Math.max(
            0.1,
            elevatorRef.current.scale.y - scaleSpeed
          );
          break;
        case "u": // Increase scale on Z-axis
          elevatorRef.current.scale.z += scaleSpeed;
          break;
        case "j": // Decrease scale on Z-axis
          elevatorRef.current.scale.z = Math.max(
            0.1,
            elevatorRef.current.scale.z - scaleSpeed
          );
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <mesh ref={elevatorRef}>
      <Elevator />
    </mesh>
  );
};

// Inline pop-up component
const InlinePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.popup}>
      <h2>How to move the 3D objects</h2>
      <p>
        w - sdfwefwef
        <br />
        a -<br />
        s - <br />
        d -<br />
        q -<br />
        f -<br />
        g -<br />
      </p>
      <button onClick={onClose} style={styles.closeButton}>
        Close
      </button>
    </div>
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setModel(url);
    } else setModel(null);
  }, [file, setFile]);

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

  const handlePopUpClick = () => {
    setIsPopupOpen(!isPopupOpen);
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

        <ContactShadows opacity={0.7} />
        
        <Wall1 />
        <Wall2 />


        {model && okFile && <MovableObject />}

      </Canvas>

      <div style={styles.buttonContainer}>
        <PopUpButton onClick={handlePopUpClick} />
      </div>

      <InlinePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

const styles = {
  popup: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    width: "600px",
    marginTop: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "absolute",
    top: "150px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  closeButton: {
    width: "100%",
    padding: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonContainer: {
    position: "absolute",
    top: "10px",
    left: "10px", // Position at the top-left
    display: "flex",
    flexDirection: "column", // Stack buttons vertically
    gap: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default ThreeDModelViewer;
