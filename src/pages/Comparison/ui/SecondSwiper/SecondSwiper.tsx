import { FC, useEffect } from "react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";

import { useSwiperRef } from "shared/lib";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import { carList } from "shared/config";
import { CarCard } from "entities/CarCard";
import { SecondSwiperItem } from "../SecondSwiperItem/SecondSwiperItem";
import { ArrowLeftFill, ArrowRightFill } from "shared/ui";

export const SecondSwiper: FC<any> = ({ mainSwiper, setSecondSwiper }) => {
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();
  const [active, setActive] = useState(false);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 400) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, []);

  return (
    <div className={`${s.secondSwiper} ${active ? s.active : ""}`}>
      <Swiper
        //@ts-ignore
        onSwiper={(swiper) => setSecondSwiper(swiper)}
        modules={[Navigation, Controller]}
        slidesPerView={3.1}
        spaceBetween={30}
        controller={{ control: mainSwiper }}
        className={`${s.swiper} autoSwiper`}
        navigation={{
          //@ts-ignore
          prevEl: navPrev,
          //@ts-ignore
          nextEl: navNext,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          767: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 3.1,
          },
        }}
      >
        {carList.map((car) => (
          <SwiperSlide key={car.id} className={s.swiperItem}>
            <SecondSwiperItem
              img={car.img}
              price={car.price}
              title={car.title}
            />
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
