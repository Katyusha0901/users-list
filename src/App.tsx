import React from "react";
import users from "./users.json";
import { SideBar } from "./components/SideBar";

export function App() {
  console.log(users);
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}
