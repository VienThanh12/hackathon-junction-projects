// ExportModelButton.jsx
import React from "react";
import { Button } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

const ExportModelButton = ({ scene }) => {
  const handleExport = () => {
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

  return (
    <Button
      type="primary"
      icon={<ExportOutlined />}
      onClick={handleExport}
      block
    >
      Export Model
    </Button>
  );
};

export default ExportModelButton;
