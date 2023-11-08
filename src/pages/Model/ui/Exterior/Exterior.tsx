import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import s from "./styles.module.sass";

import { Thumbs } from "swiper/modules";
import { useState } from "react";
import { exteriors, thumbs } from "pages/Model/config";
import { ExteriorSwiper } from "../ExteriorSwiper/ExteriorSwiper";

export const Exterior = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`${s.exterior} container`}>
      <div className={s.top}>
        <span className={s.title}>Экстерьер</span>
        <p>
          Красота новой роскоши. Благодаря экстремальным линиям и чистой красоте
          ZEEKR X переосмысляет традиционную эстетику внедорожника.
        </p>
      </div>
      <div className={s.content}>
        <div className={s.swiper}>
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                //@ts-ignore
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs]}
            className={s.mainSwiper}
            allowTouchMove={false}
            grabCursor={false}
          >
            <SwiperSlide>
              <div className={s.imageWrapper}>
                <Image
                  src="/exterior/exterior-swiper.jpg"
                  fill
                  alt="hero"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.imageWrapper}>
                <Image
                  src="/exterior/exterior-swiper.jpg"
                  fill
                  alt="hero"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.imageWrapper}>
                <Image
                  src="/exterior/exterior-swiper.jpg"
                  fill
                  alt="hero"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.imageWrapper}>
                <Image
                  src="/exterior/exterior-swiper.jpg"
                  fill
                  alt="hero"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            //@ts-ignore
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView="auto"
            modules={[Thumbs]}
            className={s.thumbs}
          >
            {thumbs.map((thumb, index) => (
              <SwiperSlide
                key={index}
                style={{ background: thumb }}
                className={s.thumb}
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ExteriorSwiper />
    </div>
  );
};
