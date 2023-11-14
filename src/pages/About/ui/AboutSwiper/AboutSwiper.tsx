import { useSwiperRef } from "shared/lib";
import s from "./styles.module.sass";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ArrowLeftFill, ArrowRightFill } from "shared/ui";
import { Tour } from "../Tour/Tour";

export const AboutSwiper = () => {
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();

  return (
    <div className={`${s.aboutSwiper} container`}>
      <Swiper
        slidesPerView={1.1}
        modules={[Navigation]}
        spaceBetween={70}
        className={s.swiper}
        navigation={{
          //@ts-ignore
          prevEl: navPrev,
          //@ts-ignore
          nextEl: navNext,
        }}
        breakpoints={{
          0: {
            spaceBetween: 30,
            slidesPerView: 1.2,
          },
          1024: {
            spaceBetween: 70,
            slidesPerView: 1.1,
          },
        }}
      >
        <SwiperSlide className={s.aboutItem}>
          <Tour />
          <div className={s.content}>
            <span className={s.title}>
              Работаем <br /> с 2020 года
            </span>
            <span className={s.subTitle}>
              Преодолевем грани в индустрии электрических автомобилей.
            </span>
            <p>
              Мы - компания, которая преодолевает грани в индустрии
              электрических автомобилей. С 20XX года мы предоставляем вам
              совершенные премиальные китайские электрокары. Наша миссия -
              сделать мир лучше, предлагая экологически чистые и передовые
              решения для вашей мобильности. Наши ценности - это основа всего,
              что мы делаем. Мы в постоянном поиске новых решений и инноваций.
              Узнайте о передовых технологиях, которые делают наши электрокары
              лучше для вас и для планеты.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.aboutItem}>
          <div className={s.imageWrapper}>
            <Image src="/crave-bg.png" fill alt="about" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.aboutItem}>
          <div className={s.imageWrapper}>
            <Image src="/crave-bg.png" fill alt="about" />
          </div>
        </SwiperSlide>
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
