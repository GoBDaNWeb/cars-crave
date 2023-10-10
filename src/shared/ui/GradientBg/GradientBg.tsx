import { FC } from "react";
import s from "./styles.module.sass";

interface IGradientBgProps {
  className?: string;
}

export const GradientBg: FC<IGradientBgProps> = ({ className }) => {
  return <div className={`${s.bg} ${className ? className : ""}`} />;
};
