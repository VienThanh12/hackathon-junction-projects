import React from "react";
import { Modal, Typography, Button } from "antd";

const { Paragraph } = Typography;

const InlinePopup = ({ isOpen, onClose }) => {
  return (
    <Modal
      title="How to Move the 3D Objects"
      visible={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="close" type="primary" onClick={onClose}>
          Close
        </Button>,
      ]}
      width={600}
      bodyStyle={{ maxHeight: "60vh", overflowY: "auto" }} // Added styles
    >
      <Paragraph>
        <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: 2 }}>
          <li>
            <strong>Movement:</strong>
          </li>
          <li>
            <strong>W</strong> or <strong>↑</strong> - Move up
          </li>
          <li>
            <strong>A</strong> or <strong>←</strong> - Move left
          </li>
          <li>
            <strong>S</strong> or <strong>↓</strong> - Move down
          </li>
          <li>
            <strong>D</strong> or <strong>→</strong> - Move right
          </li>
          <li>
            <strong>Q</strong> - Move forward
          </li>
          <li>
            <strong>E</strong> - Move backward
          </li>
          <br />
          <li>
            <strong>Rotation:</strong>
          </li>
          <li>
            <strong>F</strong> - Back flipping
          </li>
          <li>
            <strong>R</strong> - Front flipping
          </li>
          <li>
            <strong>G</strong> - Rotate left-hand side
          </li>
          <li>
            <strong>T</strong> - Rotate right-hand side
          </li>
          <li>
            <strong>Y</strong> - Rotate upwards right-hand side
          </li>
          <li>
            <strong>H</strong> - Rotate upwards left-hand side
          </li>
          <br />
          <li>
            <strong>Scaling:</strong>
          </li>
          <li>
            <strong>I</strong> - Move left + Increase width
          </li>
          <li>
            <strong>K</strong> - Move right + Decrease width
          </li>
          <li>
            <strong>O</strong> - Increase height
          </li>
          <li>
            <strong>L</strong> - Decrease height
          </li>
          <li>
            <strong>U</strong> - Increase thickness + Move backward
          </li>
          <li>
            <strong>J</strong> - Decrease thickness + Move forward
          </li>
        </ul>
      </Paragraph>
    </Modal>
  );
};

export default InlinePopup;
