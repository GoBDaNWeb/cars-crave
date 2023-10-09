import Image from "next/image";
import s from "./styles.module.sass";
import { FC } from "react";
import { Button, CompareIcon } from "shared/ui";

type Options = {
  [x: string]: string;
};
interface ICarCardProps {
  img: string;
  brand: string;
  price: string;
  title: string;
  options: Options[];
}

export const CarCard: FC<ICarCardProps> = ({
  img,
  brand,
  price,
  title,
  options,
}) => {
  return (
    <div className={s.carCard}>
      <div className={s.imageWrapper}>
        <Image src={img} fill alt="car" />
        <div className={s.info}>
          <Image src={brand} width={40} height={40} alt="brand" />
          <div className={s.compare}>
            <span>в наличии</span>
            <CompareIcon />
          </div>
        </div>
      </div>
      <div className={s.content}>
        <span className={s.price}>{price}</span>
        <span className={s.title}>{title}</span>
        <div className={s.options}>
          {options.map((option) => (
            <div key={option.id} className={s.option}>
              <span className={s.optionTitle}>{option.title}</span>
              <span className={s.optionLabel}>{option.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={s.btns}>
        <Button variant="dotted">подробнее</Button>
        <Button variant="primary">заказать</Button>
      </div>
    </div>
  );
};
