import React, { useState } from "react";
import { Button, Modal, Radio } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

const ExportModelButton = ({ scene, camera, renderer }) => {
  const [exportType, setExportType] = useState("model");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleExportModel = () => {
    // const exporter = new GLTFExporter();
    // exporter.parse(
    //   scene,
    //   (result) => {
    //     const output = JSON.stringify(result);
    //     const blob = new Blob([output], { type: "application/octet-stream" });
    //     const link = document.createElement("a"); // Corrected element creation
    //     link.href = URL.createObjectURL(blob);
    //     link.download = "/models/elevator.gltf"; // Provide a valid filename with extension
    //     link.click();
    //     URL.revokeObjectURL(link.href); // Clean up the URL object after download
    //   },
    //   { binary: true }
    // );
    try {
      // Create a new anchor element
      const link = document.createElement("a");

      // Set the href attribute to the image URL
      link.href = "/models/Axle shaft.ply";

      // Set crossOrigin to allow external images to be downloaded
      link.crossOrigin = "anonymous";

      // Set download attribute with a default filename or customize as needed
      link.download = "/models/Axle shaft.ply";

      // Append link to the document and trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the link element
      document.body.removeChild(link);
    } catch (error) {
      console.error("Image download failed:", error);
    }
  };

  const handleExportImage = () => {
    try {
      // Create a new anchor element
      const link = document.createElement("a");

      // Set the href attribute to the image URL
      link.href = "/Kone_Logo.png";

      // Set crossOrigin to allow external images to be downloaded
      link.crossOrigin = "anonymous";

      // Set download attribute with a default filename or customize as needed
      link.download = "/Kone_Logo.png";

      // Append link to the document and trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the link element
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
          <Radio value="model">Export as 3D Model (.ply)</Radio>
          <Radio value="image">Export as 2D Image (.png)</Radio>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default ExportModelButton;
