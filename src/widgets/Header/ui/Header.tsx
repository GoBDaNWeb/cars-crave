import Link from "next/link";
import s from "./styles.module.sass";

import {
  LogoIcon,
  Button,
  SearchIcon,
  PinIcon,
  ClockIcon,
  TelegramIcon,
  WhatsappIcon,
} from "shared/ui";
import { Links } from "../config";

export const Header = () => {
  return (
    <header className={`${s.header} sm-container`}>
      <div className={s.logo}>
        <LogoIcon />
        <p>
          Электромобили <br /> премиум класса
        </p>
      </div>
      <div className={s.content}>
        <div className={s.top}>
          <div className={s.search}>
            <Button className={s.searchBtn}>
              <SearchIcon />
              <span>поиск по сайту</span>
            </Button>
          </div>
          <div className={s.info}>
            <div className={s.address}>
              <PinIcon />
              <span>Москва, ул. Ленинградское шоссе, 74Б</span>
            </div>
            <div className={s.clock}>
              <ClockIcon />
              <span>09:00 - 21:00</span>
            </div>
            <div className={s.social}>
              <a href="#">
                <TelegramIcon />
              </a>
              <a href="#">
                <WhatsappIcon />
              </a>
            </div>
            <a href="tel:+7 (495) 647-6-647" className={s.phone}>
              +7 (495) 647-6-647
            </a>
            <Button className={s.orderBtn}>
              заказать <br /> звонок
            </Button>
          </div>
        </div>
        <nav className={s.navigation}>
          {Links.map((link) => (
            <Link key={link.url} href={link.url} className={s.link}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
