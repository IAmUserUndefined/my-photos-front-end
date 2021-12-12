import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/global";

import { ModalProvider } from "./providers/ModalProvider"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);