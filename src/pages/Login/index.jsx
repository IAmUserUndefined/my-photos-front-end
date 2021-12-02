import React from 'react';
import { useNavigate } from "react-router-dom";

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import LinkForm from '../../components/LinkForm';
import Header from '../../components/Header';

const Login = () => {

    const navigate = useNavigate();

    const handleLink = (link) => {
        navigate(link);
    };
  
    return ( 
        <>
            <Header />

            <Form name="login">
                <InputForm type="email" name="email" placeholder="Email"/>
                <InputForm type="password" name="password" placeholder="Senha"/>
                <Button>Login</Button>
                <LinkForm onClick={() => handleLink("/register")}>Ainda não tem um cadastro?</LinkForm>
                <LinkForm onClick={() => handleLink("/forget-password")}>Esqueceu sua senha?</LinkForm>
            </Form>
        </>
     );
}
 
export default Login;