import Image from "next/image";
import s from "./styles.module.sass";
import { FC } from "react";
import { Button, RemoveBtnIcon } from "shared/ui";

interface ISecondSwiperItemProps {
  img: string;
  title: string;
  price: string;
}

export const SecondSwiperItem: FC<ISecondSwiperItemProps> = ({
  img,
  title,
  price,
}) => {
  return (
    <div className={s.item}>
      <div className={s.imageWrapper}>
        <Image src={img} fill alt="car" />
        <Button className={s.removeBtn}>
          <RemoveBtnIcon />
        </Button>
      </div>
      <div className={s.info}>
        <span className={s.title}>{title}</span>
        <span className={s.price}>{price}</span>
      </div>
    </div>
  );
};
