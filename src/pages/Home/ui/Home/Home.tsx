import { Hero } from "../Hero/Hero";
import { Brands } from "../Brands/Brands";
import { Stock } from "../Stock/Stock";
import { AboutCompany } from "../AboutCompany/AboutCompany";
import { Crave } from "../Crave/Crave";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Stock />
      <Crave />
      <AboutCompany />
    </div>
  );
};
