import s from "./styles.module.sass";

import { Hero } from "../Hero/Hero";
import { Stock } from "../Stock/Stock";
import { AboutBrand } from "../AboutBrand/AboutBrand";
import { Models } from "../Models/Models";
import { Comparison } from "features/Сomparison";

export const Brand = () => {
  return (
    <div className={s.brand}>
      <Comparison />
      <Hero />
      <AboutBrand />
      <Models />
      <Stock />
    </div>
  );
};
