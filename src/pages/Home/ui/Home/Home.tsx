import { Hero } from "../Hero/Hero";
import { Brands } from "../Brands/Brands";
import { Stock } from "../Stock/Stock";
import { AboutCompany } from "../AboutCompany/AboutCompany";
import { Crave } from "../Crave/Crave";
import { Forms } from "../Forms/Forms";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Stock />
      <Forms />
      <Crave />
      <AboutCompany />
    </div>
  );
};
