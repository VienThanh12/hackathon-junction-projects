import React from "react";
import { Card, List } from "antd";
import EquipmentItem from "./EquipmentItem";

const equipmentList = [
  { name: "Elevator Model A", imageUrl: "/src/assets/Equipment/evelator1.png" },
  { name: "Escalator Model B", imageUrl: "/models/escalatorB.glb" },
  // Add more equipment as needed
];

const EquipmentLibrary = () => {
  return (
    <Card title="Equipment Library" style={{ marginBottom: "20px" }}>
      <List
        itemLayout="horizontal"
        dataSource={equipmentList}
        renderItem={(item) => <EquipmentItem equipment={item} />}
      />
    </Card>
  );
};

export default EquipmentLibrary;
