import React from 'react';

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import LinkForm from '../../components/LinkForm';
import Header from '../../components/Header';

import { useAuth } from "../../providers/AuthProvider";

const Login = () => {

    const { handleLogin, buttonChildren } = useAuth();
  
    return ( 
        <>
            <Header />

            <Form name="login">
                <InputForm type="email" name="email" placeholder="Email"/>
                <InputForm type="password" name="password" placeholder="Senha"/>
                <Button onClick={() => handleLogin()}>{buttonChildren}</Button>
                <LinkForm link="/register">Ainda não tem um cadastro?</LinkForm>
                <LinkForm link="/forget-password">Esqueceu sua senha?</LinkForm>
            </Form>
        </>
     );
}
 
export default Login;