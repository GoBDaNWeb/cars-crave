import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

import { Thumbs } from "swiper/modules";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ArrowRight, Button, Title } from "shared/ui";
import { thumbCarImages } from "pages/Home/config";

export const BrandItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { push } = useRouter();

  return (
    <div className={s.brandItem}>
      <div className={s.content}>
        <div className={s.top}>
          <div className={s.imageWrapper}>
            <Image src="/brand.png" fill alt="brand" />
          </div>
          <Title variant="h4">Zeekr</Title>
        </div>
        <p className={s.text}>
          Zeekr – инновационный бренд электромобилей премиум-класса, созданный в
          2021 году как дочерняя компания Geely Automobile. Продукция компании –
          ультрасовременные электрокары, поражающие своей оснащенностью и
          энергоэффективностью. ZEEKR X 2023 года – яркое тому подтверждение.
        </p>
        <Button onClick={() => push("/brand/Hongqi")} className={s.aboutBrand}>
          <ArrowRight />
          <span>Подробнее о бренде</span>
        </Button>
      </div>
      <div className={s.swiper}>
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
              <Image src="/car.jpg" fill alt="car" loading="lazy" />
              <div className={s.innerContent}>
                <Title variant="h4" className={s.title}>
                  Zeekr 001
                </Title>
                <Button className={s.viewBtn}>
                  <span>Смотреть модель</span>
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.imageWrapper}>
              <Image src="/car.jpg" fill alt="car" loading="lazy" />
              <div className={s.innerContent}>
                <Title variant="h4" className={s.title}>
                  Zeekr 001
                </Title>
                <Button className={s.viewBtn}>
                  Смотреть модель
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.imageWrapper}>
              <Image src="/car.jpg" fill alt="car" loading="lazy" />
              <div className={s.innerContent}>
                <Title variant="h4" className={s.title}>
                  Zeekr 001
                </Title>
                <Button className={s.viewBtn}>
                  Смотреть модель
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          //@ts-ignore
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={10}
          modules={[Thumbs]}
          className={`${s.swiperThumbs} thumbsCarsSwiper`}
        >
          {thumbCarImages.map((image, index) => (
            <SwiperSlide key={index} className={s.thumb}>
              <div className={s.imageWrapper}>
                <Image
                  src={image.image.src}
                  width={image.image.width}
                  height={image.image.height}
                  alt="brand"
                  loading="lazy"
                />
              </div>
              <p>P7</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
