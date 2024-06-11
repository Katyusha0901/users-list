import { useState } from "react";
import "../../styles/Header.css";
import { Search } from "./Search";
import { SendInvitation } from "./SendInvitation";
import { ShowSendedMessage } from "./ShowSendedMessage";
import menuBurger from "../../images/menuBurger.svg";

interface Props {}

export const Header: React.FC<Props> = () => {
  const [addUser, setAddUser] = useState<boolean>(false);
  const [sendedInvitation, setSendedInvitation] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("Email");

  return addUser ? (
    <>
      <div className="header">
        <img className="header__menu" src={menuBurger} alt="menu"/>
        <div className="header__title">Команда</div>
        <div className="header__options">
          <Search />
          <div className="header__add-button" onClick={() => setAddUser(true)}>
            Добавить пользователя
          </div>
        </div>
      </div>
      <SendInvitation
        setAddUserFunciton={setAddUser}
        emailData={email}
        setEmailFunction={setEmail}
        setSendedInvitationFunction={setSendedInvitation}
      />
    </>
  ) : sendedInvitation ? (
    <>
      <div className="header">
        <img className="header__menu" src={menuBurger} alt="menu" />

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
      <div className="header__top">
        <img className="header__menu" src={menuBurger} alt="menu" />

        <div className="header__title">Команда</div>
      </div>

      <div className="header__options">
        <Search />
        <div className="header__add-button" onClick={() => setAddUser(true)}>
          Добавить пользователя
        </div>
      </div>
    </div>
  );
};
