import React, { useState } from "react";
import { Layout, Typography, Button, Card, notification, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import BuildingInputForm from "../components/BuildingInputForm";

const { Header, Content } = Layout;
const { Title } = Typography;

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state for model generation
  const [formReset, setFormReset] = useState(false); // To trigger form reset

  // Function to handle home button click
  const handleHomeClick = () => {
    navigate("/");
  };

  // Function to handle form submission and simulate 3D model generation
  const handleConvert = async () => {
    // Form validation: ensure all inputs are filled (assuming BuildingInputForm handles validation)
    setLoading(true);
    try {
      // Simulate 3D model generation API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      notification.success({
        message: "Model Generated Successfully",
        description: "Your 3D model has been generated successfully.",
      });
    } catch (error) {
      notification.error({
        message: "Model Generation Failed",
        description:
          "There was an issue generating the model. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to reset the form
  const handleFormReset = () => {
    setFormReset(true); // Triggers form reset in BuildingInputForm component
    setTimeout(() => setFormReset(false), 0); // Reset the flag immediately after reset
  };

  return (
    <Layout
      style={{
        height: "97.4vh",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      }}
    >
      {/* Header Section */}
      <Header
        style={{
          backgroundColor: "#001529",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title
          style={{
            color: "#fff",
            margin: "14px 0",
            fontSize: "24px",
            fontWeight: "600",
          }}
          level={3}
        >
          2D to 3D Building Model Converter
        </Title>
        <Button
          type="primary"
          icon={<HomeOutlined />}
          onClick={handleHomeClick}
          style={{
            backgroundColor: "#1890ff",
            border: "none",
            color: "#fff",
            borderRadius: "4px",
          }}
        >
          Home
        </Button>
      </Header>

      {/* Content Section */}
      <Content
        style={{
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "600px",
            background: "#ffffff",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            padding: "20px 24px",
            textAlign: "center",
          }}
          title={
            <Title level={4} style={{ fontWeight: "500", marginBottom: "0" }}>
              Enter Building Details
            </Title>
          }
        >
          <BuildingInputForm reset={formReset} />
        </Card>
      </Content>
    </Layout>
  );
};

export default HomePage;
