import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.css";
import { PermissionsContextProvider } from "./PermissionsContext";
import { UsersContextProvider } from "./UsersContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PermissionsContextProvider>
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </PermissionsContextProvider>
  </React.StrictMode>
);
