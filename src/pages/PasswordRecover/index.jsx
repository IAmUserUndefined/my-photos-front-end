import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import Header from '../../components/Header';
import LoadingGif from "../../components/LoadingGif/index";

import api from "../../services/api";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../../providers/ModalProvider";

const PasswordRecover = () => {
  
    const { handleShowModal } = useModal();
    const [buttonChildren, setButtonChildren] = useState("Atualizar Senha");
    const navigate = useNavigate();
    const { search } = useLocation();
  
    const handleLink = (link) => {
        navigate(link);
    };
  
    const handleRecoverPassword = async () => {
      setButtonChildren(<LoadingGif />);
  
      const form = document.forms.recoverPassword;
  
      let { password, passwordConfirm } = form;
  
      if (!password.value || !passwordConfirm.value) {
        return handleShowModal("Preencha todos os campos");
      }
  
      const { result, message } = isPasswordValid(password.value);
  
      if (!result) {
        password.value = "";
        passwordConfirm.value = "";
        return handleShowModal(message);
      }
  
      await api
        .patch(`/user/password/password-recover${search}`, {
          password: password.value,
          passwordConfirm: passwordConfirm.value,
        })
        .then(({ data }) => {
          handleShowModal(data.response);
        })
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
  
      password.value = "";
      passwordConfirm.value = "";
  
      setButtonChildren("Atualizar Senha");
      handleLink("/");
    };

    return ( 
        <>
            <Header />

            <Form name="recoverPassword">
                <InputForm type="password" name="password" placeholder="Senha"/>
                <InputForm type="password" name="passwordConfirm" placeholder="Confirmação de Senha"/>
                <Button onClick={() => handleRecoverPassword()}>{buttonChildren}</Button>
            </Form>
        </>
     );
}
 
export default PasswordRecover;