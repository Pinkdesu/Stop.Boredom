import React, { useState, useRef, useEffect } from "react";
import { FORM_TEXT } from "../../constants";
import "./form-input-item-style.scss";

const FormInputItem = ({ inputType, isFocused }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) inputRef.current.focus();
  }, [isFocused, inputRef]);

  const handleTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const { type, spanText, inputText, inputName } = FORM_TEXT.find(
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
