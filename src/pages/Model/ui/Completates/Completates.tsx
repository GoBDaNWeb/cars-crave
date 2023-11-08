import { CarSwiper } from "widgets/CarSwiper";

import s from "./styles.module.sass";

export const Completates = () => {
  return (
    <div className={`${s.completates} container`}>
      <span className={s.title}>комплектации</span>
      <CarSwiper cardIsFull={false} className={s.completatesList} />
    </div>
  );
};
