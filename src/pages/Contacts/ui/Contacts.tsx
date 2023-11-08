import { Breadcrumbs, Button, Title } from "shared/ui";
import s from "./styles.module.sass";
import { breadcrumbs } from "../config";
import Image from "next/image";

export const Contacts = () => {
  return (
    <div className={`${s.contacts} container`}>
      <div className={s.breadcrumbWrapper}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <Title variant="h3">Контакты</Title>
      <div className={s.content}>
        <div className={s.left}>
          <div className={s.text}>
            <p>
              Описание как проехать, когда повернуть, на что ориентироваться и
              прочее. Дальше текст для массы.
            </p>
            <p>
              Мы в постоянном поиске новых решений и инноваций. Узнайте о
              передовых технологиях, которые делают наши электрокары лучше для
              вас и для планеты.
            </p>
          </div>
          <Button variant="dotted" className={s.routeBtn}>
            построить маршрут
          </Button>
        </div>
        <div className={s.right}>
          <div className={s.imageWrapper}>
            <Image src="/contacts/contacts1.jpg" fill alt="contacts" />
          </div>
          <div className={s.imageWrapper}>
            <Image src="/contacts/contacts2.jpg" fill alt="contacts" />
          </div>
        </div>
      </div>
    </div>
  );
};
