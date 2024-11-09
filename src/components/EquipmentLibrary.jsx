import React from "react";
import { Card, List } from "antd";
import EquipmentItem from "./EquipmentItem";

const equipmentList = [
  { name: "Elevator Model A", imageUrl: "/src/assets/Equipment/evelator1.png" },
  // Add more items as needed
];

const EquipmentLibrary = ({ openElevator, setOpenElevator, file, setFile }) => {
  return (
    <Card title="Equipment Library" style={{ marginBottom: "20px" }}>
      <div
        style={{
          maxHeight: "200px", // Set the max height to limit overflow
          overflowY: "auto",
          paddingRight: "8px", // Add padding for scrollbar space
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={equipmentList}
          renderItem={(item) => (
            <EquipmentItem
              equipment={item}
              openElevator={openElevator}
              setOpenElevator={setOpenElevator}
              file={file}
              setFile={setFile}
            />
          )}
        />
      </div>
    </Card>
  );
};

export default EquipmentLibrary;
