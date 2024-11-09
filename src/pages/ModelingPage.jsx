import React, { useState } from "react";
import { Layout, Row, Col, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ThreeDModelViewer from "../components/ThreeDModelViewer";
import EquipmentLibrary from "../components/EquipmentLibrary";
import ExportModelButton from "../components/ExportModelButton";
import ImportModelButton from "../components/Import/ImportModelButton";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const ModelingPage = () => {
  const navigate = useNavigate();

  const [openElevator, setOpenElevator] = useState(false);

  const [file, setFile] = useState(null);
  const [okFile, setOkFile] = useState(false);
  const [scale, setScale] = useState(1);

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
            <ThreeDModelViewer
              openElevator={openElevator}
              setOpenElevator={setOpenElevator}
              file={file}
              setFile={setFile}
              scale={scale}
              setScale={setScale}
              okFile={okFile}
              setOkFile={setOkFile}
            />
          </Col>
          <Col span={6}>
            <EquipmentLibrary
              openElevator={openElevator}
              setOpenElevator={setOpenElevator}
              file={file}
              setFile={setFile}
              okFile={okFile}
              setOkFile={setOkFile}
            />
            <ImportModelButton
              file={file}
              setFile={setFile}
              scale={scale}
              setScale={setScale}
              okFile={okFile}
              setOkFile={setOkFile}
            />
            <ExportModelButton />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ModelingPage;
