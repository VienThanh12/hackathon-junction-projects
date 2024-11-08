import React from "react";
import { Layout, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { HomeOutlined } from "@ant-design/icons";
import BuildingInputForm from "../components/BuildingInputForm";

const { Header, Content } = Layout;
const { Title } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  // Function to handle home button click
  const handleHomeClick = () => {
    navigate("/"); // Navigates to http://localhost:5173/
  };

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#001529",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title style={{ color: "#fff", margin: "14px 0" }} level={3}>
          2D to 3D Building Model Converter
        </Title>
        <Button
          type="link"
          icon={<HomeOutlined />}
          onClick={handleHomeClick}
          style={{ color: "#fff", fontSize: "16px" }}
        >
          Home
        </Button>
      </Header>
      <Content style={{ padding: "20px" }}>
        <BuildingInputForm />
      </Content>
    </Layout>
  );
};

export default HomePage;
