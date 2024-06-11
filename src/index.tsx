import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.css";
import { PermissionsContextProvider } from "./context/PermissionsContext";
import { UsersContextProvider } from "./context/UsersContext";
import { IsClickedMenuContextProvider } from "./context/IsClickedMenuContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PermissionsContextProvider>
      <UsersContextProvider>
        <IsClickedMenuContextProvider>
          <App />
        </IsClickedMenuContextProvider>
      </UsersContextProvider>
    </PermissionsContextProvider>
  </React.StrictMode>
);
