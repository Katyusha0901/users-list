import "../../styles/UsersContent.css";
import usersInformation from "../../users.json";
import { Header } from "./Header";
import { useState } from "react";
import { User } from "../../types";

export function UsersContent() {
  console.log(usersInformation);
  const [users, setUsers] = useState<User[]>(usersInformation);
  function takeAllPermissions() {
    const permissionsArray: string[] = [];
    users.forEach((user: User) => {
      user.permissions.forEach((permission: string) => {
        if (!permissionsArray.includes(permission)) {
          permissionsArray.push(permission);
        }
      });
    });
    return permissionsArray;
  }
  return (
    <div className="users-content">
      <div className="users-content__content">
        <Header />
      </div>
    </div>
  );
}
