import React from "react";
import { Layout, Menu, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useSpring, animated, useTrail } from "@react-spring/web";
import {
  GlobalOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import { DownOutlined, RightOutlined } from "@ant-design/icons";

import Kone_Logo from "../assets/Kone_Logo.png";
import Kone_Background from "../assets/Kone_Background.png";

const { Header, Footer, Content } = Layout;

const StartingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/HomePage");
  };

  // Animation for the main sections (header, hero, footer)
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Animation for the button
  const [buttonSpring, buttonApi] = useSpring(() => ({
    scale: 1,
    config: { tension: 200, friction: 10 },
  }));

  // Trail animation for hero text elements
  const heroTextItems = [
    "Welcome to KONE 3DNow",
    "Easily visualize and quickly generate simple 3D building models with basic inputs from 2D images",
  ];
  const trail = useTrail(heroTextItems.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <Layout style={{ height: "97.3vh", overflow: "hidden" }}>
      {/* Header Section */}
      <animated.div style={fadeIn}>
        <Header
          style={{
            backgroundColor: "#ffffff",
            padding: "0 20px",
          }}
        >
          <Row justify="space-between" align="middle" style={{ width: "100%" }}>
            {/* Left Column with Title */}
            <Col
              xs={8}
              sm={8}
              md={8}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#000",
                  marginTop: -10,
                }}
              >
                KONE 3DNow
              </span>
            </Col>

            {/* Center Column with Logo */}
            <Col
              xs={8}
              sm={8}
              md={8}
              style={{ textAlign: "center", alignContent: "bottom" }}
            >
              <img
                src={Kone_Logo}
                alt="KONE Logo"
                style={{ height: 40, marginTop: 10 }}
              />
            </Col>

            {/* Right Column with Menu */}
            <Col xs={8} sm={8} md={8} style={{ textAlign: "right" }}>
              <Menu
                mode="horizontal"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  justifyContent: "flex-end",
                }}
              >
                <Menu.Item key="contact">
                  {/* Opens in a new window */}
                  <a
                    href="https://www.kone.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#1550F6",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Contact KONE
                    <RightOutlined style={{ marginLeft: "8px" }} />
                  </a>
                </Menu.Item>
                <Menu.Item key="language">
                  <a href="/english" style={{ color: "#1550F6" }}>
                    ENGLISH
                    <DownOutlined style={{ marginLeft: "8px" }} />{" "}
                    {/* Down arrow for ENGLISH */}
                  </a>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </animated.div>

      {/* Hero Section */}
      <Content
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Kone_Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "#ffffff",
          padding: "80px 10px",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {trail.map((style, index) => (
          <animated.div key={index} style={{ ...style, marginBottom: "20px" }}>
            {index === 0 ? (
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                {heroTextItems[index]}
              </h1>
            ) : (
              <p
                style={{
                  fontSize: "18px",
                  maxWidth: "600px",
                  margin: "0 auto",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
                }}
              >
                {heroTextItems[index]}
              </p>
            )}
          </animated.div>
        ))}
        <animated.div
          style={buttonSpring}
          onMouseEnter={() => buttonApi.start({ scale: 1.1 })}
          onMouseLeave={() => buttonApi.start({ scale: 1 })}
        >
          <Button
            size="large"
            className="get-started-button"
            style={{
              marginTop: "20px",
              backgroundColor: "#ffffff",
              color: "#000",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleGetStarted}
          >
            GET STARTED
          </Button>
        </animated.div>
      </Content>

      {/* Footer Section */}
      <animated.div style={fadeIn}>
        <Footer
          style={{
            backgroundColor: "#004c91",
            color: "#ffffff",
            textAlign: "center",
            padding: "10px",
            overflow: "hidden",
          }}
        >
          <div>Follow us on social media</div>
          {/* KONE Website Link with Icon */}
          <div className="social-icons" style={{ marginTop: "10px" }}>
            <a
              href="https://www.kone.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
            >
              <GlobalOutlined style={{ fontSize: "24px", margin: "0 10px" }} />{" "}
            </a>
            <a
              href="https://www.facebook.com/konecorporation/" // Add the actual Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
            >
              <FacebookOutlined
                style={{ fontSize: "24px", margin: "0 10px" }}
              />
            </a>
            <a
              href="https://twitter.com/konecorporation" // Add the actual Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
            >
              <TwitterOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
            </a>
            <a
              href="https://www.linkedin.com/company/kone" // Add the actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
            >
              <LinkedinOutlined
                style={{ fontSize: "24px", margin: "0 10px" }}
              />
            </a>
          </div>
        </Footer>
      </animated.div>
    </Layout>
  );
};

export default StartingPage;
