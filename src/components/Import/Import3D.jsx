import React, { useState } from "react";
import { Form, Upload, Button, InputNumber, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Import3D = ({ setFile, scale, setScale, okFile, setOkFile }) => {
  const [modelUrl, setModelUrl] = useState(null);

  const handleUpload = (file) => {
    console.log(file);
    // Convert the uploaded file to a URL
    setFile(file);
    const url = URL.createObjectURL(file);
    console.log("Uploaded 3D model:", url);
    setModelUrl(url); // Save the URL to the state
    return false; // Prevent automatic upload
  };

  const normFile = (e) => {
    return Array.isArray(e) ? e : e && e.fileList;
  };

  return (
    <div style={{ height: "350px" }}>
      <Form.Item
        name="floorPlans"
        label="Upload 3D Object (GLB)"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "Please import your 3D Object" }]}
      >
        <Upload
          name="files"
          accept=".glb"
          beforeUpload={(file) => handleUpload(file)}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Select 3D file</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Scale">
        <InputNumber
          min={0.1}
          max={10}
          step={0.1}
          value={scale}
          onChange={(value) => setScale(value)}
          style={{ width: "100%" }}
        />
      </Form.Item>

      {modelUrl && (
        <Canvas style={{ height: 350, width: 300 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ModelViewer modelUrl={modelUrl} scale={scale} />
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
};

// Component to load and display the 3D model with dynamic scale
const ModelViewer = ({ modelUrl, scale }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} scale={[scale, scale, scale]} />;
};

export default Import3D;
