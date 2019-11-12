import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../login-form/login-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,  faGoogle, faTwitter, faVk} from '@fortawesome/free-brands-svg-icons'
import './login-page-style.scss';


const LoginPage = ({ Authenticate }) => {

    return(
        <div className="background-wrapper">

            <div className="login-wrapper">
                <nav className="login-nav">
                    <div className="close-icon-bar">
                        X
                    </div>

                    <div className="logo-bar">
                        Icon
                    </div>

                    <ul className="ul-bar">
                        <li>
                            Login
                        </li>
                        <li>
                           Register
                        </li>
                    </ul>
                </nav>
                
                <LoginForm Authenticate={Authenticate}/>

                <div className="txt1 text-center p-t-54 p-b-20">
                    <span>
                        Or Sign Up Using
                    </span>
                </div>

                <div className="social-icon-bar">
                    <a href="#" className="login100-social-item">
                        <FontAwesomeIcon icon={faFacebookSquare} color="#00F"/>
                    </a>

                    <a href="#" className="login100-social-item">
                        <FontAwesomeIcon icon={faTwitter} color="#00B"/>
                    </a>

                    <a href="#" className="login100-social-item">
                        <FontAwesomeIcon icon={faGoogle} color="#F0F"/>
                    </a>
                </div>
			</div>
        </div>
    );
}
export default LoginPage;