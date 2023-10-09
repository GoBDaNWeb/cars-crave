import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { Swiper, useSwiper } from "swiper/react";
import { Mousewheel, EffectCreative } from "swiper/modules";

import s from "./styles.module.sass";
import "swiper/css";
export const Carousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      //@ts-ignore
      effect={"creative"}
      className={`${s.carousel} sm-container`}
      mousewheel={true}
      modules={[Mousewheel, EffectCreative]}
      direction="vertical"
      speed={600}
      creativeEffect={{
        prev: {
          shadow: false,
          translate: [0, "0%", -100],
        },
        next: {
          translate: [0, "100%", 0],
        },
      }}
    >
      {children}
    </Swiper>
  );
};
