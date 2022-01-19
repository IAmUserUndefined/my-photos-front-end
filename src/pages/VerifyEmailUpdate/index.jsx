import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

import VerifyEmailTitle from "../../components/VerifyEmailTitle/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const VerifyEmailUpdate = ({ location }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { handleShowModal } = useModal();

  useEffect(() => {
    const handleVerifyEmailUpdate = async () => {
      await api
        .patch(`/update-email${search}`)
        .then(({ data }) => handleShowModal(data.response))
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor, tente novamente mais tarde")
        );
    };

    handleVerifyEmailUpdate();
    navigate("/config-user");
  });
  return <VerifyEmailTitle />;
};

export default VerifyEmailUpdate;