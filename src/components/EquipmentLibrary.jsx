import React from "react";
import { Card, List } from "antd";
import EquipmentItem from "./EquipmentItem";

const equipmentList = [
  { name: "Elevator Model A", imageUrl: "/src/assets/Equipment/evelator1.png" },
  { name: "Escalator Model B", imageUrl: "/models/escalatorB.glb" },
];

const EquipmentLibrary = ({ openElevator, setOpenElevator, file, setFile }) => {
  
  return (
    <Card title="Equipment Library" style={{ marginBottom: "20px" }}>
      <List
        itemLayout="horizontal"
        dataSource={equipmentList}
        renderItem={(item) => (
          <EquipmentItem
          
            equipment={item}
            openElevator={openElevator}
            setOpenElevator={setOpenElevator}

          />
        )}
      />
    </Card>
  );
 
};

export default EquipmentLibrary;
