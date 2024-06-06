import React from "react";
import { SideBar } from "./components/SideBar";
import { UsersContent } from "./components/UserContent/UsersContent";

export function App() {
  return (
    <div className="App">
      <SideBar />
      <UsersContent />
    </div>
  );
}
