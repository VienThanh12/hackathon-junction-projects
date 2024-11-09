import React from "react";
import { List, Button } from "antd";

import ToggleButton from "../utils/ToggleButton";

const EquipmentItem = ({ openElevator, setOpenElevator, equipment }) => {
  const [isPreviewing, setIsPreviewing] = React.useState(false);
  const handleAddEquipment = () => {
    // Logic to add equipment to the 3D model
    console.log(`Adding ${equipment.name} to the scene.`);
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => setIsPreviewing(!isPreviewing)}>
          {isPreviewing ? "Hide Preview" : "Show Preview"}
        </Button>,
     (
          <ToggleButton
            openElevator={openElevator}
            setOpenElevator={setOpenElevator}
          />
        ),
      ]}
    >
      {!isPreviewing && <List.Item.Meta title={equipment.name} />}
      {isPreviewing && (
        <div
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={equipment.imageUrl}
            alt={equipment.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      )}
    </List.Item>
  );
};

export default EquipmentItem;
