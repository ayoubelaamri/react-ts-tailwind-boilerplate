import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);

  return theme === "light" ? (
    <button
      onClick={() => setTheme?.("dark")}
      type="button"
      className="w-full h-full p-2 md:py-2 md:px-3 group flex items-center justify-center text-gray-700 hover:text-primary font-medium dark:text-gray-300 dark:hover:text-white"
    >
      <svg
        className="flex-shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  ) : (
    <button
      onClick={() => setTheme?.("light")}
      type="button"
      className="w-full h-full p-2 md:py-2 md:px-3 group flex items-center justify-center text-gray-700 hover:text-primary font-medium dark:text-gray-300 dark:hover:text-white"
    >
      <svg
        className="flex-shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 8a2 2 0 1 0 4 4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    </button>
  );
}
