export const ADD_ALL_FILTERS = "ADD_ALL_FILTERS";
export const ADD_ACTIVE_FILTER = "ADD_ACTIVE_FILTER";
export const REMOVE_ACTIVE_FILTER = "REMOVE_ACTIVE_FILTER";
export const REMOVE_ACTIVE_FILTERS = "REMOVE_ACTIVE_FILTERS";
export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const FORM_TEXT = [
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
