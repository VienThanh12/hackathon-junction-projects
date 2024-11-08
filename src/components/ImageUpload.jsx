import React, { useState } from "react";
import { Upload, Button, Image, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      // Assuming the server returns the uploaded image URL
      message.success(`${info.file.name} uploaded successfully`);
      const url = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(url); // Store the uploaded image URL in state
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Upload
        name="image"
        showUploadList={false}
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess("ok"); // Mocking successful upload
          }, 1000);
        }}
        onChange={handleUpload}
      >
        <Button icon={<UploadOutlined />}>Click to Upload Image</Button>
      </Upload>
      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <Image
            src={imageUrl}
            alt="Uploaded Image"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
