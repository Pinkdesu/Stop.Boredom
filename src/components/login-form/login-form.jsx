import React from 'react';
import './login-form-style.scss';
import { NavLink, useHistory,  useLocation} from 'react-router-dom';
import FormInputItem from '../form-input-item/form-input-item';

const LoginForm = ({ Authenticate }) => {
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    return(
        <>
        <form className="login-form-wrapper validate-form">
            
            <FormInputItem inputText="Введите свой логин"
                           inputType="text"
                           inputName="username"
                           spanText="Логин"/>

            <FormInputItem inputText="Введите свой пароль"
                           inputType="password"
                           inputName="pass"
                           spanText="Пароль"/>
            
            <div>
                <a href="#">
                    Забыли пароль?
                </a>
            </div>
            
            <button>
                Авторизация
            </button>


		</form>

        <button onClick={() => Authenticate(history.replace(from))}>
            ROUTE TEST
        </button>
        </>
    );
}

export default LoginForm;