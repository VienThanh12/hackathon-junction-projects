import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const PopUpButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    padding: "0",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "18px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: "18px",
  },
};

export default PopUpButton;
