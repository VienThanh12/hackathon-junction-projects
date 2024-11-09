import React, { useState } from "react";
import { Form, Button, Steps, message } from "antd";
import { useNavigate } from "react-router-dom";
import FloorPlanUpload from "./FloorPlanUpload";
import FloorHeightInput from "./FloorHeightInput";

const { Step } = Steps;

const BuildingInputForm = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Steps data
  const steps = [
    {
      title: "2D Pictures",
      content: <FloorPlanUpload />,
    },
    {
      title: "Floor Heights",
      content: <FloorHeightInput />,
    },
    {
      title: "Floor Plans",
      content: <FloorHeightInput />,
    },
  ];

  // Move to the next step
  const next = () => {
    form
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  // Move to the previous step
  const prev = () => {
    setCurrent(current - 1);
  };

  // Handle form submission
  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Building information submitted!");
    navigate("/modeling"); // Navigate to the Modeling page
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div style={{ marginTop: "20px" }}>{steps[current].content}</div>
      <div style={{ marginTop: "20px" }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: "8px" }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </Form>
  );
};

export default BuildingInputForm;
