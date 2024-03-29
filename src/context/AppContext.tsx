import React, { useState, useEffect, createContext, FC } from "react";
import { IAppContext } from "../@types/IAppContext";

const AppContext = createContext<Partial<IAppContext>>({});
export default AppContext;

export const AppProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(true);
  const toggleSidebar = () => setIsSidbarOpen(!isSidebarOpen);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
