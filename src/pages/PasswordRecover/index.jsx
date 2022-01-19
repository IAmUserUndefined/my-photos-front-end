import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import Form from "../../styles/form";

import InputForm from "../../components/InputForm/index";
import Button from "../../components/Button";
import Header from "../../components/Header";
import LoadingGif from "../../components/LoadingGif/index";

import api from "../../services/api";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../../providers/ModalProvider";

const PasswordRecover = () => {
  const { handleShowModal } = useModal();
  const [formValues, setFormValues] = useState({});
  const [buttonChildren, setButtonChildren] = useState("Atualizar Senha");
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleLink = (link) => {
    navigate(link);
  };

  const handleRecoverPassword = async (e) => {
    e.preventDefault();

    const { password, passwordConfirm } = e.target;

    if (!password.value || !passwordConfirm.value)
      return handleShowModal("Preencha todos os campos");

    const { result, message } = isPasswordValid(password.value);

    if (!result) return handleShowModal(message);

    setButtonChildren(<LoadingGif />);

    await api
      .patch(`/user/password/password-recover${search}`, {
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      })
      .then(({ data }) => {
        setFormValues({});
        handleLink("/");
        handleShowModal(data.response);
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor, tente novamente mais tarde")
      );

    setButtonChildren("Atualizar Senha");
  };

  return (
    <>
      <Header />

      <main>
        <Form onSubmit={handleRecoverPassword}>
          <InputForm
            type="password"
            placeholder="Nova Senha"
            name="password"
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <InputForm
            type="password"
            placeholder="Confirmação de Nova Senha"
            name="passwordConfirm"
            formValues={formValues}
            setFormValues={setFormValues}
          />

          <Button type="submit">{buttonChildren}</Button>
        </Form>
      </main>
    </>
  );
};

export default PasswordRecover;
