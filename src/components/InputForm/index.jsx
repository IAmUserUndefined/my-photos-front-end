import React from 'react';

import InputFormStyle from './styles';

const InputForm = ( { type, placeholder, name } ) => {
    return <div>
        <InputFormStyle type={type} placeholder={placeholder} name={name} />
    </div>;
}
 
export default InputForm;