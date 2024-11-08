import React from "react";
import { List, Button } from "antd";

const EquipmentItem = ({ equipment }) => {
  const handleAddEquipment = () => {
    // Logic to add equipment to the 3D model
    console.log(`Adding ${equipment.name} to the scene.`);
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={handleAddEquipment}>
          Add to Scene
        </Button>,
      ]}
    >
      <List.Item.Meta title={equipment.name} />
    </List.Item>
  );
};

export default EquipmentItem;
