import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Thumbs } from "swiper/modules";
import { Breadcrumbs, Button } from "shared/ui";
import { breadcrumbs, thumbImages } from "pages/About/config";

export const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.hero}>
      <div className={s.breadcrumbWrapper}>
        <Breadcrumbs breadcrumbs={breadcrumbs} color="white" />
      </div>
      <span className={s.title}>О салоне </span>
      <p className={s.info}>
        Наша цель сделать премиальный электрокары доступными для российского
        рынка.
      </p>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper:
            //@ts-ignore
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        className={s.swiper}
        allowTouchMove={false}
        grabCursor={false}
      >
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/about/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/about/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/about/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/about/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/about/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/about/hero.jpg" fill alt="hero" loading="lazy" />
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
        {thumbImages.map((image, index) => (
          <SwiperSlide key={index} className={s.thumb}>
            <div className={s.imageWrapper}>
              <Image
                src={image.image.src}
                width={image.image.width}
                height={image.image.height}
                alt="brand"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
