import { AboutSwiper } from "../AboutSwiper/AboutSwiper";
import { Hero } from "../Hero/Hero";
import { TeamSwiper } from "../TeamSwiper/TeamSwiper";
import s from "./styles.module.sass";

export const About = () => {
  return (
    <div className={s.about}>
      <Hero />
      <AboutSwiper />
      <TeamSwiper />
    </div>
  );
};
