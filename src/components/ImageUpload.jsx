import React, { useState, useRef, useEffect } from "react";
import { Upload, Button, message, InputNumber, Input, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Canvas, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

const { Title, Text } = Typography;

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [floorCount, setFloorCount] = useState(3);
  const [floorHeight, setFloorHeight] = useState(3);
  const [address, setAddress] = useState("Unknown");

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully`);
      const url = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(url); // Store the uploaded image URL in state
      setIsUploaded(true);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  const Plane = () => {
    const texture = useLoader(TextureLoader, imageUrl); // Load the uploaded texture
    return (
      <mesh>
        <planeGeometry args={[10, 10]} />{" "}
        {/* Create a plane with width and height */}
        <meshStandardMaterial map={texture} />{" "}
        {/* Apply the texture to the plane */}
      </mesh>
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Title level={3}>3D Building Model Generator</Title>
      <div style={{ margin: "20px 0" }}>
        <Text>Enter the building address (for reference):</Text>
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter building address"
          style={{ width: "300px", marginTop: "10px" }}
        />
      </div>

      <div style={{ margin: "20px 0" }}>
        <Text>Step 1: Upload a 2D floor plan texture:</Text>
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
          <Button icon={<UploadOutlined />}>Click to Upload Floor Plan</Button>
        </Upload>
      </div>

      <div style={{ margin: "20px 0" }}>
        <Text>Step 2: Specify the number of floors and floor height:</Text>
        <InputNumber
          min={1}
          defaultValue={3}
          onChange={(value) => setFloorCount(value)}
          placeholder="Enter number of floors"
          style={{ margin: "10px" }}
        />
        <InputNumber
          min={1}
          defaultValue={3}
          onChange={(value) => setFloorHeight(value)}
          placeholder="Enter floor height"
          style={{ margin: "10px" }}
        />
      </div>

      {isUploaded && (
        <div style={{ marginTop: "20px", height: "500px", width: "100%" }}>
          <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Plane /> {/* Use Plane to display the texture */}
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
