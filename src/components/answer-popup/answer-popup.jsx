import React from 'react';
import Fade from 'react-reveal/Fade';
import AnswerPopupLiElement from '../answer-popup-li-element/answer-popup-li-element';
import './answer-popup-style.scss'

const AnswerPopup = ( {isDeployedAnswerWindow} ) => {
    return(
        <Fade duration={500} when={isDeployedAnswerWindow}>
            <div className={isDeployedAnswerWindow ? "answer-popup-wrap" : "answer-popup-wrap collapsed"}>
                <span>Результат</span>
                <ul>
                    <AnswerPopupLiElement />
                    <AnswerPopupLiElement />
                    <AnswerPopupLiElement />
                    <AnswerPopupLiElement />
                    <AnswerPopupLiElement />
                    <AnswerPopupLiElement />
                </ul>
            </div>
        </Fade>
    );
}

export default AnswerPopup;