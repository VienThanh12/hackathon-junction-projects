import React, { useState } from "react";
import { Button, Modal, Radio } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

const ExportModelButton = ({ scene, camera, renderer }) => {
  const [exportType, setExportType] = useState("model");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleExportModel = () => {
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      (result) => {
        const output = JSON.stringify(result); 
        const blob = new Blob([output], { type: "application/octet-stream" }); 
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob); 
        link.download = "building-model.glb"; 
        link.click(); 
      },
      { binary: true } 
    );
  };

  const handleExportImage = () => {
    const canvas = renderer.domElement;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "building-model.png";
    link.click();
  };

  const handleExportTypeChange = (e) => {
    setExportType(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true); 
  };

  const handleOk = () => {
    if (exportType === "model") {
      handleExportModel();
    } else if (exportType === "image") {
      handleExportImage();
    }
    setIsModalVisible(false); 
  };

  const handleCancel = () => {
    setIsModalVisible(false); 
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<ExportOutlined />}
        onClick={showModal} 
        block
      >
        Export Model
      </Button>
      <Modal
        title="Export Options"
        visible={isModalVisible}
        onOk={handleOk} 
        onCancel={handleCancel} 
        destroyOnClose 
      >
        <Radio.Group value={exportType} onChange={handleExportTypeChange}>
          <Radio value="model">Export as 3D Model (.glb)</Radio>
          <Radio value="image">Export as 2D Image (.png)</Radio>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default ExportModelButton;
