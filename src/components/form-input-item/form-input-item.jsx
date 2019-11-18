import React, {useState, useRef, useEffect} from 'react';
import './form-input-item-style.scss';

const TEXT = [
    {
        type: "text",
        inputName: "username",
        inputText: "Введите свой логин",
        spanText: "Логин"
    },

    {
        type: "password",
        inputName: "pas",
        inputText: "Введите свой пароль",
        spanText: "Пароль"
    },
];

const FormInputItem = ({ inputType, tabIndex, isFocused}) => {
    const [text, SetText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if(isFocused)
            inputRef.current.focus();
    }, [ isFocused, inputRef ]);


    const handleTextChange = ({target: { value }}) => {
        SetText(value);
    }

    const [ {spanText, inputText, inputName} ] = TEXT.filter(obj => obj.type === inputType);

    return(
        <div className="input-box-wrapper validate-input" data-validate = "Username is reauired">
            <span className="label-input100">{spanText}</span>
            <input className="input100" type={inputType} 
                                        name={inputName} 
                                        placeholder={inputText} 
                                        tabIndex={tabIndex}
                                        onChange={handleTextChange} value={text}
                                        ref={inputRef}/>
            <span className="focus-input100"></span>
        </div>
    );
}
export default FormInputItem;
