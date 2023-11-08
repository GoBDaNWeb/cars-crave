import Image from "next/image";
import s from "./styles.module.sass";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Thumbs, Mousewheel, FreeMode } from "swiper/modules";
import { thumbImages } from "pages/Home/config";

export const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ref, inView, entry] = useInView({
    threshold: 1,
  });

  return (
    <div className={s.hero}>
      <div ref={ref} className={s.visible} />
      <div className={s.innerContent}>
        <span>Электромобили премиум класса</span>
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
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={50}
        slidesPerView="auto"
        mousewheel={true}
        freeMode={true}
        // centeredSlides={true}
        modules={[FreeMode, Mousewheel, Thumbs]}
        className={`${s.thumbs} hero-thumbs`}
      >
        {thumbImages.map((image, index) => (
          <SwiperSlide key={index}>
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
