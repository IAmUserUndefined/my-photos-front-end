import React from 'react';

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import Header from '../../components/Header';

const Login = () => {
  
    return ( 
        <>
            <Header />

            <Form name="login">
                <InputForm type="password" name="password" placeholder="Senha"/>
                <InputForm type="password" name="passwordConfirm" placeholder="Confirmação de Senha"/>
                <Button>Atualizar Senha</Button>
            </Form>
        </>
     );
}
 
export default Login;