import { FC, PropsWithChildren } from "react";
import s from "./styles.module.sass";

export const Badge: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.badge}>{children}</div>;
};
