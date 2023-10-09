import { ArrowRight, Button } from "shared/ui";
import s from "./styles.module.sass";
import Image from "next/image";

export const AboutCompany = () => {
  return (
    <div className={s.about}>
      <div className={s.text}>
        <p>
          Наша цель сделать премиальный электрокары доступными для российского
          рынка.
        </p>
        <Button className={s.aboutBtn}>
          <ArrowRight />
          <span>Подробнее о компании</span>
        </Button>
      </div>
      <div className={s.aboutList}>
        <div className={s.aboutItem}>
          <div className={s.text}>
            <span>Премиум авто</span>
            <p>
              Какая-то информация, которая подскажет посетителю сайта, что здесь
              про премиум.
            </p>
          </div>
          <div className={s.imageWrapper}>
            <Image src="/car-about.png" fill alt="about" />
          </div>
        </div>
        <div className={s.aboutItem}>
          <div className={s.text}>
            <span>Премиум авто</span>
            <p>
              Какая-то информация, которая подскажет посетителю сайта, что здесь
              про премиум.
            </p>
          </div>
          <div className={s.imageWrapper}>
            <Image src="/car-about.png" fill alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};
