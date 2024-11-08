import React from "react";
import { Button, DatePicker, message } from "antd";
import ImageUploader from "./components/ImageUpload";

const App = () => {
  const handleClick = () => {
    message.success("Button clicked!");
  };

  return <ImageUploader />;
};

export default App;
