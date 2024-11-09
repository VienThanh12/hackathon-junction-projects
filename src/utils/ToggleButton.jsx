import React, { useState } from "react";
import { Switch } from "antd";

function ToggleButton({ openElevator, setOpenElevator }) {
  const handleToggle = (openElevator) => {
    setOpenElevator(openElevator);
    console.log(`Toggle is now ${openElevator ? "ON" : "OFF"}`);
  };

  return <Switch checked={openElevator} onChange={handleToggle} />;
}

export default ToggleButton;
