import "../../styles/UsersContent.css";
import users from "../../users.json";
import { Header } from "./Header";
export function UsersContent() {
  console.log(users);

  return (
    <div className="users-content">
      <Header />
    </div>
  );
}
