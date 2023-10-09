import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import { Title } from "shared/ui";
import { craveImages } from "pages/Home/config";

export const Crave = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.crave}>
      <span className={s.title}>cars crave</span>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper:
            //@ts-ignore
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        className={s.swiperMain}
      >
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/crave-bg.png" fill alt="crave" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/crave-bg.png" fill alt="crave" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.imageWrapper}>
            <Image src="/crave-bg.png" fill alt="crave" loading="lazy" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        modules={[Thumbs]}
        className={`${s.swiperThumbs}`}
      >
        {craveImages.map((image, index) => (
          <SwiperSlide key={index} className={s.thumb}>
            <div className={s.imageWrapper}>
              <Image src={image.image} fill alt="crave" loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
