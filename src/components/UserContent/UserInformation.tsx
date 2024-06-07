import { User } from "../../types";
import menu from "../../images/menu.svg";

interface Props {
  userInformation: User;
}

export const UserInformation: React.FC<Props> = ({ userInformation }) => {
  return (
    <div className="user">
      <div className="user__informaion">
        <div className="user__photo">
          <img src={userInformation.image} alt={userInformation.name} />
        </div>
        <div className="user__content">
          <div className="user__header">
            <div className="user__name">{userInformation.name}</div>
            <div className="user__email">{userInformation.email}</div>
          </div>
          <div className="user__permissions">
            {userInformation.permissions.map((permission: string) => (
              <div className="user__permission">{permission}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="user__menu">
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};
