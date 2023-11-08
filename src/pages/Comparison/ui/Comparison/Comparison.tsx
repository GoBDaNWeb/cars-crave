import { useState } from "react";
import s from "./styles.module.sass";
import { MainSwiper } from "../MainSwiper/MainSwiper";
import { SecondSwiper } from "../SecondSwiper/SecondSwiper";
import { Breadcrumbs, Button, Title } from "shared/ui";
import { breadcrumbs } from "pages/Comparison/config";

export const Comparison = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className={`${s.comparison} container`}>
      <div className={s.breadcrumbWrapper}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className={s.top}>
        <Title variant="h3">сравнение</Title>
      </div>
      <SecondSwiper mainSwiper={mainSwiper} setSecondSwiper={setSecondSwiper} />
      <MainSwiper secondSwiper={secondSwiper} setMainSwiper={setMainSwiper} />
      <div className={s.btnWrapper}>
        <Button variant="dotted" className={s.moreBtn}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
