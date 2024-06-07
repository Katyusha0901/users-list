import { createContext, ReactNode, useState } from "react";
import users from "./users.json";
import { User } from "./types";

interface ContextType {
  takeAllPermissions: () => string[];
}

export const PermissionsContext = createContext<ContextType>({
  takeAllPermissions: () => [],
});

interface Props {
  children: ReactNode;
}

export const PermissionsContextProvider: React.FC<Props> = ({ children }) => {
  const PermissionContext: ContextType = { takeAllPermissions };

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
    <PermissionsContext.Provider value={PermissionContext}>
      {children}
    </PermissionsContext.Provider>
  );
};
