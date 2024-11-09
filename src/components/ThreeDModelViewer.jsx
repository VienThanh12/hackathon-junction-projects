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
  const geometry = useLoader(PLYLoader, "/models/final-lego2-mesh.ply");

  return (
    <mesh geometry={geometry} scale={[20, 20, 20]} position={[-10, -10, 0]} rotation={[30, 0, 0]}>
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
        case "q":
            elevatorRef.current.position.z += moveSpeed;
            break;
        case "e":
            elevatorRef.current.position.z -= moveSpeed;
            break;
        case "r":
            elevatorRef.current.rotation.x += rotateSpeed;
            break;
        case "f":
            elevatorRef.current.rotation.x -= rotateSpeed;
            break;
        case "t":
            elevatorRef.current.rotation.y += rotateSpeed;
            break;
        case "g":
            elevatorRef.current.rotation.y -= rotateSpeed;
            break;
        case "y":
            elevatorRef.current.rotation.z += rotateSpeed;
            break;
        case "h":
            elevatorRef.current.rotation.z -= rotateSpeed;
            break;
        case "i":
            elevatorRef.current.scale.x += scaleSpeed;
            break;
        case "k":
            elevatorRef.current.scale.x = Math.max(0.1, elevatorRef.current.scale.x - scaleSpeed);
            break;
        case "o":
            elevatorRef.current.scale.y += scaleSpeed;
            break;
        case "l":
            elevatorRef.current.scale.y = Math.max(0.1, elevatorRef.current.scale.y - scaleSpeed);
            break;
        case "u":
            elevatorRef.current.scale.z += scaleSpeed;
            break;
        case "j":
            elevatorRef.current.scale.z = Math.max(0.1, elevatorRef.current.scale.z - scaleSpeed);
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

const InlinePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.popup}>
      <h2>How to move the 3D objects</h2>
      <p>
        w or ↑ - Move up<br/>
        a or ← - Move left<br/>
        s or ↓ - Move down<br/>
        d or → - Move right<br/>
        q - Move forward<br/> 
        e - Move backward<br/> 
        f - Back flipping<br/>
        g - Rotate left handside<br/>
        r - Front flipping<br/>
        t - rotate right handside<br/>
        y - rotate upwards right handside<br/>
        h - rotate upwards left handside<br/>
        i - move left + increase width<br/>
        k - move right + decrease width<br/>
        o - increase height<br/>
        l - decrease height<br/>
        u - increase thickness + move backward<br/>
        j - decrease thickness + move forward<br/>
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

  const handleArrowClick = (direction) => {
    const elevatorRef = canvasRef.current?.scene.children.find(child => child.name === "elevatorRef");
    if (!elevatorRef) return;

    switch (direction) {
      case "up":
        elevatorRef.position.y += 1;
        break;
      case "down":
        elevatorRef.position.y -= 1;
        break;
      case "left":
        elevatorRef.position.x -= 1;
        break;
      case "right":
        elevatorRef.position.x += 1;
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ height: "80vh", background: "#f0f0f0", position: "relative" }}>
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 50], fov: 60 }}>
        <Environment preset="sunset" />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <spotLight position={[5, 5, 5]} intensity={0.7} angle={0.3} penumbra={1} castShadow />

        {openElevator && (
          <MovableElevator openElevator={openElevator} setOpenElevator={setOpenElevator} />
        )}

        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
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
    top: "45px", 
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
    left: "10px",
    display: "flex",
    flexDirection: "column",
  },
  arrowContainer: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  arrowButton: {
    backgroundColor: "transparent",
    border: "1px solid #000",
    borderRadius: "50%",
    fontSize: "20px",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    margin: "5px",
  },
};

export default ThreeDModelViewer;