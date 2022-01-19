import React, { useState } from 'react';

import Form from '../../styles/form';

import InputForm from "../../components/InputForm/index"
import Button from '../../components/Button';
import LinkForm from '../../components/LinkForm';
import Header from '../../components/Header';
import LoadingGif from '../../components/LoadingGif/index';

import api from "../../services/api";

import isEmailValid from "../../utils/isEmailValid";

import { useModal } from "../../providers/ModalProvider";

const ForgetPassword = () => {

  const { handleShowModal } = useModal();
    const [buttonChildren, setButtonChildren] = useState("Enviar Email");
    const [formValues, setFormValues] = useState({});
  
    const handleForgetPassword = async (e) => {
      
      e.preventDefault();
    
      const { email } = e.target;
  
      if (!email.value) {
        return handleShowModal("Preencha o campo de email");
      }
  
      if (!isEmailValid(email.value)) {
        return handleShowModal("Coloque um email válido");
      }

      setButtonChildren(<LoadingGif />);
      
      await api
      .post("/user/password/send-token-password-recover", {
          email: email.value,
        })
        .then(({ data }) => {
          setFormValues({});
          handleShowModal(data.response);
        })
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
  
      setButtonChildren("Enviar Email");
    };
  
    return ( 
        <>
            <Header />

            <main>
              <Form onSubmit={handleForgetPassword}>
                <InputForm type="email" placeholder="Email" name="email" formValues={formValues} setFormValues={setFormValues} />

                <Button type="submit">{buttonChildren}</Button>

                <LinkForm link="/">
                  Já tem um cadastro?
                </LinkForm>

                <LinkForm link="/register">
                  Ainda não é cadastrado?
                </LinkForm>
            </Form>
            </main>
        </>
     );
}
 
export default ForgetPassword;