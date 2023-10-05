import { createContext, useState } from 'react';

interface ISidebarShowContext {
  sidebarShow: boolean;
  sidebarToggle: () => void;
}

export const SidebarShowContext = createContext<ISidebarShowContext>({ sidebarShow: false, sidebarToggle: () => {} });

export const SidebarShowContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarShow, setSidebarShow] = useState<boolean>(false);
  const sidebarToggle = () => setSidebarShow((prev) => !prev);

  return <SidebarShowContext.Provider value={{ sidebarShow, sidebarToggle }}>{children}</SidebarShowContext.Provider>;
};
