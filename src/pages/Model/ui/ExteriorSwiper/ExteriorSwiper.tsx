import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import s from "./styles.module.sass";
import { ArrowLeftFill, ArrowRightFill, Button } from "shared/ui";
import { useSwiperRef } from "shared/lib";

export const ExteriorSwiper = () => {
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();

  return (
    <div className={`${s.exterior} container`}>
      <Swiper
        slidesPerView={1.15}
        modules={[Navigation]}
        spaceBetween={72}
        className={s.swiper}
        navigation={{
          //@ts-ignore
          prevEl: navPrev,
          //@ts-ignore
          nextEl: navNext,
        }}
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index} className={s.exteriorItem}>
            <div className={s.imageWrapper}>
              <Image src="/exterior/exterior1.jpg" fill alt="exterior" />
            </div>
            <div className={s.exteriorItemContent}>
              <span>
                заголовок тизера про экстерьер, например идеально-элегантная
                решетка радиатора
              </span>
              <p>
                Hongqi относится к китайским премиум-брендам, которые уже
                достаточно давно существуют на рынке. Первый выпуск автомобиля
                был в 1959 г. В течение нескольких десятилетий здесь выпускался
                ряд проверенных моделей, которые постоянно совершенствовались.
                Модельный ряд пережил несколько поколений и перезапусков,
                поэтому цена и комплектация Hongqi может заметно отличаться.
              </p>
              <Button variant="dotted" className={s.moreBtn}>
                читать далее
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.navigation}>
        <button className="swiper-nav-btn" ref={navPrevRef}>
          <ArrowLeftFill />
        </button>
        <button className="swiper-nav-btn" ref={navNextRef}>
          <ArrowRightFill />
        </button>
      </div>
    </div>
  );
};
