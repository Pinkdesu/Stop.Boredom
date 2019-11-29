import React from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../actions/actionCreator";
import axios from "axios";
import FormInputItem from "../form-input-item/form-input-item";
import "./login-form-style.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const queryTest = () => {
    axios
      .get(
        "https://jsonstorage.net/api/items/f73e4d6b-0754-4428-8f0b-109945d3eb39"
      )
      .then(response => dispatch(loginRequest(response.data.tokenID, true)))
      .catch();
  };

  return (
    <>
      <form className="login-form-wrapper">
        <FormInputItem inputType="text" isFocused={true} />

        <FormInputItem inputType="password" isFocused={false} />

        <div className="pas-restore-box">
          <a href="/">Забыли пароль?</a>
        </div>
      </form>

      <button className="submit-form-button" onClick={queryTest}>
        Авторизация
      </button>
    </>
  );
};

export default LoginForm;
