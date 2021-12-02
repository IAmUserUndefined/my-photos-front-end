import React from 'react';
import InputFormStyle from './styles';

const InputForm = ( { type, placeholder, name } ) => {
    return <InputFormStyle type={type} placeholder={placeholder} name={name} />;
}
 
export default InputForm;