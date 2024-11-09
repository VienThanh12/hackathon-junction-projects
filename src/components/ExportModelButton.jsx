import React, { useState } from "react";
import { Button, Modal, Radio, message } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

const ExportModelButton = ({ scene }) => {
  const [exportType, setExportType] = useState("model");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleExportModel = () => {
    if (!scene) {
      message.error("No scene available to export.");
      return;
    }

    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      (result) => {
        const output = JSON.stringify(result);
        const blob = new Blob([output], { type: "application/octet-stream" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "elevator_model.gltf";
        link.click();
        URL.revokeObjectURL(link.href);
      },
      { binary: true }
    );
  };

  const handleExportImage = () => {
    try {
      const link = document.createElement("a");
      link.href = "/Kone_Logo.png";
      link.crossOrigin = "anonymous";
      link.download = "Kone_Logo.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Image download failed:", error);
    }
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
          <Radio value="model">Export as 3D Model (.gltf)</Radio>
          <Radio value="image">Export as 2D Image (.png)</Radio>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default ExportModelButton;
