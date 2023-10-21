export interface IAppContext {
  isSidebarOpen: boolean;
  toggleSidebar?: () => void;
  isLoading: boolean;
  setIsLoading?: (value) => void;
}
