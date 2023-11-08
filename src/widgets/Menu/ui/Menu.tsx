import { observer } from "mobx-react-lite";

import { useMenuStore } from "../model";

import s from "./styles.module.sass";

import { Button, CloseBtnIcon } from "shared/ui";

export const Menu = observer(() => {
  const menu = useMenuStore();

  const menuWrapperClass = `${s.menuWrapper} ${
    menu.menuIsOpen ? s.active : ""
  }`;

  return (
    <div className={menuWrapperClass}>
      <Button onClick={() => menu.handleOpenMenu()} className={s.closeBtn}>
        <CloseBtnIcon />
      </Button>
      <div className={s.menu}></div>
    </div>
  );
});
