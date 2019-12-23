import {
  faTree,
  faHamburger,
  faTape,
  faWalking
} from "@fortawesome/free-solid-svg-icons";
//import { faTree } from "@fortawesome/free-regular-svg-icons";

export const ADD_ALL_FILTERS = "ADD_ALL_FILTERS";
export const ADD_ACTIVE_FILTER = "ADD_ACTIVE_FILTER";
export const REMOVE_ACTIVE_FILTER = "REMOVE_ACTIVE_FILTER";
export const REMOVE_ACTIVE_FILTERS = "REMOVE_ACTIVE_FILTERS";
export const ADD_ALL_PLACES = "ADD_ALL_PLACES";
export const ADD_ALL_CATEGORIES = "ADD_ALL_CATEGORIES";
export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const CATEGORY_ICONS = [
  {
    id: 1,
    name: "Парки",
    icon: faTree
  },

  {
    id: 2,
    name: "Поесть",
    icon: faHamburger
  },

  {
    id: 3,
    name: "Кино",
    icon: faTape
  },

  {
    id: 4,
    name: "Погулять",
    icon: faWalking
  }
];

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
