import s from "./styles.module.sass";

import { Hero } from "../Hero/Hero";
import { Stock } from "../Stock/Stock";
import { AboutBrand } from "../AboutBrand/AboutBrand";
import { Models } from "../Models/Models";

export const Brand = () => {
  return (
    <div className={s.brand}>
      <Hero />
      <AboutBrand />
      <Models />
      <Stock />
    </div>
  );
};
