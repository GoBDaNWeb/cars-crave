import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import s from "./styles.module.sass";
import "swiper/css/navigation";

import "swiper/css";

import { carList } from "../config";
import { CarCard } from "entities/CarCard";
import { ArrowLeftFill, ArrowRightFill, Button } from "shared/ui";
import { useSwiperRef } from "shared/lib";

interface ICarSwiperProps {
  cardIsFull?: boolean;
  className?: string;
}

export const CarSwiper: FC<ICarSwiperProps> = ({
  cardIsFull = true,
  className,
}) => {
  const [carSwiper, setCarSwiper] = useState(null);
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();

  return (
    <div className={`${s.carSwiper} ${className ? className : ""}`}>
      <Swiper
        //@ts-ignore
        onSwiper={(swiper) => setCarSwiper(swiper)}
        slidesPerView="auto"
        spaceBetween={30}
        className="autoSwiper"
        modules={[Navigation]}
        navigation={{
          //@ts-ignore
          prevEl: navPrev,
          //@ts-ignore
          nextEl: navNext,
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
              isFull={cardIsFull}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.navigation}>
        <button
          className="swiper-nav-btn"
          ref={navPrevRef}
          onClick={() => {
            //@ts-ignore
            carSwiper.slidePrev();
          }}
        >
          <ArrowLeftFill />
        </button>
        <button
          className="swiper-nav-btn"
          ref={navNextRef}
          onClick={() => {
            //@ts-ignore
            carSwiper.slideNext();
          }}
        >
          <ArrowRightFill />
        </button>
      </div>
    </div>
  );
};
