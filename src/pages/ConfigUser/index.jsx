import React from "react";

import HeaderLogin from "../../components/Header/index";
import Button from "../../components/Button/index";
import InputForm from "../../components/InputForm/index";

import Form from "../../styles/form";

const ConfigUser = () => {

  return (
    <>
      <HeaderLogin link="/tasks" children="Tarefas" />

      <br />

      <Form name="updateEmail">
        <h2>Atualizar Email</h2>

        <InputForm type="email" placeholder="Email" name="email" />

        <div>
          <Button>Atualizar Email</Button>
        </div>
      </Form>

        <br />

      <Form name="updatePassword">
        <h2>Atualizar Senha</h2>

        <InputForm
          type="password"
          placeholder="Senha Atual"
          name="passwordCurrent"
        />
        <InputForm
          type="password"
          placeholder="Nova Senha"
          name="newPassword"
        />
        <InputForm
          type="password"
          placeholder="Confirmação de Nova Senha"
          name="newPasswordConfirm"
        />

        <div>
          <Button>Atualizar senha</Button>
        </div>
      </Form>

      <br />


      <Form name="deleteUser">
        <h2>Excluir Usuário</h2>

        <InputForm 
          type="password" 
          placeholder="Senha" 
          name="password" 
        />
        <InputForm
          type="password"
          placeholder="Confirmação de Senha"
          name="passwordConfirm"
        />

        <div>
          <Button>Excluir usuário</Button>
        </div>
      </Form>
  </>
  )
};

export default ConfigUser;