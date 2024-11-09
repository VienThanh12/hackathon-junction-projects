import React, { useEffect, useState } from "react";
import { Button, Modal, Radio } from "antd";
import { ImportOutlined } from "@ant-design/icons";
import Import3D from "./Import3D";

const ImportModelButton = ({
  file,
  setFile,
  scale,
  setScale,
  okFile,
  setOkFile,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [exportType, setExportType] = useState("model");

  const handleExportTypeChange = (e) => {
    setExportType(e.target.value);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setOkFile(true);
    okFile = true;
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setFile(null);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<ImportOutlined />}
        onClick={showModal}
        style={{
          marginBottom: "30px",
        }}
        block
      >
        Import Model
      </Button>
      <Modal
        title="Import 3D object model into equipment library"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <Import3D
          file={file}
          setFile={setFile}
          scale={scale}
          setScale={setScale}
          okFile={okFile}
          setOkFile={setOkFile}
        />
      </Modal>
    </div>
  );
};

export default ImportModelButton;
