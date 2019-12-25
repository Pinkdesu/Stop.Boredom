import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./loading-window-style.scss";

const LoadingWindow = ({ heigth }) => {
  return (
    <div className="loading-window-wrapper" style={{ height: `${heigth}px` }}>
      <FontAwesomeIcon icon={faSpinner} size="2x" />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingWindow;
