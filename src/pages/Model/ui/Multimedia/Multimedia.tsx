import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import s from "./styles.module.sass";
import { multimediaList } from "pages/Model/config/multimedia";
import Image from "next/image";
export const Multimedia = () => {
  return (
    <div className={`${s.multimedia} container`}>
      <div className={s.top}>
        <span className={s.title}>мультимедиа</span>
        <p>
          Интеллектуальная вычислительная платформа кабины, взаимодействие с
          которой происходит быстрее и плавнее.
        </p>
      </div>
      <Swiper slidesPerView="auto" spaceBetween={30} className="autoSwiper">
        {multimediaList.map((multimedia) => (
          <SwiperSlide key={multimedia.id} className={s.multimediaItem}>
            <div className={s.imageWrapper}>
              <Image src={multimedia.img} fill alt="multimedia" />
            </div>
            <p>{multimedia.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
