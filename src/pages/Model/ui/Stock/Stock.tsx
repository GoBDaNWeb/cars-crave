import s from "./styles.module.sass";

import { CarSwiper } from "widgets/CarSwiper";

export const Stock = () => {
  return (
    <div className={`${s.stock} container`}>
      <span className={s.title}>авто в наличии</span>
      <CarSwiper />
    </div>
  );
};
