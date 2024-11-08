import React, { useState, useRef, useEffect} from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// add some 3d model mess
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const [texture, setTexture] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      // Assuming the server returns the uploaded image URL
      message.success(`${info.file.name} uploaded successfully`);
      const url = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(url); // Store the uploaded image URL in state
      setIsUploaded(true)
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      // Load the uploaded image as a texture
      const loader = new TextureLoader();
      loader.load(imageUrl, (loadedTexture) => {
        setTexture(loadedTexture);
      });
    }
  }, [imageUrl]);
  const Box = (props) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01; // Rotate the mesh every frame
      }
    });

    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} map={texture} />
      </mesh>
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Upload
        name="image"
        showUploadList={false}
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess("ok");
          }, 1000);
        }}
        onChange={handleUpload}
      >
        <Button icon={<UploadOutlined />}>Click to Upload Image</Button>
      </Upload>

      {isUploaded && (
        <div style={{ marginTop: "20px", height: "400px", width: "100%" }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Box position={[-2, 0, 0]} />
            <Box position={[2, 0, 0]} />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
