import { useState } from "react";
import "../../styles/Header.css";
import { Search } from "./Search";

export function Header() {
  return (
    <div className="header">
      <div className="header__title">Команда</div>
      <div className="header__options">
        <Search />
      </div>
    </div>
  );
}
