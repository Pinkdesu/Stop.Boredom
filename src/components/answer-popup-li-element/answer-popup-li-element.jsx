import React from "react";
import { Link } from "react-router-dom";
import "./answer-popup-li-element-style.scss";

const AnswerPopupLiElement = ({ id, description, rating }) => {
  return (
    <li>
      <Link to={"/places"} className="answer-popup-li-link">
        <span>{description}</span>
      </Link>
    </li>
  );
};

export default AnswerPopupLiElement;
