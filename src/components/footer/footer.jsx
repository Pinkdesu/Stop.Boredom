import React from "react";
import "./footer-style.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-item">
          <h4>В Тюмени мы рекомендуем</h4>
          <ul>
            <li>Интересные места</li>
            <li>Развлечения, досуг</li>
            <li>Кафе, рестораны, бары</li>
            <li>Клубы, фестыб концерты</li>
            <li>Кинотеатрыб театрыб музеи</li>
          </ul>
        </div>

        <div className="footer-item">
          <h4>О нас</h4>
          <ul>
            <li>8-800-355-55-55</li>
            <li>stop.bor@gmail.com</li>
            <li>Тимур Рожков</li>
            <li>Ахметов Айдар</li>
            <li>Анастасия Волькова</li>
          </ul>
        </div>

        <div className="footer-item">
          <h4>Наш охват</h4>
          <ul>
            <li>Детские развлечения</li>
            <li>Активный отдых</li>
            <li>Национально-культурные места</li>
            <li>Развлечения для всей семьи</li>
            <li>Молодёжный движ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
