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
  );
};

export default FloorPlanUpload;
