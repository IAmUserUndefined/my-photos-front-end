import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header/index";
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
        <Header />
      </ContainerHeaderTitle>

      <ContainerHeaderLoginButton>
        <Button onClick={() => handleLink(link)}>{children}</Button>
        <Button onClick={() => handleLogout()}>Sair</Button>
      </ContainerHeaderLoginButton>
    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;