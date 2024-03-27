import { ChangeEvent, FC } from "react";

interface TextAreaProps {
  label?: string;
  value?: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaProps> = ({
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
      <textarea
        className="rounded-lg shadow-lg p-3"
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        cols={30}
        rows={5}
      ></textarea>
    </div>
  );
};

export default TextArea;
