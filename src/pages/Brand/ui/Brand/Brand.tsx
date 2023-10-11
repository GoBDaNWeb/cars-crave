import s from "./styles.module.sass";

import { Hero } from "../Hero/Hero";
import { sectionContent } from "pages/Brand/config";
import { Section } from "entities/Section";
import { Models } from "../Models/Models";
import { Stock } from "../Stock/Stock";

export const Brand = () => {
  return (
    <div className={s.brand}>
      <Hero />
      <div className={`${s.sections} container`}>
        {sectionContent.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            paragraphs={section.paragraphs}
            textIsLeft={section.textIsLeft}
            image={section.image}
          />
        ))}
      </div>
      <Models />
      <Stock />
    </div>
  );
};
