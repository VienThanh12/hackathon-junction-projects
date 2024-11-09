import React from "react";
import { Form, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FloorPlanUpload = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div
      style={{
        maxHeight: "200px", // Adjust height as needed
        overflowY: "auto",
        border: "1px solid #d9d9d9",
        padding: "10px",
        borderRadius: "4px",
      }}
    >
      <Form.Item
        name="floorPlans"
        label="Upload 2D Pictures"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "Please upload some 2D pictures!" }]}
      >
        <Upload
          name="files"
          accept=".jpg,.jpeg,.png,.pdf,.dxf"
          multiple
          beforeUpload={() => false} // Prevent automatic upload
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Select some 2D Pictures </Button>
        </Upload>
      </Form.Item>
    </div>
  );
};

export default FloorPlanUpload;
