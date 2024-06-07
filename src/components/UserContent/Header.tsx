import { useState } from "react";
import "../../styles/Header.css";
import { Search } from "./Search";
import { SendInvitation } from "./SendInvitation";
import { ShowSendedMessage } from "./ShowSendedMessage";

interface Props {}

export const Header: React.FC<Props> = () => {
  const [addUser, setAddUser] = useState<boolean>(true);
  const [sendedInvitation, setSendedInvitation] = useState<boolean>(false);
  const [closedDispatchSend, setClosedDispatchSend] = useState<boolean>(false);

  return addUser ? (
    sendedInvitation ? (
      <div className="header">
        <div className="header__title">Команда</div>
        <div className="header__options">
          <Search />
          <div className="header__add-button" onClick={() => setAddUser(true)}>
            Добавить пользователя
          </div>
        </div>
        <ShowSendedMessage />
      </div>
    ) : (
      <div>
        <div className="header">
          <div className="header__title">Команда</div>
          <div className="header__options">
            <Search />
            <div
              className="header__add-button"
              onClick={() => setAddUser(true)}
            >
              Добавить пользователя
            </div>
          </div>
          <SendInvitation setAddUserFunciton={setAddUser} />
        </div>
      </div>
    )
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
};
