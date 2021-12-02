import React from 'react';
import { useNavigate } from "react-router-dom";

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import LinkForm from '../../components/LinkForm';
import Header from '../../components/Header';

const Register = () => {

    const navigate = useNavigate();

    const handleLink = (link) => {
        navigate(link);
    };
  
    return ( 
        <>
            <Header />

            <Form name="register">
                <InputForm type="email" name="email" placeholder="Email"/>
                <InputForm type="password" name="password" placeholder="Senha"/>
                <InputForm type="password" name="passwordConfirm" placeholder="Confirmação de Senha"/>
                <Button>Cadastrar</Button>
                <LinkForm onClick={() => handleLink("/")}>Já tem um cadastro?</LinkForm>
            </Form>
        </>
     );
}
 
export default Register;