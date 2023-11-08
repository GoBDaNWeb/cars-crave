import { FC, PropsWithChildren } from "react";

import s from "./styles.module.sass";
import { SortIcon } from "..";

export const SortBtn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className={s.sort}>
      <span>
        <SortIcon />
      </span>
      {children}
    </button>
  );
};
