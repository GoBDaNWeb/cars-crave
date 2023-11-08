import Image from "next/image";

import s from "./styles.module.sass";

export const ModelItem = () => {
  return (
    <div className={s.model}>
      <div className={s.imageWrapper}>
        <Image src="/model/model.png" fill alt="model" />
      </div>
      <div className={s.modelContent}>
        <span className={s.modelTitle}>Hongqi E-HS9 </span>
        <p>от 10 200 000 ₽</p>
      </div>
    </div>
  );
};
