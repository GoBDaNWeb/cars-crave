import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSwiperRef } from "shared/lib";

import "swiper/css";
import s from "./styles.module.sass";
import { ArrowLeftFill, ArrowRightFill } from "shared/ui";

export const AboutBrand = () => {
  const [aboutSwiper, setAboutSwiper] = useState(null);
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();

  return (
    <div className={`${s.about} container`}>
      <Swiper
        //@ts-ignore
        onSwiper={(swiper) => setAboutSwiper(swiper)}
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
          <SwiperSlide key={index} className={s.aboutItem}>
            <div className={s.imageWrapper}>
              <Image src="/brand/section1.jpg" fill alt="about" />
            </div>
            <div className={s.aboutItemContent}>
              <span>О бренде Hongqi</span>
              <p>
                Hongqi относится к китайским премиум-брендам, которые уже
                достаточно давно существуют на рынке. Первый выпуск автомобиля
                был в 1959 г. В течение нескольких десятилетий здесь выпускался
                ряд проверенных моделей, которые постоянно совершенствовались.
                Модельный ряд пережил несколько поколений и перезапусков,
                поэтому цена и комплектация Hongqi может заметно отличаться. Это
                автомобили с действительно оригинальным внешним видом. На
                российский рынок первые поставки начали производиться только в
                2023 году. К характерным чертам модельного ряда Hongqi можно
                отнести высокий уровень надежности, привлекательный внешний вид
                и хорошее техническое оснащение. Современные модели имеют
                качественную электронику.
              </p>
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
