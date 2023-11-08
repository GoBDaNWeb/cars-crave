import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Thumbs } from "swiper/modules";
import { thumbImages } from "pages/Brand/config";
import { useInView } from "react-intersection-observer";
import { CompareIcon } from "shared/ui";

interface IAboutSwiperProps {
  setSwiperView: Dispatch<SetStateAction<boolean>>;
}

export const AboutSwiper: FC<IAboutSwiperProps> = ({ setSwiperView }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ref, inView, entry] = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    setSwiperView(inView);
  }, [inView]);

  return (
    <div ref={ref} className={s.aboutSwiper}>
      <div className={s.info}>
        <Image src="/carBrands/brand3.png" width={40} height={40} alt="brand" />
        <div className={s.compare}>
          <span className={s.discount}>Скидка по трейд-ин</span>
          <span className={s.credit}>Кредит от 0.01%</span>
          <CompareIcon />
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
