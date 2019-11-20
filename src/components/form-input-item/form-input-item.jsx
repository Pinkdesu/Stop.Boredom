import React, { useState, useRef, useEffect } from "react";
import "./form-input-item-style.scss";

const TEXT = [
  {
    value: "text",
    type: "text",
    inputName: "username",
    inputText: "Введите свой логин",
    spanText: "Логин"
  },

  {
    value: "password",
    type: "password",
    inputName: "pas",
    inputText: "Введите свой пароль",
    spanText: "Пароль"
  },

  {
    value: "sec-password",
    type: "password",
    inputName: "second-pass",
    inputText: "Повторный пароль",
    spanText: "Введите пароль ещё раз"
  },

  {
    value: "e-mail",
    type: "e-mail",
    inputName: "email",
    inputText: "Введите свой e-mail",
    spanText: "E-mail"
  }
];

const FormInputItem = ({ inputType, isFocused }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) inputRef.current.focus();
  }, [isFocused, inputRef]);

  const handleTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const { type, spanText, inputText, inputName } = TEXT.find(
    obj => obj.value === inputType
  );

  return (
    <div
      className="input-box-wrapper validate-input"
      data-validate="Username is reauired"
    >
      <span className="label-input100">{spanText}</span>
      <input
        className="input100"
        type={type}
        name={inputName}
        placeholder={inputText}
        onChange={handleTextChange}
        value={text}
        ref={inputRef}
      />
      <span className="focus-input100"></span>
    </div>
  );
};
export default FormInputItem;
