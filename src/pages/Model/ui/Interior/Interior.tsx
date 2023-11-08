import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import s from "./styles.module.sass";
import { interiors } from "pages/Model/config/interior";
import { useState } from "react";
import { Button } from "shared/ui";

export const Interior = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`${s.interior} container`}>
      <div className={s.top}>
        <span className={s.title}>интерьер</span>
        <p>
          Оригинальный компактный роскошный автомобиль с новым языком городского
          дизайна.
        </p>
      </div>
      <div className={s.content}>
        <div className={s.swiper}>
          <Button className={s.panoramaBtn} variant="primary">
            панорама
          </Button>
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
            <SwiperSlide className={s.swiperItem}>
              <span className={s.title}>
                заголовок слайда про интерьер, например премиальные материалы
                отделки салона
              </span>
              <div className={s.imageWrapper}>
                <Image
                  src="/interior/interior-main.jpg"
                  fill
                  alt="interior"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.swiperItem}>
              <span className={s.title}>
                заголовок слайда про интерьер, например премиальные материалы
                отделки салона
              </span>
              <div className={s.imageWrapper}>
                <Image
                  src="/interior/interior-main.jpg"
                  fill
                  alt="interior"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.swiperItem}>
              <span className={s.title}>
                заголовок слайда про интерьер, например премиальные материалы
                отделки салона
              </span>
              <div className={s.imageWrapper}>
                <Image
                  src="/interior/interior-main.jpg"
                  fill
                  alt="interior"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.swiperItem}>
              <span className={s.title}>
                заголовок слайда про интерьер, например премиальные материалы
                отделки салона
              </span>
              <div className={s.imageWrapper}>
                <Image
                  src="/interior/interior-main.jpg"
                  fill
                  alt="interior"
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
            {interiors.map((thumb, index) => (
              <SwiperSlide key={index} className={s.thumb}>
                <div className={s.imageWrapper}>
                  <Image
                    src={thumb.image.src}
                    width={thumb.image.width}
                    height={thumb.image.height}
                    alt="brand"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
