import "../../styles/UsersContent.css";
import usersInformation from "../../users.json";
import { Header } from "./Header";
import { useState } from "react";
import { User } from "../../types";

interface Props {}

export const UsersContent: React.FC<Props> = () => {
  console.log(usersInformation);
  const [users, setUsers] = useState<User[]>(usersInformation);

  return (
    <div className="users-content">
      <div className="users-content__content">
        <Header />
      </div>
    </div>
  );
};
