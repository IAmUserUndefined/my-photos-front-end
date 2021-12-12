import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header/index";
import Button from "../Button/index";

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

  return (
    <ContainerHeaderLogin>
      <ContainerHeaderTitle>
        <Header />
      </ContainerHeaderTitle>

      <ContainerHeaderLoginButton>
        <Button onClick={() => handleLink(link)}>{children}</Button>
        <Button onClick={() => handleLink("/")}>Sair</Button>
      </ContainerHeaderLoginButton>
    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;