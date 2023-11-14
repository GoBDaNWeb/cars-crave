import { FC } from "react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";

import { useSwiperRef } from "shared/lib";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import { CarCard } from "entities/CarCard";
import { carList } from "shared/config";
import { ArrowLeftFill, ArrowRightFill } from "shared/ui";

export const MainSwiper: FC<any> = ({ secondSwiper, setMainSwiper }) => {
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();

  return (
    <div className={s.mainSwiper}>
      <Swiper
        //@ts-ignore
        onSwiper={(swiper) => setMainSwiper(swiper)}
        modules={[Navigation, Controller]}
        slidesPerView={3.1}
        controller={{ control: secondSwiper }}
        spaceBetween={30}
        className="autoSwiper"
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
          <SwiperSlide key={car.id}>
            <CarCard
              img={car.img}
              price={car.price}
              title={car.title}
              brand={car.brand}
              options={car.options}
              fullOptions={car.fullOptions}
              isFull={false}
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
