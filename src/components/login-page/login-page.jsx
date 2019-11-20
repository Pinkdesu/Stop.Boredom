import React, { useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useClickOutside } from "react-click-outside-hook";
import { Link } from "react-router-dom";
import LoginForm from "../login-form/login-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faGoogle,
  faTwitter,
  faVk
} from "@fortawesome/free-brands-svg-icons";
import "./login-page-style.scss";
import RegistrationForm from "../registration-form/registration-form";

const LoginPage = ({ isLoginFormActive, isRegFormActive }) => {
  const [modal, hasClickedOutside] = useClickOutside();
  const history = useHistory();
  const location = useLocation();

  const goBack = useCallback(() => {
    history.push(location.pathname);
  }, [history, location]);

  useEffect(() => {
    modal.current.addEventListener("keydown", function(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) goBack();
    });
  }, [goBack, modal]);

  if (hasClickedOutside) goBack();

  return (
    <div ref={modal} className="login-wrapper" tabIndex="-1">
      <div className="close-icon-bar">
        <FontAwesomeIcon icon={faTimes} onClick={goBack} />
      </div>

      <nav className="login-nav">
        <div className="logo-bar">Стоп Скука</div>

        <ul className="ul-bar">
          <li>
            <Link
              to="?login=true"
              className={isLoginFormActive ? "nav-link-active" : ""}
            >
              Авторизация
            </Link>
          </li>
          <li>
            <Link
              to="?registration=true"
              className={isRegFormActive ? "nav-link-active" : ""}
            >
              Регистрация
            </Link>
          </li>
        </ul>
      </nav>

      {isLoginFormActive && <LoginForm />}
      {isRegFormActive && <RegistrationForm />}

      <div>
        <span>Or Sign Up Using</span>
      </div>

      <div className="social-icon-bar">
        <a href="/" className="login100-social-item">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>

        <a href="/" className="login100-social-item">
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="/" className="login100-social-item">
          <FontAwesomeIcon icon={faGoogle} />
        </a>

        <a href="/" className="login100-social-item">
          <FontAwesomeIcon icon={faVk} />
        </a>
      </div>
    </div>
  );
};
export default LoginPage;
