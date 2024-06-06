import React from "react";
import { SideBar } from "./components/SideBar";
import { UsersContent } from "./components/UserContent/UsersContent";
import "./styles/App.css";

export function App() {
  return (
    <div className="app">
      <SideBar />
      <UsersContent />
    </div>
  );
}
