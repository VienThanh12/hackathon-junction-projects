import React from "react";
import { Layout, Row, Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ThreeDModelViewer from "../components/ThreeDModelViewer";
import EquipmentLibrary from "../components/EquipmentLibrary";
import ExportModelButton from "../components/ExportModelButton";

const { Header, Content } = Layout;

const ModelingPage = () => (
  <Layout>
    <Header
      style={{
        backgroundColor: "#001529",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ color: "#fff", fontSize: "24px" }}>Modeling Workspace</div>
      <a
        href="/"
        style={{
          color: "#fff",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <HomeOutlined style={{ marginRight: "5px" }} />
        Home
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

export default ModelingPage;
