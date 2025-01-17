import React from "react";
import { Form, InputNumber, Button } from "antd";

const FloorHeightInput = () => {
  return (
    <Form.List
      name="floorHeights"
      rules={[{ required: true, message: "Please input floor heights!" }]}
    >
      {(fields, { add, remove }) => (
        <>
          <div
            style={{
              maxHeight: "230px", // Set the maximum height
              overflowY: "auto", // Enable vertical scrolling
              paddingRight: "10px", // Add padding to avoid content overlap with scrollbar
            }}
          >
            {fields.map(({ key, name, ...restField }) => (
              <Form.Item
                key={key}
                label={`Floor ${name + 1} Height (m)`}
                {...restField}
                rules={[{ required: true, message: "Missing floor height" }]}
              >
                <InputNumber min={1} max={10} style={{ width: "60%" }} />
                <Button type="link" onClick={() => remove(name)}>
                  Remove
                </Button>
              </Form.Item>
            ))}
          </div>
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block>
              Add Floor Height
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default FloorHeightInput;
