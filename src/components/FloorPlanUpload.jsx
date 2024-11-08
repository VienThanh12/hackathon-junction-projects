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
      label="Upload Floor Plans"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[{ required: true, message: "Please upload floor plans!" }]}
    >
      <Upload
        name="files"
        accept=".jpg,.jpeg,.png,.pdf,.dxf"
        multiple
        beforeUpload={() => false} // Prevent automatic upload
        listType="picture"
      >
        <Button icon={<UploadOutlined />}>Select Floor Plans</Button>
      </Upload>
    </Form.Item>
  );
};

export default FloorPlanUpload;
