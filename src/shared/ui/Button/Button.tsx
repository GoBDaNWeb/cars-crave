import { FC, ReactNode } from "react";
import s from "./styles.module.sass";
interface IButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "clear" | "dotted" | "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  variant = "clear",
  onClick,
}) => {
  const buttonClass = `${s.button} ${className ? className : ""} ${s[variant]}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};
