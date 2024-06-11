import { createContext, ReactNode, useState } from "react";

interface ContextType {
  isClickedMenu: boolean;
  setIsClickedMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsClickedMenuContext = createContext<ContextType>({
  isClickedMenu: false,
  setIsClickedMenu: () => false,
});

interface Props {
  children: ReactNode;
}

export const IsClickedMenuContextProvider: React.FC<Props> = ({ children }) => {
  const [isClickedMenu, setIsClickedMenu] = useState<boolean>(false);
  const ContextValue: ContextType = { isClickedMenu, setIsClickedMenu };

  return (
    <IsClickedMenuContext.Provider value={ContextValue}>
      {children}
    </IsClickedMenuContext.Provider>
  );
};
