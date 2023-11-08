import {
  InstagramIcon,
  LogoIcon,
  ParadigmaLogo,
  VkIcon,
  YoutubeIcon,
} from "shared/ui";
import s from "./styles.module.sass";
import { Map } from "entities/Map";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.logoWrapper}>
        <LogoIcon type="light" />
      </div>
      <div className={s.contentInfo}>
        <p className={s.copyright}>
          © Салон Cars Crave — электромобили премиум класса.
        </p>
        <p className={s.policy}>Политика конфиденциальности</p>
        <a
          target="_blank"
          href="https://paradigma-digital.ru/"
          className={s.paradigma}
        >
          <ParadigmaLogo />
          <span>
            разработка сайта – <br />
            paradigma
          </span>
        </a>
      </div>

      <div className={s.center}>
        <div className={s.phone}>
          <a href="tel:+7 (495) 647-6-647">+7 (495) 647-6-647</a>
          <span>заказать звонок</span>
        </div>
        <div className={s.info}>
          <span className={s.time}>09:00 - 21:00</span>
          <span>Москва, ул. Ленинградское шоссе, 74Б</span>
          <a href="maito:name.disc@elcar.com">name.disc@elcar.com</a>
        </div>

        <div className={s.social}>
          <a target="_blank" href="">
            <YoutubeIcon />
          </a>
          <a target="_blank" href="">
            <InstagramIcon />
          </a>
          <a target="_blank" href="">
            <VkIcon />
          </a>
        </div>
      </div>
      <div className={s.right}>
        <Map />
      </div>
    </footer>
  );
};
