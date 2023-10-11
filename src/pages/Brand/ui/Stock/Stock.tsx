import { CarSwiper } from "widgets/CarSwiper";
import s from "./styles.module.sass";

export const Stock = () => {
  return (
    <div className={`${s.stock} container`}>
      <span className={s.title}>авто в наличии</span>
      <CarSwiper />
    </div>
  );
};
