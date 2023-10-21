import React, { useState, useEffect, createContext, FC } from "react";
import data from "./data.json";
import { IAppContext } from "../@types/IAppContext";
import { useLocation } from "react-router-dom";

const AppContext = createContext<Partial<IAppContext>>({});
export default AppContext;

export const AppProvider = ({ children }: any) => {
  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
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
