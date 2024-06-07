import { User } from "../../types";
import menu from "../../images/menu.svg";
import "../../styles/UserInformation.css";

interface Props {
  userInformation: User;
}

export const UserInformation: React.FC<Props> = ({ userInformation }) => {
  return (
    <div className="user">
      <div className="user__information">
        <img
          className="user__photo-image"
          src={userInformation.image}
          alt={userInformation.name}
        />
        <div className="user__content">
          <div className="user__header">
            <div className="user__name">{userInformation.name}</div>
            <div className="user__email">{userInformation.email}</div>
          </div>
          <div className="user__permissions">
            {userInformation.permissions.map((permission: string) =>
              permission === "Администратор" ? (
                <div className="user__permission user__permission_blue">
                  {permission}
                </div>
              ) : (
                <div className="user__permission"> {permission}</div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="user__menu">
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};
