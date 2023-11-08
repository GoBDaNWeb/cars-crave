import { useSwiperRef } from "shared/lib";
import s from "./styles.module.sass";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ArrowLeftFill, ArrowRightFill } from "shared/ui";
import { team } from "pages/About/config";
import { TeamSwiperItem } from "../TeamSwiperItem/TeamSwiperItem";

export const TeamSwiper = () => {
  const [navPrev, navPrevRef] = useSwiperRef();
  const [navNext, navNextRef] = useSwiperRef();

  return (
    <div className={`${s.teamSwiper} container`}>
      <span className={s.title}>Наша команда</span>
      <Swiper
        slidesPerView={3.1}
        modules={[Navigation]}
        spaceBetween={30}
        className={s.swiper}
        navigation={{
          //@ts-ignore
          prevEl: navPrev,
          //@ts-ignore
          nextEl: navNext,
        }}
      >
        {team.map((person, index) => (
          <SwiperSlide key={index} className={s.aboutItem}>
            <TeamSwiperItem
              key={person.id}
              name={person.name}
              email={person.email}
              img={person.img}
              info={person.info}
              phone={person.phone}
              position={person.position}
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
