import React from "react";
import { Layout, Row, Col, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ThreeDModelViewer from "../components/ThreeDModelViewer";
import EquipmentLibrary from "../components/EquipmentLibrary";
import ExportModelButton from "../components/ExportModelButton";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const ModelingPage = () => {
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        height: "97.4vh",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      }}
    >
      <Header
        style={{
          backgroundColor: "#001529",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#fff", fontSize: "24px" }}>
          Modeling Workspace
        </div>
        <a
          href="/"
          style={{
            color: "#fff",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            icon={<HomeOutlined />}
            onClick={() => {
              navigate("/");
            }}
            style={{
              backgroundColor: "#1890ff",
              border: "none",
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            Home
          </Button>
        </a>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Row gutter={16}>
          <Col span={18}>
            <ThreeDModelViewer />
          </Col>
          <Col span={6}>
            <EquipmentLibrary />
            <ExportModelButton />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ModelingPage;
