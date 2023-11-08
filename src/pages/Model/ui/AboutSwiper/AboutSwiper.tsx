import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import s from "./styles.module.sass";
import { ArrowLeftFill, ArrowRightFill, Button } from "shared/ui";
import { useSwiperRef } from "shared/lib";

export const AboutSwiper = () => {
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();

  return (
    <div className={`${s.about} container`}>
      <Swiper
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
              <Image src="/exterior/exterior1.jpg" fill alt="exterior" />
            </div>
            <div className={s.aboutItemContent}>
              <span className={s.title}>Контроль на дороге</span>
              <span className={s.subtitle}>
                Интеллектуальная система полного привода с молниеносным
                переключением режимов.
              </span>
              <p>
                Он может как ускориться на трассе, так и осторожно ездить по
                городу, в этом ему помогают интеллектуальные системы
                сканирования и управления движением.
              </p>
              <Button variant="dotted" className={s.moreBtn}>
                читать далее
              </Button>
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
