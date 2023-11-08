import { useRouter } from "next/router";
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
  BurgerIcon,
} from "shared/ui";
import { Links } from "../config";
import { useMenuStore } from "widgets/Menu";
import { observer } from "mobx-react-lite";

export const Header = observer(() => {
  const { push } = useRouter();
  const menu = useMenuStore();
  return (
    <header className={`${s.header} sm-container`}>
      <div className={s.socialMob}>
        <a href="#" className={s.telegramIcon}>
          <TelegramIcon />
        </a>
        <a href="#" className={s.whatsappIcon}>
          <WhatsappIcon />
        </a>
      </div>
      <div onClick={() => push("/")} className={s.logo}>
        <div className={s.logoWrapper}>
          <LogoIcon />
        </div>
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
              <a href="#" className={s.telegramIcon}>
                <TelegramIcon />
              </a>
              <a href="#" className={s.whatsappIcon}>
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
        <div className={s.bottom}>
          <nav className={s.navigation}>
            {Links.map((link) => (
              <Link key={link.url} href={link.url} className={s.link}>
                <span>{link.title}</span>
              </Link>
            ))}
          </nav>
          <Button variant="primary" className={s.estimationBtn}>
            оценить свое авто
          </Button>
        </div>
      </div>
      <Button onClick={() => menu.handleOpenMenu()} className={s.burger}>
        <BurgerIcon />
      </Button>
    </header>
  );
});
