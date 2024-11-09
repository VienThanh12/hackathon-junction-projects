import React, { useState } from "react";
import { Switch } from "antd";

function ToggleButton({ checked, setChecked }) {
  const handleToggle = (checked) => {
    setChecked(!checked);
    console.log(`Toggle is now ${checked ? "ON" : "OFF"}`);
  };

  return <Switch checked={checked} onChange={handleToggle} />;
}

export default ToggleButton;
