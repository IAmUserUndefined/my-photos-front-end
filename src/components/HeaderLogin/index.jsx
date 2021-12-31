import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/index";

import { useAuth } from "../../providers/AuthProvider";

import {
  ContainerHeaderLogin,
  ContainerHeaderLoginButton,
  ContainerHeaderTitle,
} from "./styles";

const HeaderLogin = ({ link, children }) => {
  const navigate = useNavigate();

  const handleLink = (link) => {
      navigate(link);
  };

  const { handleLogout } = useAuth();

  return (
    <ContainerHeaderLogin>
      <ContainerHeaderTitle>
        <h1>My Photos</h1>
      </ContainerHeaderTitle>

      <ContainerHeaderLoginButton>
        <Button onClick={() => handleLink(link)}>{children}</Button>
        <Button onClick={() => handleLogout()}>Sair</Button>
      </ContainerHeaderLoginButton>
    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;