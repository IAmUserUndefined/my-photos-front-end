import React, { useState } from 'react';

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import LinkForm from '../../components/LinkForm';
import Header from '../../components/Header';

import api from "../../services/api";

import isEmailValid from "../../utils/isEmailValid";
import isPasswordValid from "../../utils/isPasswordValid";
import LoadingGif from "../../components/LoadingGif/index";

import { useModal } from "../../providers/ModalProvider";

const Register = () => {

    const { handleShowModal } = useModal();
    const [buttonChildren, setButtonChildren] = useState("Cadastrar");

    const handleRegister = async () => {
        setButtonChildren(<LoadingGif />);
    
        const form = document.forms.register;
    
        let { email, password, passwordConfirm } = form;
    
        if (!email.value || !password.value || !passwordConfirm.value) {
          setButtonChildren("Cadastrar");
          return handleShowModal("Preencha todos os campos");
        }
    
        if (!isEmailValid(email.value)) {
          setButtonChildren("Cadastrar");
          email.value = "";
          return handleShowModal("Coloque um email válido");
        }
    
        const { result, message } = isPasswordValid(password.value);
    
        if (!result) {
          setButtonChildren("Cadastrar");
          return handleShowModal(message);
        }
    
        if (password.value !== passwordConfirm.value) {
          setButtonChildren("Cadastrar");
          password.value = "";
          passwordConfirm.value = "";
          return handleShowModal("As senhas não coincidem");
        }
    
        await api
          .post("/user/create", {
            email: email.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value,
          })
          .then(({ data }) => {
            email.value = "";
            password.value = "";
            passwordConfirm.value = "";
            handleShowModal(data.response);
          })
          .catch(({ response }) =>
            response
              ? handleShowModal(response.data.response)
              : handleShowModal("Erro no Servidor")
          );
    
        email.value = "";
        password.value = "";
        passwordConfirm.value = "";
    
        setButtonChildren("Cadastrar");
      };
  
    return ( 
        <>
            <Header />

            <Form name="register">
                <InputForm type="email" name="email" placeholder="Email"/>
                <InputForm type="password" name="password" placeholder="Senha"/>
                <InputForm type="password" name="passwordConfirm" placeholder="Confirmação de Senha"/>
                <Button onClick={() => handleRegister()}>{buttonChildren}</Button>
                <LinkForm link="/">Já tem um cadastro?</LinkForm>
            </Form>
        </>
     );
}
 
export default Register;