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
import { useLoader } from "@react-three/fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import PopUpButton from "./PopUpButton"; // Import PopUpButton

function Model() {
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
  const moveSpeed = 1;

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
        case "q":
          elevatorRef.current.position.z += moveSpeed;
          break;
        case "e":
          elevatorRef.current.position.z -= moveSpeed;
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
        w - sdfwefwef<br/>
        a -<br/>
        s - <br/>
        d -<br/>
        q -<br/> 
        f -<br/>
        g -<br/>
      </p>
      <button onClick={onClose} style={styles.closeButton}>
        Close
      </button>
    </div>
  );
};

const ThreeDModelViewer = ({ openElevator, setOpenElevator, file, setFile }) => {
  const [model, setModel] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setModel(url);
    }
  }, [file, setFile]);

  const ModelViewer = ({ model }) => {
    const { scene } = useGLTF(model);
    return <primitive object={scene} scale={1} />;
  };

  const exportModelAsPng = () => {
    const canvas = canvasRef.current?.gl.domElement;
    if (canvas) {
      canvas.toBlob((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "3DModelView.png";
        link.click();
        URL.revokeObjectURL(link.href);
      }, "image/png");
    }
  };

  const handlePopUpClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div style={{ height: "80vh", background: "#f0f0f0", position: "relative" }}>
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 40], fov: 50 }}>
        <Environment preset="sunset" />
        {openElevator && (
          <MovableElevator
            openElevator={openElevator}
            setOpenElevator={setOpenElevator}
          />
        )}
        <OrbitControls />
        <Model />
        <ContactShadows opacity={0.7} />
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
