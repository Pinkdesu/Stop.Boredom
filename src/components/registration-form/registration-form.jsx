import React from "react";
import "./registration-form-style.scss";
import FormInputItem from "../form-input-item/form-input-item";

const RegistrationForm = () => {
  return (
    <form className="login-form-wrapper">
      <FormInputItem inputType="text" isFocused={true} />

      <FormInputItem inputType="e-mail" isFocused={false} />

      <FormInputItem inputType="password" isFocused={false} />

      <FormInputItem inputType="sec-password" isFocused={false} />
    </form>
  );
};

export default RegistrationForm;
