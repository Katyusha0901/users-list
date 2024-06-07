import { createContext, ReactNode, useState } from "react";

interface ContextType {}

export const PermissionsContext = createContext<ContextType>({});

interface Props {
  children: ReactNode;
}

export const PermissionsContextProvider: React.FC<Props> = ({ children }) => {
  const PermissionContext: ContextType = {};
  return (
    <PermissionsContext.Provider value={PermissionContext}>
      {children}
    </PermissionsContext.Provider>
  );
};
