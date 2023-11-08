import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import s from "./styles.module.sass";

import { Button, CompareIcon } from "shared/ui";

type Options = {
  [x: string]: string;
};
interface ICarCardProps {
  img: string;
  brand: string;
  price: string;
  title: string;
  options?: Options[];
  fullOptions?: Options[];
  isFull?: boolean;
  hideBtns?: boolean;
}

export const CarCard: FC<ICarCardProps> = ({
  img,
  brand,
  price,
  title,
  options,
  fullOptions,
  isFull = true,
  hideBtns = false,
}) => {
  const { push } = useRouter();

  return (
    <div className={s.carCard}>
      <div className={s.imageWrapper}>
        <Image src={img} fill alt="car" />
        <div className={s.info}>
          <Image src={brand} width={40} height={40} alt="brand" />
          <div className={s.compare}>
            <span>Кредит от 0.01%</span>
            <CompareIcon />
          </div>
        </div>
      </div>
      <div
        className={`${s.content} ${isFull ? s.full : ""} ${
          hideBtns ? s.hideBtns : ""
        }`}
      >
        <span className={s.price}>{price}</span>
        <span className={s.title}>{title}</span>
        {isFull ? (
          <div className={s.options}>
            {options?.map((option) => (
              <div key={option.id} className={s.option}>
                <span className={s.optionTitle}>{option.title}</span>
                <span className={s.optionLabel}>{option.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className={s.fullOptions}>
            {fullOptions?.map((option) => (
              <div key={option.id} className={s.option}>
                <span className={s.optionTitle}>{option.title}</span>
                <span className={s.optionLabel}>{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`${s.btns} ${isFull ? s.full : ""}`}>
        {isFull ? (
          <>
            <Button
              variant="dotted"
              onClick={() => push("/model/Hongqi-E-HS9")}
            >
              подробнее
            </Button>
            <Button variant="primary">заказать</Button>
          </>
        ) : (
          <>
            <Button
              className={s.aboutBtn}
              variant="dotted"
              onClick={() => push("/model/Hongqi-E-HS9")}
            >
              подробнее
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
