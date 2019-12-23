import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import "./header-style.scss";

const Header = () => {
  const [{ visibility, isDeployed }, setVisibility] = useState({
    visibility: "visible",
    isDeployed: true
  });
  const [isHover, setHover] = useState(false);
  const login = useSelector(state => state.login);

  const listenScrollEvent = () => {
    if (window.scrollY < 40) {
      setVisibility({
        visibility: "visible",
        isDeployed: true
      });
    }
    if (window.scrollY > 40) {
      setVisibility({
        visibility: "hidden",
        isDeployed: false
      });
    }
  };

  const listenHoverIcon = () => {
    setHover(!isHover);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <header className="header-wrapper">
        <nav className="navbar">
          <Link to="/" className="logo-link">
            <img src="/images/logo-min.jpg" alt="logo" />
          </Link>

          <ul className="menu-main">
            <li>
              <NavLink exact to="/">
                Генератор
              </NavLink>
            </li>
            <li>
              <NavLink to="/places">Места</NavLink>
            </li>
            <li>
              <NavLink to="/feed">Лента</NavLink>
            </li>
            <li>
              <NavLink to="/collaboration">Сотрудничество</NavLink>
            </li>
            <li>
              {login.isAuth ? (
                <NavLink to="/user">Тимур</NavLink>
              ) : (
                <Link to="?login=true">Войти</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <Fade top appear={false} when={isDeployed} duration={200}>
        <div className="geo-bar" style={{ visibility: visibility }}>
          <div className="city-select">
            <FontAwesomeIcon
              icon={isHover ? faMapMarkerAlt : faMapMarker}
              className="location-icon"
            />
            <span
              className="city-name"
              onMouseOver={listenHoverIcon}
              onMouseOut={listenHoverIcon}
            >
              Тюмень
            </span>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Header;
