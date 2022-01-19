import React, { useState } from "react";

import Form from "../../styles/form";

import InputForm from "../../components/InputForm/index";
import Button from "../../components/Button";
import LinkForm from "../../components/LinkForm";
import Header from "../../components/Header";

import api from "../../services/api";

import isEmailValid from "../../utils/isEmailValid";
import isPasswordValid from "../../utils/isPasswordValid";
import LoadingGif from "../../components/LoadingGif/index";

import { useModal } from "../../providers/ModalProvider";

const Register = () => {
  const { handleShowModal } = useModal();
  const [formValues, setFormValues] = useState({});
  const [buttonChildren, setButtonChildren] = useState("Cadastrar");

  const handleRegister = async (e) => {
    e.preventDefault();

    const { email, password, passwordConfirm } = e.target;

    if (!email.value || !password.value || !passwordConfirm.value)
      return handleShowModal("Preencha todos os campos");

    if (!isEmailValid(email.value))
      return handleShowModal("Coloque um email válido");

    const { result, message } = isPasswordValid(password.value);

    if (!result) return handleShowModal(message);

    if (password.value !== passwordConfirm.value)
      return handleShowModal("As senhas não coincidem");

    setButtonChildren(<LoadingGif />);

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
          : handleShowModal("Erro no Servidor, tente novamente mais tarde")
      );

    setButtonChildren("Cadastrar");
  };

  return (
    <>
      <Header />

      <main>
        <Form onSubmit={handleRegister}>
          <InputForm
            type="email"
            placeholder="Email"
            name="email"
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <InputForm
            type="password"
            placeholder="Senha"
            name="password"
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <InputForm
            type="password"
            placeholder="Confirmação de Senha"
            name="passwordConfirm"
            formValues={formValues}
            setFormValues={setFormValues}
          />

          <Button type="submit">{buttonChildren}</Button>

          <LinkForm link="/">Já tem um cadastro?</LinkForm>

          <LinkForm link="/forget-password">Esqueceu sua senha?</LinkForm>
        </Form>
      </main>
    </>
  );
};

export default Register;
