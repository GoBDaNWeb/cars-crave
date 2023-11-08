import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import s from "./styles.module.sass";

interface ITeamItemProps {
  img: StaticImageData;
  name: string;
  position: string;
  email: string;
  phone: string | null;
  info: string;
}

export const TeamSwiperItem: FC<ITeamItemProps> = ({
  img,
  name,
  position,
  email,
  phone,
  info,
}) => {
  return (
    <div className={s.teamItem}>
      <div className={s.imageWrapper}>
        <Image src={img} fill alt="about" />
      </div>
      <div className={s.content}>
        <div className={s.info}>
          <span className={s.name}>{name}</span>
          <span className={s.position}>{position}</span>
          <div className={s.connection}>
            <a href={`mailto:${email}`}>{email}</a>
            {phone ? <a href={`tel:${phone}`}>{phone}</a> : null}
          </div>
        </div>
        <div className={s.about}>{info}</div>
      </div>
    </div>
  );
};
