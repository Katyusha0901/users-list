import { useState } from "react";
import "../../styles/Header.css";
import { Search } from "./Search";
import { SendInvitation } from "./SendInvitation";

export function Header() {
  const [addUser, setAddUser] = useState<boolean>(true);
  const [sendedInvitation, setSendedInvitation] = useState<boolean>(false);
  const [closedDispatchSend, setClosedDispatchSend] = useState<boolean>(false);

  return addUser ? (
    <div className="header">
      <div className="header__title">Команда</div>
      <div className="header__options">
        <Search />
        <div className="header__add-button" onClick={() => setAddUser(true)}>
          Добавить пользователя
        </div>
      </div>
      <SendInvitation />
    </div>
  ) : (
    <div className="header">
      <div className="header__title">Команда</div>
      <div className="header__options">
        <Search />
        <div className="header__add-button" onClick={() => setAddUser(true)}>
          Добавить пользователя
        </div>
      </div>
    </div>
  );
}
