import React from "react";
import { Layout, Typography } from "antd";
import BuildingInputForm from "../components/BuildingInputForm";

const { Header, Content } = Layout;
const { Title } = Typography;

const HomePage = () => (
  <Layout>
    <Header style={{ backgroundColor: "#001529" }}>
      <Title style={{ color: "#fff", margin: "14px 0" }} level={3}>
        2D to 3D Building Model Converter
      </Title>
    </Header>
    <Content style={{ padding: "20px" }}>
      <BuildingInputForm />
    </Content>
  </Layout>
);

export default HomePage;
