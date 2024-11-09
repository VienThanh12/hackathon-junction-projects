import React from "react";
import { Switch } from "antd";

function ToggleButton({ checked, setChecked }) {
  console.log(checked);
  const handleToggle = (e) => {
    setChecked(!checked); // No need to negate checked, just pass it directly
    console.log(`Toggle is now ${checked ? "ON" : "OFF"}`);
  };

  return <Switch checked={checked} onChange={handleToggle} />;
}

export default ToggleButton;
