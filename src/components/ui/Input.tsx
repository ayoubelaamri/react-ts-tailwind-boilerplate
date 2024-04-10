import { ChangeEvent, FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  value?: string | number;
  name: string;
  placeholder: string;
  disabled?: boolean;
  autoComplete?: string;
  error?: boolean;
  size?: "sm" | "md" | "lg";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const Input: FC<InputProps> = ({
  type,
  value,
  name,
  placeholder,
  disabled = false,
  autoComplete,
  error = false,
  size = "md",
  onChange,
  className = "",
}) => {
  return (
    <input
      className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg ${
        size === "sm" && "text-sm px-3 py-1"
      } ${size === "md" && "text-md px-3 py-2"} ${
        size === "lg" && "text-lg px-5 py-2"
      } ${className}`}
      type={type}
      id={name}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
