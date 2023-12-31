import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  // document.getElementById("root"),
);