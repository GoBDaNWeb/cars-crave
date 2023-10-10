import { FC } from "react";
import s from "./styles.module.sass";

interface IInputPorops {
  placeholder: string;
  className?: string;
}

export const Input: FC<IInputPorops> = ({ placeholder, className }) => {
  const inputClass = `${s.input} ${className ? className : ""}`;
  return <input className={inputClass} type="text" placeholder={placeholder} />;
};
