import Image from "next/image";

import s from "./styles.module.sass";
import { interiors } from "pages/Model/config/interior";

export const Interior = () => {
  return (
    <div className={`${s.interior} container`}>
      <div className={s.top}>
        <span className={s.title}>интерьер</span>
        <p>
          Оригинальный компактный роскошный автомобиль с новым языком городского
          дизайна.
        </p>
      </div>
      <div className={s.content}>
        <div className={s.imageWrapper}>
          <Image src="/interior/interior-main.jpg" fill alt="interior" />
        </div>
        <div className={s.elements}>
          {interiors.map((interior) => (
            <div key={interior.id} className={s.element}>
              <div className={s.imageWrapper}>
                <Image src={interior.img} fill alt="exterior" />
              </div>
              <div className={s.elementContent}>
                <span className={s.title}>{interior.title}</span>
                <p>{interior.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
