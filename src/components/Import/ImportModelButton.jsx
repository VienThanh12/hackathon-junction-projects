import React, { useState } from "react";
import { Button, Modal, Radio } from "antd";
import { ImportOutlined } from "@ant-design/icons";
import Import3D from "./Import3D";

const ImportModelButton = ({ file, setFile }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [exportType, setExportType] = useState("model");

  const handleExportTypeChange = (e) => {
    setExportType(e.target.value);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        <Import3D file={file} setFile={setFile} />
      </Modal>
    </div>
  );
};

export default ImportModelButton;
