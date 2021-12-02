import React from 'react';
import { useNavigate } from "react-router-dom";

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import LinkForm from '../../components/LinkForm';
import Header from '../../components/Header';

const ForgetPassword = () => {

    const navigate = useNavigate();

    const handleLink = (link) => {
        navigate(link);
    };
  
    return ( 
        <>
            <Header />

            <Form name="forgetPassword">
                <InputForm type="email" name="email" placeholder="Email"/>
                <Button>Enviar Email de Recuperação</Button>
                <LinkForm onClick={() => handleLink("/")}>Ainda não tem um cadastro?</LinkForm>
            </Form>
        </>
     );
}
 
export default ForgetPassword;