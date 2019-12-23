import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AnswerPopupLiElement from "../answer-popup-li-element/answer-popup-li-element";
import "./answer-popup-style.scss";

const AnswerPopup = ({ isDeployedAnswerWindow }) => {
  const [answer, setAnswer] = useState([]);
  const activeFilters = useSelector(state => state.activeFilters);

  useEffect(() => {
    if (isDeployedAnswerWindow) {
      const stringQuery = activeFilters.map(({ id }) => id).join(",");

      axios
        .get(`http://project/public/getPlacesByFilters?ids=${stringQuery}`)
        .then(response => setAnswer(response.data))
        .catch();
    }
  }, [isDeployedAnswerWindow, activeFilters]);

  return (
    <div
      className={
        isDeployedAnswerWindow
          ? "answer-popup-wrap"
          : "answer-popup-wrap collapsed"
      }
    >
      <span>Результат</span>
      <ul>
        {answer.map(({ id, description, rating }) => (
          <AnswerPopupLiElement
            key={id}
            description={description}
            rating={rating}
          />
        ))}
      </ul>
    </div>
  );
};

export default AnswerPopup;
