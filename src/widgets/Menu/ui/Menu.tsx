import { observer } from "mobx-react-lite";

import { useMenuStore } from "../model";

import s from "./styles.module.sass";

import {
  Button,
  ClockIcon,
  CloseBtnIcon,
  PinIcon,
  SearchIcon,
  TelegramIcon,
  WhatsappIcon,
} from "shared/ui";
import { Links } from "../config";
import Link from "next/link";

export const Menu = observer(() => {
  const menu = useMenuStore();

  const menuWrapperClass = `${s.menuWrapper} ${
    menu.menuIsOpen ? s.active : ""
  }`;

  return (
    <div className={menuWrapperClass} onClick={() => menu.handleOpenMenu()}>
      <Button onClick={() => menu.handleOpenMenu()} className={s.closeBtn}>
        <CloseBtnIcon />
      </Button>
      <div className={s.menu} onClick={(e) => e.stopPropagation()}>
        <div className={s.top}>
          <Button className={s.searchBtn}>
            <SearchIcon />
            <span>поиск по сайту</span>
          </Button>
        </div>
        <div className={s.navigation}>
          {Links.map((link) => (
            <Link key={link.url} href={link.url} className={s.link}>
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className={s.info}>
          <div className={s.mainInfo}>
            <div className={s.phoneWrapper}>
              <a href="tel:+7 (495) 647-6-647" className={s.phone}>
                +7 (495) 647-6-647
              </a>
              <Button className={s.orderBtn}>заказать звонок</Button>
            </div>
            <div className={s.social}>
              <a href="#" className={s.telegramIcon}>
                <TelegramIcon />
              </a>
              <a href="#" className={s.whatsappIcon}>
                <WhatsappIcon />
              </a>
            </div>
          </div>

          <div className={s.secondInfo}>
            <div className={s.address}>
              <PinIcon />
              <span>Москва, ул. Ленинградское шоссе, 74Б</span>
            </div>
            <div className={s.clock}>
              <ClockIcon />
              <span>09:00 - 21:00</span>
            </div>
          </div>
        </div>
        <Button variant="primary" className={s.estimationBtn}>
          оценить свое авто
        </Button>
      </div>
    </div>
  );
});
