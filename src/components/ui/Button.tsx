import LoadingDots from "components/atoms/animations/LoadingDots";
import React from "react";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  isAction?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  className = "",
  size = "md",
  isAction = false,
  isLoading = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={`shadow-lg rounded-lg font-semibold ${
        isAction && "bg-gradient-to-br from-primary1 to-primary2 text-neutral2"
      } ${size === "sm" && "px-3 py-2 text-sm"} ${
        size === "md" && "px-5 py-2 text-md"
      } ${size === "lg" && "px-6 py-3 text-lg"} ${className}`}
      onClick={onClick}
    >
      {!isLoading ? (
        <div className="flex items-center gap-2">{children}</div>
      ) : (
        <LoadingDots />
      )}
    </button>
  );
};

export default Button;
