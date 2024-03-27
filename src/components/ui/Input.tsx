import { ChangeEvent, FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value?: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error = false,
  disabled = false,
  size = "md",
  onChange,
}) => {
  return (
    <div className="flex items-center gap-3">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`rounded-lg shadow-lg ${
          size === "sm" && "text-sm px-3 py-1"
        } ${size === "md" && "text-md px-3 py-2"} ${size === "lg" && "text-lg px-5 py-2"}`}
        type={type}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="">Input filed can't be empty!</p>}
    </div>
  );
};

export default Input;
