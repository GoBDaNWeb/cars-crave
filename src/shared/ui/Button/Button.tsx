import { FC, ReactNode } from "react";
import s from "./styles.module.sass";
interface IButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "clear" | "dotted" | "primary" | "outline";
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  variant = "clear",
}) => {
  const buttonClass = `${s.button} ${className ? className : ""} ${s[variant]}`;

  return <button className={buttonClass}>{children}</button>;
};
