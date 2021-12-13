import React from "react";
import { BrowserRouter } from "react-router-dom";

import ContainerApp from "./styles/app";
import { AppRoutes, ModalRoute } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ContainerApp>
        <ModalRoute />
        <AppRoutes />
      </ContainerApp>
    </BrowserRouter>
  );
}

export default App;