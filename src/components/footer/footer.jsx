import React from "react";
import "./footer-style.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-item">
          <h4>Мы рекомендуем</h4>
          <ul>
            <li>а</li>
            <li>б</li>
            <li>в</li>
            <li>г</li>
            <li>д</li>
          </ul>
        </div>

        <div className="footer-item">
          <h4>О нас</h4>
          <ul>
            <li>а</li>
            <li>б</li>
            <li>в</li>
            <li>г</li>
            <li>д</li>
          </ul>
        </div>

        <div className="footer-item">
          <h4>Что-то</h4>
          <ul>
            <li>а</li>
            <li>б</li>
            <li>в</li>
            <li>г</li>
            <li>д</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
