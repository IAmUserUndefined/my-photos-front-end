import React from "react";

import Form from "../../styles/form";

import InputForm from "../../components/InputForm/index";
import Button from "../../components/Button";
import LinkForm from "../../components/LinkForm";
import Header from "../../components/Header";

import { useAuth } from "../../providers/AuthProvider";

const Login = () => {
  const { handleLogin, buttonChildren, formValues, setFormValues } = useAuth();

  return (
    <>
      <Header />

      <main>
        <Form onSubmit={handleLogin}>
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

          <Button type="submit">{buttonChildren}</Button>

          <LinkForm link="/register">Ainda não tem um cadastro?</LinkForm>

          <LinkForm link="/forget-password">Esqueceu sua senha?</LinkForm>
        </Form>
      </main>
    </>
  );
};

export default Login;
