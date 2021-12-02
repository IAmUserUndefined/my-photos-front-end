import React from "react";
import { BrowserRouter } from "react-router-dom";

import ContainerApp from "./styles/app";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ContainerApp>
        <AppRoutes />
      </ContainerApp>
    </BrowserRouter>
  );
}

export default App;