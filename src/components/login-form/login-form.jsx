import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/actionCreator';
import axios from 'axios';
//import { useHistory,  useLocation} from 'react-router-dom';
import './login-form-style.scss';
import FormInputItem from '../form-input-item/form-input-item';

const LoginForm = ({ loginRequest }) => {
    //const history = useHistory();
    //const location = useLocation();
    //let { from } = location.state || { from: { pathname: "/" } };
    const queryTest = () => {
        axios.get("https://jsonstorage.net/api/items/f73e4d6b-0754-4428-8f0b-109945d3eb39")
            .then(response => loginRequest(response.data.tokenID, true))
            .catch();
    }

    return(
        <>
        <form className="login-form-wrapper">
            
            <FormInputItem inputType="text"
                           tabIndex="1"
                           isFocused={true}
                           />

            <FormInputItem inputType="password"
                           tabIndex="2"
                           isFocused={false}
                           />
            
            <div className="pas-restore-box">
                <a href="/">
                    Забыли пароль?
                </a>
            </div>
            
		</form>

        <button className="submit-form-button" tabIndex="3" onClick={queryTest}>
                Авторизация
        </button>
        </>
    );
}
//() => Authenticate(() => history.replace(from))

export default connect(() => ({}), { loginRequest })(LoginForm);