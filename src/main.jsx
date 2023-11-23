import App from "./App.jsx";
import { store } from "./Redux/Store/store.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://back-pi-dogs-kappa.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
