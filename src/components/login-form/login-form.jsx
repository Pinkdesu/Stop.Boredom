import React from 'react';
import './login-form-style.scss';
//import { useHistory,  useLocation} from 'react-router-dom';
import FormInputItem from '../form-input-item/form-input-item';

const LoginForm = ({ authenticate }) => {
    // const history = useHistory();
    // const location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    return(
        <form className="login-form-wrapper">
            
            <FormInputItem inputText="Введите свой логин"
                           inputType="text"
                           inputName="username"
                           spanText="Логин"/>

            <FormInputItem inputText="Введите свой пароль"
                           inputType="password"
                           inputName="pass"
                           spanText="Пароль"/>
            
            <div className="pas-restore-box">
                <a href="/">
                    Забыли пароль?
                </a>
            </div>
            
            <button className="submit-form-button">
                Авторизация
            </button>
		</form>
    );
}
//() => Authenticate(() => history.replace(from))
export default LoginForm;