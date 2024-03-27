import React from "react";

type SelectProps = {
  value?: string | number | undefined;
  onChange: (newValue: string | number | undefined) => void;
  options: {
    key: string;
    value: string | number | undefined;
  }[];
  size?: "sm" | "md" | "lg";
};

export default function Select({
  value,
  onChange,
  options,
  size = "md",
}: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.target.selectedIndex].value);
  };

  return (
    <select
      className={`rounded-lg shadow-lg font-semibold ${
        size === "sm" && "text-sm px-3 py-1"
      } ${size === "md" && "text-md px-3 py-2"} ${
        size === "lg" && "text-lg px-5 py-2"
      }`}
      value={value}
      onChange={handleChange}
    >
      {options.length &&
        options.map((item: any, index) => (
          <option value={item?.value} key={index}>
            {item?.key}
          </option>
        ))}
    </select>
  );
}
