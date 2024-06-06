import "../../styles/UsersContent.css";
import users from "../../users.json";
import { Header } from "./Header";
export function UsersContent() {
  console.log(users);

  return (
    <div className="users-content">
      <div className="users-content__content">
        <Header />
      </div>
    </div>
  );
}
