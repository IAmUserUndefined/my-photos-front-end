import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from '../../providers/AuthProvider';
import { useModal } from '../../providers/ModalProvider';

import LoadingBigGif from "../LoadingBigGif/index";

const PrivateRoute = () => {

  const { loading, authenticated, expirySession, setExpirySession, handleLogout } = useAuth();
  const { handleShowModal } = useModal();

  if (loading) {
    return <LoadingBigGif />;
  }

  if(expirySession) {
    setExpirySession(false);
    handleLogout();
    return handleShowModal("Sessão Expirada");
  }

  if (!authenticated) {
    return <Navigate to="/" />
  }

  return <Outlet />
};

export default PrivateRoute;