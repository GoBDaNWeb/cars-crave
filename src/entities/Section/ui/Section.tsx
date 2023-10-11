import { FC } from "react";

import s from "./styles.module.sass";
import { Title } from "shared/ui";
import Image from "next/image";

interface ISectionProps {
  title: string;
  paragraphs: string[];
  image: string;
  textIsLeft: boolean;
  boldText?: string;
}

export const Section: FC<ISectionProps> = ({
  title,
  paragraphs,
  image,
  textIsLeft,
  boldText,
}) => {
  const sectionClass = `${s.section} ${textIsLeft ? s.left : ""}`;

  return (
    <div className={sectionClass}>
      <div className={s.text}>
        <Title variant="h4">{title}</Title>
        <div className={s.paragraphsList}>
          <p className={s.boldText}>{boldText}</p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className={s.imageWrapper}>
        <Image src={image} fill alt={title} />
      </div>
    </div>
  );
};
