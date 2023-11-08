import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/pagination";

import { BrandItem } from "entities/BrandItem";
import { Button, Title } from "shared/ui";

export const Brands = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.9,
  });

  useEffect(() => {}, [inView]);
  return (
    <div ref={ref} className={`${s.brands} sm-container`} id="brand">
      <Title variant="h3" className="container">
        Бренды
      </Title>
      <div className={s.brandsList}>
        <BrandItem />
        <BrandItem />
        <BrandItem />
      </div>
      <div className={s.btnWrapper}>
        <Button variant="dotted" className={s.loadBtn}>
          загрузить еще бренды
        </Button>
      </div>
    </div>
  );
};
