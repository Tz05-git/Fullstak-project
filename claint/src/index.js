import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import   store  from "./Components/app/store"; 
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"; 
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
