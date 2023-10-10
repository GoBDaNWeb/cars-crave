import { FC } from "react";
import Select from "react-select";
type Option = {
  label: string;
  value: string;
};
interface ISelectorPorps {
  placeholder: string;
  options: Option[];
  className?: string;
  value?: any;
}

export const Selector: FC<ISelectorPorps> = ({
  placeholder,
  options,
  className,
  value,
}) => {
  const selectorClass = `select ${className ? className : ""}`;
  return (
    <Select
      isClearable={false}
      placeholder={placeholder}
      options={options}
      className={selectorClass}
      classNamePrefix="select"
      value={value}
    />
  );
};
