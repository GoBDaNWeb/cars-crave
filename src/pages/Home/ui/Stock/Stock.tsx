import s from "./styles.module.sass";

import { ArrowRight, Button, GradientBg, Title } from "shared/ui";
import { CarSwiper } from "widgets/CarSwiper";

export const Stock = () => {
  return (
    <div className={s.stock}>
      <div className={s.top}>
        <Title variant="h3">В Наличии</Title>
        <Button className={s.aboutBtn}>
          <ArrowRight />
          <span>Подробнее о бренде</span>
        </Button>
      </div>
      <div className={s.stockList}>
        <CarSwiper />
      </div>
      <GradientBg className={s.grad} />
    </div>
  );
};
