import { FC, PropsWithChildren } from "react";
import s from "./styles.module.sass";

export const PartnerItem: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.partnerItem}>{children}</div>;
};
