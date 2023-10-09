import Image from "next/image";
import s from "./styles.module.sass";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";
import { thumbImages } from "pages/Home/config";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isBottom, setBottom] = useState(false);
  const [ref, inView, entry] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    const brand = document.querySelector("#brand");

    let lastScrollPos = window.scrollY || document.documentElement.scrollTop;

    const checkScrollDirection = () => {
      let currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollPos > lastScrollPos) {
        setBottom(true);
      } else {
        setBottom(false);
      }

      lastScrollPos = currentScrollPos;
    };
    if (inView) {
      window.addEventListener("scroll", checkScrollDirection);
      if (isBottom) {
        brand?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.removeEventListener("scroll", checkScrollDirection);
    }
  }, [inView, isBottom]);

  return (
    <div className={s.hero}>
      <div ref={ref} className={s.visible} />
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper:
            //@ts-ignore
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        className={s.swiper}
      >
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/hero2.jpg" fill alt="hero" loading="lazy" />
            <div className={s.innerContent}>
              <span>
                Электромобили премиум <br /> класса
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={10}
        modules={[Thumbs]}
        className={s.thumbs}
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
