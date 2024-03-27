import React from "react";

type Allowed = string | number;

type BaseProps<Value> = {
  value: Value;
  onChange: (newValue: Value) => void;
  options: readonly Value[];
};

// mappers required only in certain cirumstances
// we could get fancier here and also not require if `Value` has `value`/`label` properties
type Props<Value> = Value extends Allowed
  ? BaseProps<Value>
  : Required<BaseProps<Value>>;

const isAllowed = (v: any): v is Allowed =>
  typeof v === "string" || typeof v === "number";

export default function Select<Value>({
  value,
  onChange,
  options,
}: Props<Value>) {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.target.selectedIndex]);
  };

  return (
    <select value={value as string} onChange={handleChange}>
      {options.map((item:any,index) => (
        <option value={item?.value} key={index}>
          {item?.label}
        </option>
      ))}
    </select>
  );
}