import { Swiper, SwiperSlide } from "swiper/react";
import s from "./styles.module.sass";
import { carList } from "../config";
import { CarCard } from "entities/CarCard";
import "swiper/css";
import { FC } from "react";

interface ICarSwiperProps {
  cardIsFull?: boolean;
}

export const CarSwiper: FC<ICarSwiperProps> = ({ cardIsFull = true }) => {
  return (
    <div className={s.carSwiper}>
      <Swiper slidesPerView="auto" spaceBetween={30} className="autoSwiper">
        {carList.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCard
              img={car.img}
              price={car.price}
              title={car.title}
              brand={car.brand}
              options={car.options}
              isFull={cardIsFull}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
