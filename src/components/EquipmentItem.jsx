import React, { useState } from "react";
import { List, Button } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import ToggleButton from "../utils/ToggleButton";

const EquipmentItem = ({
  openElevator,
  setOpenElevator,
  equipment,
  file,
  setFile,
  okFile,
  setOkFile,
}) => {
  const [isPreviewing, setIsPreviewing] = React.useState(false);
  const handleAddEquipment = () => {
    // Logic to add equipment to the 3D model
    console.log(`Adding ${equipment.name} to the scene.`);
  };

  const [text, setText] = useState("This is some removable text.");

  // Function to remove text
  const handleRemoveText = () => {
    setFile(null);
  };

  console.log(okFile);
  return (
    <div>
      <List.Item
        actions={[
          // <Button type="primary" onClick={() => setIsPreviewing(!isPreviewing)}>
          //   {isPreviewing ? "Hide Preview" : "Show Preview"}
          // </Button>,
          <ToggleButton checked={openElevator} setChecked={setOpenElevator} />,
        ]}
      >
        {<List.Item.Meta title={equipment.name} />}
      </List.Item>
      {file && (
        <List.Item
          actions={[
            // <Button type="primary" onClick={() => setIsPreviewing(!isPreviewing)}>
            //   {isPreviewing ? "Hide Preview" : "Show Preview"}
            // </Button>,
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              onClick={handleRemoveText}
              shape="circle"
            />,
          ]}
        >
          {<List.Item.Meta title={file.name} />}
        </List.Item>
      )}
    </div>
  );
};

export default EquipmentItem;
