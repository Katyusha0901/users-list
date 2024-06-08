import { useState } from "react";
import "../../styles/Header.css";
import { Search } from "./Search";
import { SendInvitation } from "./SendInvitation";
import { ShowSendedMessage } from "./ShowSendedMessage";

interface Props {}

export const Header: React.FC<Props> = () => {
  const [addUser, setAddUser] = useState<boolean>(false);
  const [sendedInvitation, setSendedInvitation] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("Email");

  return addUser ? (
    <div>
      <div className="header">
        <div className="header__title">Команда</div>
        <div className="header__options">
          <Search />
          <div className="header__add-button" onClick={() => setAddUser(true)}>
            Добавить пользователя
          </div>
        </div>
        <SendInvitation
          setAddUserFunciton={setAddUser}
          emailData={email}
          setEmailFunction={setEmail}
          setSendedInvitationFunction={setSendedInvitation}
        />
      </div>
    </div>
  ) : sendedInvitation ? (
    <>
      <div className="header">
        <div className="header__title">Команда</div>
        <div className="header__options">
          <Search />
          <div className="header__add-button" onClick={() => setAddUser(true)}>
            Добавить пользователя
          </div>
        </div>
      </div>
      <ShowSendedMessage
        emailData={email}
        setSendedInvitationFunction={setSendedInvitation}
      />
    </>
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
