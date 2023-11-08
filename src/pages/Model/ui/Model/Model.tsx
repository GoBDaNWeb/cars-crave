import s from "./styles.module.sass";

import { Completates } from "../Completates/Completates";
import { Exterior } from "../Exterior/Exterior";
import { Hero } from "../Hero/Hero";
import { Interior } from "../Interior/Interior";
import { Stock } from "../Stock/Stock";
import { Multimedia } from "../Multimedia/Multimedia";
import { AboutSwiper } from "../AboutSwiper/AboutSwiper";

export const Model = () => {
  return (
    <div className={s.model}>
      <Hero />
      <Exterior />
      <Interior />
      <Multimedia />
      <AboutSwiper />
      <Completates />
      <Stock />
    </div>
  );
};
