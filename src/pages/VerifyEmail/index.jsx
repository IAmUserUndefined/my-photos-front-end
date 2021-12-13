import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import VerifyEmailTitle from "../../components/VerifyEmailTitle/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const VerifyEmail = () => {

  const navigate = useNavigate();
  const { search } = useLocation();
  const { handleShowModal } = useModal();

  const handleLink = (link) => {
      navigate(link);
  };

  useEffect(() => {
    const handleVerifyEmail = async () => {
      await api
        .post(`/verify-email${search}`)
        .then(({ data }) => handleShowModal(data.response))
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
    };
    handleVerifyEmail();
    handleLink("/");
  });

  return <VerifyEmailTitle />;
};

export default VerifyEmail;