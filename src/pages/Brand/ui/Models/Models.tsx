import s from "./styles.module.sass";

import { CarSwiper } from "widgets/CarSwiper";

export const Models = () => {
  return (
    <div className={`${s.models} container`}>
      <span className={s.title}>модельный ряд</span>
      <CarSwiper cardIsFull={false} />
    </div>
  );
};
