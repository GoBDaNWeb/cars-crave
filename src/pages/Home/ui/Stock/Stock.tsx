import { carList } from "pages/Home/config";
import s from "./styles.module.sass";
import { CarCard } from "entities/CarCard";
import { ArrowRight, Button, Title } from "shared/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const Stock = () => {
  return (
    <div className={s.stock}>
      <div className={s.top}>
        <Title variant="h3">В Наличии</Title>
        <Button className={s.aboutBtn}>
          <ArrowRight />
          <span>Подробнее о бренде</span>
        </Button>
      </div>
      <div className={s.stockList}>
        <Swiper slidesPerView="auto" spaceBetween={30} className="autoSwiper">
          {carList.map((car) => (
            <SwiperSlide key={car.id}>
              <CarCard
                img={car.img}
                price={car.price}
                title={car.title}
                brand={car.brand}
                options={car.options}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
