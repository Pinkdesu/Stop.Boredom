import React from 'react';
import AnswerPopupLiElement from '../answer-popup-li-element/answer-popup-li-element';
import './answer-popup-style.scss'

const AnswerPopup = ( {isDeployedAnswerWindow} ) => {
    return(
        <div className={isDeployedAnswerWindow ? "answer-popup-wrap" : "answer-popup-wrap collapsed"}>
            <span>Результат</span>
            <ul>
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
                <AnswerPopupLiElement />
            </ul>
        </div>
    );
}

export default AnswerPopup;