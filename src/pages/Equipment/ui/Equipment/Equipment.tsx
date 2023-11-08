import { Breadcrumbs, Title } from "shared/ui";
import s from "./styles.module.sass";
import { breadcrumbs } from "pages/Equipment/config";
import { About } from "../About/About";
import { Programs } from "../Programs/Programs";
import { CreditForm } from "features/CreditForm";
import { CarSwiper } from "widgets/CarSwiper";

export const Equipment = () => {
  return (
    <div className={s.equipment}>
      <div className={`${s.breadcrumbWrapper} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <Title className={`${s.title} container`} variant="h3">
        Hongqi E-HS9
      </Title>
      <About />
      <Programs />

      <div className={`${s.carSwiperWrapper} container`}>
        <Title variant="h3">HONGQI E-HS9 в наличии</Title>
        <CarSwiper />
      </div>
      <div className={`${s.carSwiperWrapper} container`}>
        <Title variant="h3">другие авто в наличии</Title>
        <CarSwiper />
      </div>
    </div>
  );
};
