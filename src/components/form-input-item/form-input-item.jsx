import React, {useState} from 'react';
import './form-input-item-style.scss';

const FormInputItem = ({ inputType, inputName, spanText, inputText}) => {
    const [text, SetText] = useState('');

    const handleTextChange = ({target: { value }}) => {
        SetText(value);
    }

    return(
        <div className="input-box-wrapper validate-input" data-validate = "Username is reauired">
            <span className="label-input100">{spanText}</span>
            <input className="input100" type={inputType} name={inputName} placeholder={inputText} onChange={(e) => handleTextChange(e)} value={text}/>
            <span className="focus-input100"></span>
        </div>
    );
}
export default FormInputItem;
