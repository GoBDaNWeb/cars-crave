import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Thumbs } from "swiper/modules";
import { thumbImages } from "pages/Brand/config";
import { breadcrumbs } from "pages/Model/config";
import { Breadcrumbs, Button } from "shared/ui";

export const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.hero}>
      <div className={s.breadcrumbWrapper}>
        <Breadcrumbs breadcrumbs={breadcrumbs} color="white" />
      </div>
      <span className={s.title}>Hongqi E-HS9 </span>
      <div className={s.info}>
        <span className={s.price}>от 7 960 000 ₽</span>
        <div className={s.btns}>
          <Button className={s.stockBtn} variant="secondary">
            в наличии: 2 авто
          </Button>
          <Button className={s.orderBtn} variant="primary">
            записаться в поставку
          </Button>
        </div>
      </div>
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
            <Image src="/brand/brand-hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/brand/brand-hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/brand/brand-hero.jpg" fill alt="hero" loading="lazy" />
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
