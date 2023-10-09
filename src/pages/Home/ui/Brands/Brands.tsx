import { useInView } from "react-intersection-observer";
import { SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/pagination";

import { Carousel } from "../Carousel/Carousel";
import { BrandItem } from "../BrandItem/BrandItem";
import { Button, Title } from "shared/ui";
import { useEffect, useRef } from "react";

export const Brands = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.9,
  });

  useEffect(() => {}, [inView]);
  return (
    <div ref={ref} className={s.brands} id="brand">
      <Title variant="h3" className="container">
        Бренды
      </Title>
      <Carousel>
        <SwiperSlide>
          <BrandItem />
        </SwiperSlide>
        <SwiperSlide>
          <BrandItem />
        </SwiperSlide>
        <SwiperSlide>
          <BrandItem />
        </SwiperSlide>
        <SwiperSlide>
          <BrandItem />
        </SwiperSlide>
      </Carousel>
      <div className={s.btnWrapper}>
        <Button variant="dotted" className={s.loadBtn}>
          загрузить еще бренды
        </Button>
      </div>
    </div>
  );
};
