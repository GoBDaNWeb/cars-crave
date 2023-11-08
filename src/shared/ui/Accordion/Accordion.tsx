import React, { FC, PropsWithChildren, useState } from "react";
import s from "./styles.module.sass";
import { AccordionBtnIcon } from "..";
interface IAccordionProps {
  title: string;
}

export const Accordion: FC<PropsWithChildren<IAccordionProps>> = ({
  title,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        className={`${s.accordion} ${isActive ? s.active : ""}`}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <div className={s.icon}>
          <AccordionBtnIcon />
        </div>
      </button>
      <div className={`${s.content} ${isActive ? s.active : ""}`}>
        {children}
      </div>
    </div>
  );
};
