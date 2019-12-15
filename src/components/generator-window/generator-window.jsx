import React, { useState } from "react";
import AnswerPopup from "../answer-popup/answer-popup";
import Pulse from "react-reveal/Pulse";
import "./generator-window-style.scss";

const GeneratorWindow = () => {
  const [isDeployedAnswerWindow, SetDeployedAnswerWindow] = useState(false);

  const getAnswer = () => {
    SetDeployedAnswerWindow(!isDeployedAnswerWindow);
  };

  return (
    <div className="main-content">
      <div className="circle-box">
        <Pulse forever={true}>
          <span onClick={getAnswer}>CLICK</span>
        </Pulse>
      </div>

      <AnswerPopup isDeployedAnswerWindow={isDeployedAnswerWindow} />
    </div>
  );
};

export default GeneratorWindow;
