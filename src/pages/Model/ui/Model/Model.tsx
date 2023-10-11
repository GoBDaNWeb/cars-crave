import { Section } from "entities/Section";
import { Completates } from "../Completates/Completates";
import { Exterior } from "../Exterior/Exterior";
import { Hero } from "../Hero/Hero";
import { Interior } from "../Interior/Interior";
import { Stock } from "../Stock/Stock";
import { sectionContent } from "pages/Model/config";
import s from "./styles.module.sass";
import { Multimedia } from "../Multimedia/Multimedia";
export const Model = () => {
  return (
    <div className={s.model}>
      <Hero />
      <Exterior />
      <Interior />
      <Multimedia />
      <div className={`${s.sections} container`}>
        {sectionContent.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            paragraphs={section.paragraphs}
            textIsLeft={section.textIsLeft}
            image={section.image}
            boldText={section.boldText}
          />
        ))}
      </div>
      <Completates />
      <Stock />
    </div>
  );
};
