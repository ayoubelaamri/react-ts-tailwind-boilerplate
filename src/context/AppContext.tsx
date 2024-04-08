import { useState, useEffect, createContext, FC } from "react";
import data_from_json from "context/data/data.json";

export interface IAppContext {
  isSidebarOpen: boolean;
  toggleSidebar?: () => void;
  isLoading: boolean;
  setIsLoading?: (value: boolean) => void;
  data: any;
}

const AppContext = createContext<Partial<IAppContext>>({});
export default AppContext;

export const AppProvider = ({ children }: any) => {
  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(true);
  const toggleSidebar = () => setIsSidbarOpen(!isSidebarOpen);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [data, setData] = useState(data_from_json);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isLoading,
        setIsLoading,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
