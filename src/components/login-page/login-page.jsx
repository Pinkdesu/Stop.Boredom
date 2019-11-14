import React from 'react';
import { useClickOutside } from 'react-click-outside-hook';
import { NavLink } from 'react-router-dom';
import LoginForm from '../login-form/login-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare,  faGoogle, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons'
import './login-page-style.scss';


const LoginPage = ({ setActive, authenticate}) => { 
    const [ref, hasClickedOutside] = useClickOutside();
    console.log(hasClickedOutside);
    return(
        <div ref={ref} className="login-wrapper">
            <div className="close-icon-bar">
                <FontAwesomeIcon icon={faTimes} onClick={setActive}/>
            </div>

            <nav className="login-nav">
                <div className="logo-bar">
                    Стоп Скука
                </div>

                <ul className="ul-bar">
                    <li>
                        <NavLink exact to='/login'>Авторизация</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Регистрация</NavLink>
                    </li>
                </ul>
            </nav>
            
            <LoginForm authenticate={authenticate}/>

            <div>
                <span>
                    Or Sign Up Using
                </span>
            </div>

            <div className="social-icon-bar">
                <a href="/" className="login100-social-item">
                    <FontAwesomeIcon icon={faFacebookSquare}/>
                </a>

                <a href="/" className="login100-social-item">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>

                <a href="/" className="login100-social-item">
                    <FontAwesomeIcon icon={faGoogle}/>
                </a>

                <a href="/" className="login100-social-item">
                    <FontAwesomeIcon icon={faVk}/>
                </a>
            </div>
        </div>
    );
}
export default LoginPage;