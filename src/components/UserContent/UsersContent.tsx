import "../../styles/UsersContent.css";
import { Header } from "./Header";
import { UserInformation } from "./UserInformation";
import { useContext } from "react";
import { User } from "../../types";
import { UsersContext } from "../../UsersContext";

interface Props {}

export const UsersContent: React.FC<Props> = () => {
  const { users } = useContext(UsersContext);

  return (
    <div className="users-content">
      <div className="users-content__content">
        <Header />
        {users.map((user: User) => (
          <UserInformation userInformation={user} />
        ))}
      </div>
    </div>
  );
};
