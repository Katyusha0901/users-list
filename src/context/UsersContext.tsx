import { createContext, ReactNode, useState } from "react";
import usersInformation from "../users.json";
import { User } from "../types";

interface ContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UsersContext = createContext<ContextType>({
  users: usersInformation,
  setUsers: () => usersInformation,
});

interface Props {
  children: ReactNode;
}

export const UsersContextProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(usersInformation);
  const ContextValue: ContextType = { users, setUsers };

  return (
    <UsersContext.Provider value={ContextValue}>
      {children}
    </UsersContext.Provider>
  );
};
