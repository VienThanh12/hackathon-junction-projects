import React from "react";
import { Card, List } from "antd";
import EquipmentItem from "./EquipmentItem";

const equipmentList = [
  { name: "Elevator Model A", modelUrl: "/models/elevatorA.glb" },
  { name: "Escalator Model B", modelUrl: "/models/escalatorB.glb" },
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
